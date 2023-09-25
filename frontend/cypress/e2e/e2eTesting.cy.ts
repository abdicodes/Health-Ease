const baseUrl = 'http://127.0.0.1:5173/'

describe('Landing page works', () => {
  it('passes', () => {
    cy.visit(`${baseUrl}`)
    cy.contains(`you can change user's type anytime!`)
  })
})

describe('Can navigate to patient portal and able to register and login', () => {
  it('navigates to patient portal and to sign up page and to login page', () => {
    cy.visit(`${baseUrl}`)
    cy.contains(`you can change user's type anytime!`)
    cy.get('#individuals').click()
    cy.contains('Sign up').click()
    cy.contains('Login').click()
  }),
    it('It does not allow sign up if password does not container digits or an upper case or too short', () => {
      cy.visit(`${baseUrl}`)
      cy.contains(`you can change user's type anytime!`)
      cy.get('#individuals').click()
      cy.contains('Sign up').click()

      cy.get('#name').type('Test user')
      cy.get('#username').type('test_user6')
      cy.get('#address').type('Home address 1')
      cy.get('#email').type('user12345@email.com')
      cy.get('#dateOfBirth').type('1999-01-01')
      cy.get('#password').type('Password123')
      cy.get('#passwordConfirm').type('Password123')
      cy.get('#gender').select('male')
      cy.get('#bloodType').select('B+')
      cy.contains('Sign up').click()
      cy.contains('Test user have successfully been registered!')
    }),
    it('It logins user successfully', () => {
      cy.visit(`${baseUrl}`)
      cy.get('#individuals').click()
      cy.get('#username').type('test_user6')
      cy.get('#password').type('Password123')
      cy.contains('Login').click()
      cy.contains('Hello! have successfully been logged in!')
    })
})

describe('Staff can login and make new entries', () => {
  it('navigates to patient portal and to sign up page and to login page', () => {
    cy.visit(`${baseUrl}`)
    cy.contains(`you can change user's type anytime!`)
    cy.contains('Staff Portal').click()
    cy.get('#username').type('test_staff')
    cy.get('#password').type('Test1234')
    cy.get('#login').click()
    cy.contains('Doctor').click()
    cy.get('#id').type('gNNGKQvnjLjXYABGGeyEpY')
    cy.get('#search').click()
    cy.contains('test name2')
    cy.get('#id').type('non-existence-id')
    cy.get('#search').click()
    cy.contains('Patient is not found! check if ID no. is correct')
  })
})
