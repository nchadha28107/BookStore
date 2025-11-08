import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import Login from '../pages/login.page';

const login = new Login;

Given('user logs in with valid credentials', () => {
    login.enterCredentialsAndLogin();
});

// When('user navigates to Book Store Application', () => {
//     login.selectBookApplication();
// });