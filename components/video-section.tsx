"use client"

import { useRef, useEffect, useState } from "react";

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // Carga un poco antes de llegar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div>
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Conoce más sobre nosotros
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-2">
            Descubre nuestro propósito
          </h2>
        </div>
        
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 flex items-center justify-center">
          {isVisible ? (
            <video 
              controls 
              preload="metadata" 
              className="w-full h-full object-cover"
            >
              <source src="/videoPublicitario.mp4" type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>
          ) : (
            <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Cargando video...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
