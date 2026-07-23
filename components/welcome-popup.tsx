"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MessageCircle, HelpCircle, PhoneCall } from "lucide-react"
import { ContactFormDialog } from "@/components/contact-form-dialog"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check session storage to see if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("ceroestres-popup-seen")
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500) // 1.5 seconds delay

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      sessionStorage.setItem("ceroestres-popup-seen", "true")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md border-primary/20 shadow-2xl bg-white dark:bg-zinc-900 rounded-xl overflow-hidden p-0 gap-0">
        {/* Decorative Top Accent */}
        <div className="bg-primary h-2 w-full" />
        
        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          <div className="bg-secondary/10 p-3 rounded-full mb-4 text-secondary">
            <HelpCircle className="h-10 w-10 animate-bounce" />
          </div>

          <DialogHeader className="flex flex-col items-center">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              ¡Nosotros te ayudamos!
            </DialogTitle>
            <DialogDescription className="text-base text-zinc-600 dark:text-zinc-300 mt-2 max-w-sm">
              ¿Deudas atrasadas, llamadas de cobro constantes o procesos de embargo? Recupera tu tranquilidad y estabilidad financiera hoy mismo.
            </DialogDescription>
          </DialogHeader>

          <div className="w-full flex flex-col gap-3 mt-6">
            {/* WhatsApp CTA */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/573042675943"
              onClick={() => handleClose(false)}
              className="w-full h-12 inline-flex gap-2 items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>

            {/* Callback CTA */}
            <ContactFormDialog
              onClick={() => handleClose(false)}
              className="w-full h-12 inline-flex gap-2 items-center justify-center bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <PhoneCall className="h-5 w-5" />
              Solicitar Asesoría Gratuita
            </ContactFormDialog>

            {/* Dismiss Link */}
            <button
              onClick={() => handleClose(false)}
              className="mt-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-sm transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
