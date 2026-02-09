import { NextResponse } from "next/server"
import { db } from "@/lib/firebase-admin"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, phone, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nombre, email y teléfono son obligatorios." },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato del email no es válido." },
        { status: 400 },
      )
    }

    const docRef = await db.collection("contacts").add({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message?.trim() || "",
      createdAt: new Date().toISOString(),
      status: "new",
    })

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error saving contact:", error)
    return NextResponse.json(
      { error: "Error al guardar la solicitud. Inténtalo de nuevo." },
      { status: 500 },
    )
  }
}
