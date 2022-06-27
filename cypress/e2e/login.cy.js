describe('Login', () => {


it('user is should login with a valid email and password', function(){
  cy.visit('https://www.n11.com/giris-yap/', {failOnStatusCode: false})
  cy.get('#email').type('pp@gmail.com')
  cy.get('#password').type('Test12')
  cy.get('#showPassword').click()
  cy.get('#loginButton').click()

})
})