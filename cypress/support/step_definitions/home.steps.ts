import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import Home from '../pages/home.page';

const home = new Home;

Given('user lands on the homepage', () => {
    home.launchURL();
});

When('user navigates to Book Store Application', () => {
    home.selectBookApplication();
});