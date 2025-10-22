# Temizlik
puts "=" * 50
puts "Veritabani temizleniyor..."
Response.destroy_all
Scale.destroy_all
Survey.destroy_all
Credit.destroy_all
User.destroy_all

# 5 Kullanıcı
puts "\n1. Kullanicilar olusturuluyor..."
users = []
users << User.create!(name: "Ahmet Yilmaz", email: "ahmet@test.com")
users << User.create!(name: "Ayse Demir", email: "ayse@test.com")
users << User.create!(name: "Mehmet Kaya", email: "mehmet@test.com")
users << User.create!(name: "Fatma Sahin", email: "fatma@test.com")
users << User.create!(name: "Ali Celik", email: "ali@test.com")
puts "   ✓ #{User.count} kullanici olusturuldu"

# 5 Kredi
puts "\n2. Krediler olusturuluyor..."
Credit.create!(user: users[0], amount: 100)
Credit.create!(user: users[1], amount: 75)
Credit.create!(user: users[2], amount: 50)
Credit.create!(user: users[3], amount: 125)
Credit.create!(user: users[4], amount: 200)
puts "   ✓ #{Credit.count} kredi olusturuldu"

# 5 Ölçek
puts "\n3. Olcekler olusturuluyor..."
scales = []
scales << Scale.create!(value: "Cok Kotu")
scales << Scale.create!(value: "Kotu")
scales << Scale.create!(value: "Orta")
scales << Scale.create!(value: "Iyi")
scales << Scale.create!(value: "Cok Iyi")
puts "   ✓ #{Scale.count} olcek olusturuldu"

# 5 Anket
puts "\n4. Anketler olusturuluyor..."
surveys = []
surveys << Survey.create!(user: users[0], title: "Musteri Memnuniyeti Anketi")
surveys << Survey.create!(user: users[1], title: "Urun Kalitesi Degerlendirmesi")
surveys << Survey.create!(user: users[2], title: "Hizmet Kalitesi Anketi")
surveys << Survey.create!(user: users[3], title: "Calisma Ortami Anketi")
surveys << Survey.create!(user: users[4], title: "Egitim Programi Anketi")
puts "   ✓ #{Survey.count} anket olusturuldu"

# 5 Yanıt
puts "\n5. Yanitlar olusturuluyor..."
Response.create!(user: users[0], survey: surveys[0], scale: scales[4], comment: "Cok memnun kaldim!")
Response.create!(user: users[1], survey: surveys[1], scale: scales[3], comment: "Guzel bir deneyimdi.")
Response.create!(user: users[2], survey: surveys[2], scale: scales[2], comment: "Idare eder.")
Response.create!(user: users[3], survey: surveys[3], scale: scales[1], comment: "Beklentimi karsilamadi.")
Response.create!(user: users[4], survey: surveys[4], scale: scales[4], comment: "Mukemmeldi!")
puts "   ✓ #{Response.count} yanit olusturuldu"

# Özet
puts "\n" + "=" * 50
puts "SEED TAMAMLANDI!"
puts "=" * 50
puts "Users:     #{User.count}"
puts "Credits:   #{Credit.count}"
puts "Scales:    #{Scale.count}"
puts "Surveys:   #{Survey.count}"
puts "Responses: #{Response.count}"
puts "=" * 50
