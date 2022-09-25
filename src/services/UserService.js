import cryptoRandomString from 'crypto-random-string';

const userIdKey = 'autopingUserId';
let userId = localStorage.getItem(userIdKey);
if (!userId) {
    console.log('User ID not found, generating a new one...');
    userId = cryptoRandomString({length: 32, type: 'url-safe'});
    localStorage.setItem(userIdKey, userId);
}
console.log('User ID = ' + userId);

export default {
    getId() {
        return userId;
    }
};
