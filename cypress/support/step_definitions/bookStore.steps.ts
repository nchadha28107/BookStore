import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BookStore from '../pages/bookStore.page';

const bookStore = new BookStore;

Given('user clicks Login Button', () => {
    bookStore.selectLoginButton();
});

Then('user validates username is correct', () => {
    bookStore.validateUsername();
});

Then('user validates Logout Button', () => {
    bookStore.validateLogoutButton();
});

Then('user clicks Logout Button', () => {
    bookStore.selectLogoutButton();
});

Then('user should be logged out successfully', () => {
    bookStore.validateLogoutSuccess();
});

When('user searches for {string}', (bookName: string) => {
    bookStore.searchBook(bookName);
});

Then('search results should contain the book {string}', (bookName: string) => {
    bookStore.validateSearchResults(bookName);
});

Then('book details should be printed to file', () => {
    bookStore.printBookDetailsToFile();
});