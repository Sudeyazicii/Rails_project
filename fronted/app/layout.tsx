import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/context/AuthContext' // ← YENİ EKLEME
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Anket Yönetim Sistemi', // ← İstersen güncelle
  description: 'Survey Management System',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr"> {/* ← en yerine tr yaptım */}
      <body className={`font-sans antialiased`}>
        <AuthProvider> {/* ← YENİ WRAPPER */}
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}