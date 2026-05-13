import { db } from "@/lib/firebase-admin"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone } = body 

    // 1. Validaciones rápidas
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
      createdAt: new Date().toISOString(),
    }

    // 2. Esperamos SOLO a Firebase porque necesitamos su ID para la respuesta
    const docRef = await db.collection("contacts").add(sanitizedData);
    
    // 3. Disparamos Google Sheets en segundo plano (SIN 'await')
    const urlSheets = process.env.APPSCRIPT_URL || "undefined";
    
    // Guardamos la promesa en una variable o simplemente la ejecutamos
    fetch(urlSheets, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: sanitizedData.name,
        telefono: sanitizedData.phone,
        email: sanitizedData.email,
      }),
    }).catch(err => console.error("Error en Google Script:", err));

    // 4. Retornamos la respuesta inmediatamente al usuario
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