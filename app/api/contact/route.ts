import { db } from "@/lib/firebase-admin"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message} = body 

    // 1. Validaciones rápidas (falla pronto)
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Campos obligatorios faltantes" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message?.trim() || "",
      createdAt: new Date().toISOString(),
    }

    // 2. Ejecución en paralelo para ahorrar tiempo
    // Usamos Promise.all para que Firebase y Google corran al mismo tiempo
    const firebasePromise = db.collection("contacts").add(sanitizedData);
    
    const urlSheets = process.env.APPSCRIPT_URL || "undefined";
    const googlePromise = fetch(urlSheets, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: sanitizedData.name,
        email: sanitizedData.email,
        mensaje: sanitizedData.message,
      }),
    }).catch(err => console.error("Error en Google Script:", err)); // No dejamos que Google rompa todo

    // Esperamos ambas, pero el tiempo total será el de la más lenta
    const [docRef] = await Promise.all([firebasePromise, googlePromise]);

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error crítico:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    )
  }
}