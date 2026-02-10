import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import React from "react";
import './globals.css';

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: 'C3 | Ceroestrés Financiero',
  description: 'Soluciones financieras para eliminar el estrés de tus finanzas personales y empresariales',
  icons: {
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
