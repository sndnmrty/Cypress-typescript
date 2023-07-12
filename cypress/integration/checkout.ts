import {LoginPage} from "./pages/login_page"
import {DashboardPage} from "./pages/dashboard_page"
import { CartPage } from "./pages/cart_page"
import { CheckoutStep } from "./pages/checkoutStep_page"
import { isEmpty } from "cypress/types/lodash"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutStepPage = new CheckoutStep()
const URL = 'https://www.saucedemo.com/'

describe('The user checkout product', () => {
    it('The user fills out the information as a delivery destination with correct and valid inputs', () => {
        loginPage.login(URL,'standard_user','secret_sauce')
        dashboardPage.addSaucelabBackpack()
        dashboardPage.clickKeranjang()
        cartPage.klikCheckout()
        checkoutStepPage.information('Diana','Sari','80351')
        checkoutStepPage.klikContinue()
        checkoutStepPage.checkoutStepTwo()
        checkoutStepPage.klikFinish()
    })
    it('The user fills out the information as a delivery destination without fills out the first name column', () => {
        loginPage.login(URL,'standard_user','secret_sauce')
        dashboardPage.addSaucelabBackpack()
        dashboardPage.clickKeranjang()
        cartPage.klikCheckout()
        checkoutStepPage.withoutFirstname('Sari','80351')
        checkoutStepPage.klikContinue()
        checkoutStepPage.firstNameAlert()

    })
})