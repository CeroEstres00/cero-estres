"use client"

import { Building2, TramFront } from "lucide-react";

export function GoogleMapSection() {
  // Coordenadas de ejemplo (puedes cambiarlas por la ubicación exacta de tu oficina o punto de encuentro)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3861905759684!2d-75.60640978963808!3d6.1612317519512985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683cea20000bf%3A0x360b4dc8bb9d18b2!2sCra.%2048%20%2350%20Sur%20-%20128%2C%20Sabaneta%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1772151644965!5m2!1ses!2sco"
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Columna de Texto e Información */}
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                ¿Dónde encontrarnos?
              </span>
              <h2 className="text-4xl font-extrabold text-slate-800 mt-2">
                Nuestra ubicación
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Sabemos que dar el primer paso hacia la libertad financiera requiere confianza. Te esperamos en nuestras oficinas para brindarte una asesoría legal personalizada y diseñar tu plan de insolvencia.
            </p>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                <Building2 className="text-orange-500 self-center" />
                <div>
                  <h4 className="font-bold text-slate-800">Centro Comercial Mayorca</h4>
                  <p className="text-sm text-gray-500">Oficina 8013</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                <TramFront className="text-blue-500 self-center"/>
                <div>
                  <h4 className="font-bold text-slate-800">Estación Itagüi</h4>
                  <p className="text-sm text-gray-500">Punto cercano a nuestra ubicación</p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Columna del Mapa */}
          <div className="w-full lg:w-2/3 h-112.5 relative">
            <div className="absolute inset-0 bg-orange-100 rounded-3xl rotate-1 hidden lg:block"></div>
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <iframe
                title="Ubicación Cero Estres"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-20 contrast-[1.1]"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
