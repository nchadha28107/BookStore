import { loginLocators } from '../locators/login.locators';
import loginData from '../../fixtures/login.json';

class Login {
    
    selectLoginButton() {
        cy.get(loginLocators.loginButton).click();
    }

    enterUsername() {
        cy.get(loginLocators.userName).clear().type(loginData.username);
    }

    enterPassword() {
        cy.get(loginLocators.password).clear().type(loginData.password);
    }

    enterCredentialsAndLogin() {
        this.enterUsername();
        this.enterPassword();
        this.selectLoginButton();
    }

}

export default Login;