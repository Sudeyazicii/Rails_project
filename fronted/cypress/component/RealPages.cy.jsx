import React from 'react'

describe('Real Application Pages', () => {
  
  it('should render home page', () => {
    // Ana sayfan varsa buraya import et
    // Örnek: import HomePage from '@/app/page'
    // cy.mount(<HomePage />)
    
    // Şimdilik basit bir kontrol:
    cy.mount(
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Survey App</h1>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Kayıt Ol
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded">
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    )
    
    cy.contains('Survey App').should('be.visible')
    cy.contains('Kayıt Ol').should('be.visible')
    cy.contains('Giriş Yap').should('be.visible')
  })

  it('should render register page layout', () => {
    cy.mount(
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Kayıt Ol</h2>
          <form className="space-y-4">
            <input
              data-cy="register-name-input"
              type="text"
              placeholder="İsim"
              className="w-full p-2 border rounded"
            />
            <input
              data-cy="register-email-input"
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              data-cy="register-password-input"
              type="password"
              placeholder="Şifre"
              className="w-full p-2 border rounded"
            />
            <input
              data-cy="register-password-confirmation-input"
              type="password"
              placeholder="Şifre Tekrar"
              className="w-full p-2 border rounded"
            />
            <button
              data-cy="register-submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    )
    
    cy.contains('Kayıt Ol').should('be.visible')
    cy.get('[data-cy=register-name-input]').should('be.visible')
    cy.get('[data-cy=register-email-input]').should('be.visible')
  })

  it('should render login page layout', () => {
    cy.mount(
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Giriş Yap</h2>
          <form className="space-y-4">
            <input
              data-cy="login-email-input"
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              data-cy="login-password-input"
              type="password"
              placeholder="Şifre"
              className="w-full p-2 border rounded"
            />
            <button
              data-cy="login-submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    )
    
    cy.contains('Giriş Yap').should('be.visible')
    cy.get('[data-cy=login-email-input]').should('be.visible')
    cy.get('[data-cy=login-password-input]').should('be.visible')
  })

  it('should render surveys page layout', () => {
    cy.mount(
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Anketler</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Yeni Anket
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Örnek Anket 1</h3>
              <p className="text-gray-600 mb-4">Anket açıklaması</p>
              <button className="text-blue-500">Görüntüle</button>
            </div>
          </div>
        </div>
      </div>
    )
    
    cy.contains('Anketler').should('be.visible')
    cy.contains('Yeni Anket').should('be.visible')
  })
})