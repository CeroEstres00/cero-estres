import { Building, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:place-items-center">
          {/* Brand & Contact */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex items-baseline mb-6">
              <Image src="/logoParaFondoNegro.avif" alt="C3 Logo" width={32} height={32} className="size-32 object-contain" unoptimized/>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              CEROESTRES Financiero
              <br />
              Asesorías en Insolvencia SAS
              
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="https://wa.me/573042675943" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+57 304 2675943</span>
              </a>
              <span className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                <Building className="h-5 w-5 text-secondary" />
                <span>NIT 901.996.201-6</span>
              </span>
              <span className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5 text-secondary" />
                <span>ceroestresinsolvencia@gmail.com</span>
              </span>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>Carrera 48 # 50 sur 128<br />Oficina 8013</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Social & Legal */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Síguenos</h3>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Ceroestrés Financiero. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
