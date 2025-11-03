# Rails_project - Survey Management System

> **Not:** Bu proje **Nurettin Şenyer** ve **Ömer Durmuş** danışmanlığında geliştirilmiştir.

> Ruby on Rails API with JWT authentication and BDD testing.

---

## 🎯 Features

- **JWT-based Authentication** - Secure user authentication using JSON Web Tokens
- **Survey Management** - Complete RESTful API for survey operations
- **Comprehensive Testing** - BDD with Cucumber and RSpec
- **Test-Driven Development** - Built following TDD best practices
- **RESTful API** - Clean and well-structured API endpoints

---

## 🚀 Kurulum ve Çalıştırma

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/Sudeyazicii/Rails_project.git
cd rails_project
```

### 2. Bağımlılıkları Yükleyin
```bash
bundle install
```

### 3. Veritabanını Oluşturun ve Tabloları Kurun
```bash
rails db:create
rails db:migrate
```

### 4. Örnek Verileri Yükleyin
```bash
rails db:seed
```

### 5. Sunucuyu Başlatın
```bash
rails server
```

### 6. Uygulamaya Erişim

- **Web Arayüzü:** `http://localhost:3000`
- **API Endpoints:** `http://localhost:3000/api/v1/`

---

## ✅ Testler

### Backend Testleri (Cucumber BDD)
```bash
bundle exec cucumber
```

### Frontend Testleri (Cypress)
```bash
cd fronted
npx cypress run
```

Testler aşağıdaki senaryoları kapsar:
- Kullanıcı girişi (Login)
- JWT token doğrulama
- Kullanıcı yönetimi işlemleri
- Anket oluşturma ve yönetimi akışları

---

## 📋 Gereksinimler

- Ruby version: 3.0+
- Rails version: 8.0+
- React (frontend testleri için)

---

## 🛠️ Teknolojiler

- **Backend:** Ruby on Rails
- **Frontend:** React (developed with v0.dev)
- **Authentication:** JWT (JSON Web Tokens)
- **Testing:** Cucumber, RSpec, Cypress
- **API:** RESTful architecture