describe('Forgot password', () => {


  
  it('user should be able to reset their password', function(){
    cy.visit('https://www.n11.com/giris-yap/#User/lostpassword/', {failOnStatusCode: false})
    cy.get('#forgotPasswordEmail').type('pp@gmail.com {enter}')
    cy.get('#postForgotPasswordForm').click({force: true})
  })
  })