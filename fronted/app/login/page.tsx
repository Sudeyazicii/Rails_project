"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ClipboardList } from "lucide-react"

import { useAuth } from "@/context/AuthContext"  // ✅ EKLENDİ

export default function LoginPage() {
  const router = useRouter()
  const { setUser, setToken } = useAuth()         // ✅ EKLENDİ

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Giriş başarısız")
        setIsLoading(false)
        return
      }

      // ✅ Token & User artık Context’e kaydediliyor
      setToken(data.token)
      setUser(data.user)

      router.push("/surveys")
    } catch (err) {
      setError("Sunucuya bağlanılamadı")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-3">
                <ClipboardList className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl font-bold">Giriş Yap</CardTitle>
              <CardDescription>Anket yönetim sisteminize erişmek için giriş yapın</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-cy="login-email-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    data-cy="login-password-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                  data-cy="login-submit"
                >
                  {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
                </Button>
              </form>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>
                  Hesabın yok mu?{" "}
                  <Link href="/register" className="hover:text-accent transition-colors font-medium">
                    Kayıt Ol
                  </Link>
                </p>
              </div>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                <Link href="/" className="hover:text-accent transition-colors">
                  Ana sayfaya dön
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
