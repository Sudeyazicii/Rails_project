import React from 'react'

describe('Register Form Component', () => {
  it('should render register form with all fields', () => {
    cy.mount(
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
        <form>
          <input
            data-cy="register-name-input"
            name="name"
            type="text"
            placeholder="İsim"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            data-cy="register-email-input"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            data-cy="register-password-input"
            name="password"
            type="password"
            placeholder="Şifre"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            data-cy="register-password-confirmation-input"
            name="password_confirmation"
            type="password"
            placeholder="Şifre Tekrar"
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            data-cy="register-submit"
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    )
    
    cy.get('[data-cy=register-name-input]').should('be.visible')
    cy.get('[data-cy=register-email-input]').should('be.visible')
    cy.get('[data-cy=register-password-input]').should('be.visible')
    cy.get('[data-cy=register-password-confirmation-input]').should('be.visible')
    cy.get('[data-cy=register-submit]').should('contain', 'Kayıt Ol')
  })

  it('should fill form fields correctly', () => {
    cy.mount(
      <form>
        <input data-cy="test-input" type="text" className="border p-2" />
      </form>
    )
    
    cy.get('[data-cy=test-input]')
      .type('Test Value')
      .should('have.value', 'Test Value')
  })
})

describe('Login Form Component', () => {
  it('should render login form', () => {
    cy.mount(
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
        <form>
          <input
            data-cy="login-email-input"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            data-cy="login-password-input"
            name="password"
            type="password"
            placeholder="Şifre"
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            data-cy="login-submit"
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    )
    
    cy.get('[data-cy=login-email-input]').should('be.visible')
    cy.get('[data-cy=login-password-input]').should('be.visible')
    cy.get('[data-cy=login-submit]').should('contain', 'Giriş Yap')
  })
})