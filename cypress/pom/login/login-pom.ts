import { BotCred } from "../../model/botCred";

export class LoginPom {
    inputUser = '#username';
    inputPass = '#password';
    submit = 'form button';

    linkCreateNew = 'form a';   // currently only 1, and there's no ID

    login(botCred: BotCred);
    login(userID: string, password: string);
    login(userID: string | BotCred, password?: string) {
        // Validate we can't submit
        // This is a bug. It should be disabled at this point
        // It will disable the moment anything in the form is "dirty"
        //cy.get(this.submit, { timeout: 3000 }).should('not.be.enabled');

        cy.get(this.inputUser).type(typeof userID === 'string' ? userID : userID.userName)
            .get(this.inputPass).type(typeof userID === 'string' ? password : userID.password);

        cy.get(this.submit).should('be.enabled');
        cy.get(this.submit, { timeout: 2000 }).click();
    }

    selectCreateNew() {
        cy.get(this.linkCreateNew, { timeout: 2000 }).click();
    }
}