"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ClipboardList, LogOut } from "lucide-react"

import { useAuth } from "@/context/AuthContext"  // ✅ EKLENDİ

export function Navigation() {
  const router = useRouter()
  const { user, logout } = useAuth()              // ✅ EKLENDİ

  const handleLogout = () => {
    logout()                                      // ✅ context’ten logout
    router.push("/")                              // ✅ yönlendirme
  }

  return (
    <nav className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <ClipboardList className="h-6 w-6" />
            <span className="text-foreground">Anket Yönetim Sistemi</span>
          </Link>

          <div className="flex items-center gap-4">

            {user ? ( // ✅ Eğer kullanıcı giriş yaptıysa
              <>
                <Link
                  href="/surveys"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Anketler
                </Link>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="gap-2 bg-transparent"
                >
                  <LogOut className="h-4 w-4" />
                  Çıkış Yap
                </Button>
              </>
            ) : (
              // ✅ Giriş yapılmamışsa
              <Link href="/login">
                <Button variant="default" size="sm">
                  Giriş Yap
                </Button>
              </Link>
            )}

          </div>
        </div>
      </div>
    </nav>
  )
}
