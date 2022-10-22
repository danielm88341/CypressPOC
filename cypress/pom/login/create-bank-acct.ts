import { BankAccount } from "../../model/bankAcct";

export class BankAcctOverlayPom {
    overlayRoot = '.MuiDialog-root[data-test="user-onboarding-dialog"]';

    bankName = '#bankaccount-bankName-input';
    routingNum = '#bankaccount-routingNumber-input';
    acctNum = '#bankaccount-accountNumber-input';

    nextButton = 'button[data-test="user-onboarding-next"]';
    formButton = 'form button'; // It's all the same button locator

    processNewAccount(bankAcct: BankAccount) {
        cy.get(this.nextButton).should('have.text', 'Next').should('be.enabled').click(); // TODO get button text for validation

        // This is a bug. It should be disabled at this point
        // It will disable the moment anything in the form is "dirty"
        //cy.get(this.formButton).should('not.be.enabled');
        this.fillAcctInfo(bankAcct);
        cy.get(this.formButton).should('be.enabled').click(); // TODO get button text for validation
        cy.get(this.nextButton).should('have.text', 'Done').click();

    }

    fillAcctInfo(bankAcct: BankAccount) {
        cy.get(this.bankName, { timeout: 2000 }).type(bankAcct.bankName);
        cy.get(this.routingNum).type(bankAcct.rountNumber);
        cy.get(this.acctNum).type(bankAcct.acctNumber);
    }

}