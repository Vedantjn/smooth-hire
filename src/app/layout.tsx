// src/app/layout.tsx
import '@/styles/globals.css'

export const metadata = {
  title: 'EasyApply',
  description: 'Streamlined job application process',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  )
}