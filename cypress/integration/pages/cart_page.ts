export class CartPage{
    btnCheckout = '#checkout'
    
    klikCheckout(){
        cy.get(this.btnCheckout).click()
        cy.get('.title').should('be.visible')
    }
} 