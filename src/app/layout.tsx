import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Olimpiada Oaxaqueña de informática femenil',
  description: 'Si eres una estudiante comprometida y quieres representar con orgullo al estado de Oaxaca, esta olimpiada es para ti.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
