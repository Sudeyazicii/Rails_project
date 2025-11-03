import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ClipboardList, BarChart3, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent/10 p-4">
            <ClipboardList className="h-12 w-12 text-accent" />
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Anket Yönetim Sistemi
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Anketlerinizi kolayca oluşturun, yönetin ve analiz edin. Modern ve kullanıcı dostu arayüzümüzle anket
            süreçlerinizi optimize edin.
          </p>

          <Link href="/login">
            <Button size="lg" className="text-base px-8">
              Giriş Yap
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-3">
              <ClipboardList className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">Kolay Anket Oluşturma</h3>
            <p className="text-sm text-muted-foreground">
              Sürükle-bırak arayüzü ile dakikalar içinde profesyonel anketler oluşturun.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-3">
              <BarChart3 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">Detaylı Analiz</h3>
            <p className="text-sm text-muted-foreground">
              Gerçek zamanlı raporlar ve grafiklerle anket sonuçlarınızı analiz edin.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-3">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">Takım Çalışması</h3>
            <p className="text-sm text-muted-foreground">
              Ekip üyelerinizle birlikte çalışın ve anketleri kolayca paylaşın.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
