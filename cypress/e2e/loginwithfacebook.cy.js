describe('Login with facebook', () => {


    
    it('user should be redirected to facebook and login with valid facebook credentials', function(){
      cy.visit('https://m.n11.com/giris-yap/')
      cy.get('#loginForm > .facebook').click() 
      cy.get('[data-testid="royal_email"]').type('pietro55@xbpantibody.com')
      cy.get('#passContainer').type('Test')
      cy.get('[data-testid="royal_login_button"]').click()
    
    })
    })