import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, BarChart3, Users, Calendar } from "lucide-react"

// Mock survey data
const surveys = [
  {
    id: 1,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Ürün ve hizmetlerimiz hakkında müşteri geri bildirimleri",
    status: "active",
    responses: 156,
    createdAt: "15 Ekim 2025",
  },
  {
    id: 2,
    title: "Çalışan Bağlılığı Anketi",
    description: "Şirket içi çalışan memnuniyeti ve bağlılık ölçümü",
    status: "active",
    responses: 89,
    createdAt: "10 Ekim 2025",
  },
  {
    id: 3,
    title: "Ürün Geliştirme Anketi",
    description: "Yeni ürün özellikleri için kullanıcı tercihleri",
    status: "draft",
    responses: 0,
    createdAt: "5 Ekim 2025",
  },
  {
    id: 4,
    title: "Etkinlik Değerlendirme Anketi",
    description: "Geçen ay düzenlenen etkinlik hakkında katılımcı görüşleri",
    status: "completed",
    responses: 234,
    createdAt: "1 Ekim 2025",
  },
]

export default function SurveysPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Anketler</h1>
            <p className="mt-2 text-muted-foreground">Tüm anketlerinizi görüntüleyin ve yönetin</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Yeni Anket
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam Anket</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{surveys.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aktif Anket</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{surveys.filter((s) => s.status === "active").length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam Yanıt</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{surveys.reduce((acc, s) => acc + s.responses, 0)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bu Ay</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
            </CardContent>
          </Card>
        </div>

        {/* Survey List */}
        <div className="grid gap-4">
          {surveys.map((survey) => (
            <Card key={survey.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{survey.title}</CardTitle>
                      <Badge
                        variant={
                          survey.status === "active"
                            ? "default"
                            : survey.status === "completed"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {survey.status === "active" && "Aktif"}
                        {survey.status === "completed" && "Tamamlandı"}
                        {survey.status === "draft" && "Taslak"}
                      </Badge>
                    </div>
                    <CardDescription>{survey.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{survey.responses} yanıt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{survey.createdAt}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Düzenle
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <BarChart3 className="h-4 w-4" />
                      Sonuçlar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
