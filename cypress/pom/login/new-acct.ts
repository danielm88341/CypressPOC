import { BotCred } from "../../model/botCred";

export class NewAcctPom {
    firstName = '#firstName';
    lastName = '#lastName';
    userName = '#username';
    password = '#password';
    confirm = '#confirmPassword';

    submit = 'button'; // Currently only 1, but this needs an ID associated
    goBack = 'form a';

    /**
     * Main callable for processing account creation
     * @param acctDetail Account details
     */
    createAccount(acctDetail: BotCred) {
        // This is a bug. It should be disabled at this point
        // It will disable the moment anything in the form is "dirty"
        // cy.get(this.submit, { timeout: 5000 }).should('not.be.enabled');
        this.fillForm(acctDetail);
        cy.get(this.submit).should('be.enabled');
        cy.get(this.submit).click();

        // Bug in the system: no validation if it exists prior
        // cy.location('pathname', {timeout: 2000}).then((loc) => {
        //     if(loc !== '/signin') {
        //         cy.get(this.goBack).click();
        //     }
        // });

    }

    /**
     * Sub function for just filling the form
     * @param acctDetail Account details
     */
    fillForm(acctDetail: BotCred) {
        cy.get(this.firstName).type(acctDetail.firstName);
        cy.get(this.lastName).type(acctDetail.lastName);
        cy.get(this.userName).type(acctDetail.userName);
        cy.get(this.password).type(acctDetail.password);
        cy.get(this.confirm).type(acctDetail.password);
    }
}