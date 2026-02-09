"use client"

import React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const el = document.getElementById(targetId)
      if (el) {
        const headerOffset = 80
        const elementPosition = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        })
      }
      setIsMenuOpen(false)
    },
    [],
  )

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-baseline">
              <span className={`text-3xl font-bold transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>C</span>
              <span className={`text-xl font-semibold transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>ERO</span>
              <span className={`text-xl font-light mx-0.5 transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>es</span>
              <span className="text-3xl font-bold text-secondary">3</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? "text-foreground/80 hover:text-secondary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+34900000000"
              className={`flex items-center gap-2 font-semibold transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="h-5 w-5 text-secondary" />
              <span>900 000 000</span>
            </a>
            <ContactFormDialog>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Consulta Gratis
              </Button>
            </ContactFormDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${scrolled ? "border-border" : "border-white/20 bg-primary/95 backdrop-blur"}`}>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    scrolled
                      ? "text-foreground/80 hover:text-secondary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className={`pt-4 border-t ${scrolled ? "border-border" : "border-white/20"}`}>
                <a
                  href="tel:+34900000000"
                  className={`flex items-center gap-2 font-semibold mb-4 ${scrolled ? "text-primary" : "text-white"}`}
                >
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>900 000 000</span>
                </a>
                <ContactFormDialog>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Consulta Gratis
                  </Button>
                </ContactFormDialog>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
