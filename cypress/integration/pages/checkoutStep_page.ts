export class CheckoutStep{
    txt_firstName = '#first-name'
    txt_lastName = '#last-name'
    txt_postalCOde = '#postal-code'
    btn_continue ='#continue'
    paymentInformation = '#checkout_summary_container > div > div.summary_info > div:nth-child(1)'
    btnFinish = '#finish'
    btnBackHome = '<button class="btn btn_primary btn_small" data-test="back-to-products" id="back-to-products" name="back-to-products">Back Home</button>'
    firstNameErrMsg = '#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error'

    information(firstName : string, lastName : string, postalCode : string){
        cy.get(this.txt_firstName).type(firstName)
        cy.get(this.txt_lastName).type(lastName)
        cy.get(this.txt_postalCOde).type(postalCode)
    }
    withoutFirstname(lastName : string, postalCode : string){
        cy.get(this.txt_lastName).type(lastName)
        cy.get(this.txt_postalCOde).type(postalCode)      
        cy.get(this.txt_firstName).should('be.empty')  
    }

    firstNameAlert(){
        cy.get(this.firstNameErrMsg).should('exist')
        cy.get(this.firstNameErrMsg).should('contain','Error: First Name is required')
    }

    klikContinue(){
        cy.get(this.btn_continue).click()
    }
    
    checkoutStepTwo(){
        cy.get('.title').should('be.visible')
        cy.get(this.paymentInformation).should('exist')
    }

    klikFinish(){
        cy.get(this.btnFinish).click()
        cy.get('#checkout_complete_container > h2').should('be.visible')
    }
} 