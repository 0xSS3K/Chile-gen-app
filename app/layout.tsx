import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChileGen - Chilean Identity Generator',
  description: 'Generate random Chilean identities for testing purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}

