describe('Survey Management - Frontend Tests', () => {
  
  beforeEach(() => {
  // Test veritabanını temizle ve hazırla
  // cy.request('POST', 'http://localhost:3000/api/v1/test/reset_db') // Bu endpoint'i ekleyeceğiz
  cy.visit('http://localhost:3000') // Sayfayı aç
})


  describe('Homepage', () => {
    it('should display homepage with login button', () => {
      cy.visit('/')
      cy.contains('Anket Yönetim Sistemi').should('be.visible')
      cy.get('[data-cy=login-button]').should('exist')
    })
  })

  describe('User Login Flow', () => {
    it('should login successfully with valid credentials', () => {
      // Test kullanıcısı oluştur
      cy.request('POST', '/api/v1/users', {
        user: {
          name: 'Test User',
          email: 'test@example.com'
        }
      })

      cy.visit('/')
      cy.get('[data-cy=login-button]').click()
      
      // Login formunu doldur
      cy.get('[data-cy=email-input]').type('test@example.com')
      cy.get('[data-cy=login-submit]').click()
      
      // Başarılı giriş kontrolü
      cy.url().should('include', '/surveys')
      cy.contains('Anketler').should('be.visible')
    })

    it('should show error for invalid email', () => {
      cy.visit('/')
      cy.get('[data-cy=login-button]').click()
      cy.get('[data-cy=email-input]').type('invalid@example.com')
      cy.get('[data-cy=login-submit]').click()
      
      cy.contains('Kullanıcı bulunamadı').should('be.visible')
    })
  })

  describe('Surveys List', () => {
    beforeEach(() => {
      // Kullanıcı oluştur ve giriş yap
      cy.request('POST', '/api/v1/users', {
        user: { name: 'Test User', email: 'test@example.com' }
      }).then(() => {
        cy.request('POST', '/api/v1/login', {
          email: 'test@example.com'
        }).then((response) => {
          window.localStorage.setItem('token', response.body.token)
        })
      })
    })

    it('should display list of surveys', () => {
      cy.visit('/surveys')
      cy.get('[data-cy=survey-card]').should('have.length.greaterThan', 0)
    })

    it('should filter surveys by search', () => {
      cy.visit('/surveys')
      cy.get('[data-cy=search-input]').type('Test Survey')
      cy.get('[data-cy=survey-card]').should('contain', 'Test Survey')
    })
  })
})
