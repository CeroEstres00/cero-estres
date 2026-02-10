"use client"

import { ComponentProps, ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import { useState } from "react"

interface ContactFormDialogProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  // Puedes extender directamente de las props del Botón para mayor facilidad
}

export function ContactFormDialog({ children, ...props }: ContactFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      city: formData.get("city") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Error al enviar la solicitud.")
      }

      setSubmitted(true)
      setTimeout(() => {
        setOpen(false)
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant={"default"} size={"xl"} {...props} onClick={() => setOpen(true)} className={`border-white text-white bg-secondary hover:bg-secondary/50 ${props.className}`}>
        {children}
      </Button>

      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Solicitud Enviada</h3>
            <p className="text-center text-muted-foreground">
              Nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">
                Solicita tu Consulta Gratuita
              </DialogTitle>
              <DialogDescription>
                Completa tus datos y un asesor se pondrá en contacto contigo en menos de 24 horas. Sin compromiso.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre y apellidos"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Tu ciudad"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+34 600 000 000"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Cuéntanos brevemente tu situación</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe tu situación financiera actual y cómo podemos ayudarte..."
                  rows={3}
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="mt-2 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Quiero mi Consulta Gratuita"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Tus datos están protegidos. No compartimos tu información con terceros.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
