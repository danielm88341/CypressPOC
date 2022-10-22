export class BotCred {
    firstName = 'Anony';
    lastName = 'Moose';
    userName = 'TestBot';
    password = 'SuperS3cret!';

    constructor(userKey: number | string) {
        if (typeof userKey === 'number') {
            this.userName = this.userName + userKey;
        } else {
            this.userName = userKey;
        }
    }
}