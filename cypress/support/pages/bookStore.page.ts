import { booksLocators } from '../locators/bookStore.locators';
import loginData from '../../fixtures/login.json';
import booksData from '../../fixtures/books.json';

class BookStore {
    
    selectLoginButton() {
        cy.get(booksLocators.loginButton).click();
    }

    validateUsername() {
        cy.get(booksLocators.username).should('have.text', loginData.username)
    }

    validateLogoutButton() {
        cy.get(booksLocators.logoutButton).should('be.visible');
    }

    selectLogoutButton() {
        cy.get(booksLocators.logoutButton).click();
    }

    searchBook(bookName: string){
        cy.get(booksLocators.searchBox).clear().type(bookName);
    }

    validateSearchResults(bookName: string){
        cy.get(booksLocators.bookRows).first().should('be.visible');
        cy.get(booksLocators.bookTitle).first().should('be.visible').should('have.text', bookName);
    }

    validateLogoutSuccess() {
        cy.url().should('include', '/login');
        cy.get(booksLocators.logoutButton).should('not.exist');
    }

    printBookDetailsToFile() {
        const bookDetails: any = {};

        cy.get(booksLocators.bookTitle).first().invoke('text').then((title) => {
            bookDetails.title = title.trim();
        });

        cy.get(booksLocators.bookAuthor).first().invoke('text').then((author) => {
            bookDetails.author = author.trim();
        });

        cy.get(booksLocators.bookPublisher).first().invoke('text').then((publisher) => {
            bookDetails.publisher = publisher.trim();
        }).then(() => {
            cy.writeFile(booksData.bookDetailsFile, bookDetails, { flag: 'w' });
            cy.log('Book Details: ' + JSON.stringify(bookDetails, null, 2));
        });
    }
}

export default BookStore;