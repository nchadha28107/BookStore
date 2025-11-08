import { homeLocators } from '../locators/home.locators';

let env = Cypress.env('environment') || 'dev';
let device = Cypress.env('device');
let urls = require('../config/urls.json');

class Home {

    launchURL() {
        cy.viewport(device || 'macbook-15');
        cy.visit(urls[env]);
    }

    selectBookApplication() {
        cy.get(homeLocators.bookStoreApplication).click();
        cy.url().should('include', '/books');
    }

}

export default Home;