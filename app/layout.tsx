import './globals.css'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh" className="overflow-x-hidden">
      <body className="overflow-x-hidden min-h-screen w-full">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  )
} 