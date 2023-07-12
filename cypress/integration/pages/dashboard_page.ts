export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_addChart1 = '#add-to-cart-sauce-labs-backpack'
    badage = '#shopping_cart_container > a > span'
    keranjang = '#shopping_cart_container > a'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    addSaucelabBackpack(){
        cy.get(this.btn_addChart1).click()
        cy.get(this.badage).should('be.visible')
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
    }
    clickKeranjang(){
        cy.get(this.keranjang).click()
        cy.get('.title').should('be.visible')
        cy.get('#cart_contents_container > div > div.cart_list').should('exist')
        cy.get('#continue-shopping').should('be.visible')
    }

}