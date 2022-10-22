/// <reference types="cypress" />
// const baseURL = Cypress.env('baseURL');

import { BankAccount } from '../../model/bankAcct';
import { BotCred } from '../../model/botCred';
import { BankAcctOverlayPom } from '../../pom/login/create-bank-acct';
import { LoginPom } from '../../pom/login/login-pom';
import { NewAcctPom } from '../../pom/login/new-acct';
import { faker } from '@faker-js/faker';

describe('Login Page integration tests', () => {
    let loginPage = new LoginPom();
    let newActPage = new NewAcctPom();
    let bankAcctOverlayPom = new BankAcctOverlayPom();

    let botCred = new BotCred(faker.datatype.number({ min: 15, max: 500, precision: 1 }));
    let bankAcct: BankAccount = {
        acctNumber: '11111111111',
        rountNumber: '123456789',
        bankName: 'Testers Bank'
    }

    it('log in to service', () => {
        cy.visit("http://localhost:3000");

        // Create account (only doing this because DB gets reseeded on reboots)
        // Note: this would be better served by an API test
        // TODO: figure out if the getUsers API is unath accessible
        loginPage.selectCreateNew();
        newActPage.createAccount(botCred);
        loginPage.login(botCred);
        bankAcctOverlayPom.processNewAccount(bankAcct);
    });

});
