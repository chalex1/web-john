import axios from 'axios'
import users from '@/services/UserService';

const apiUrl = process.env.VUE_APP_API_BASE_URL + '/messages';
const initiatorId = users.getId();

const get = async (cardId, since) => {
    if (!cardId) {
        throw 'Card ID not specified!';
    }
    if (!since) {
        since = 0;
    }
    console.log('Retrieving messages since ' + since);
    const response = await axios.get(apiUrl, {
        params: {
            cardId: cardId,
            initiatorId: initiatorId
        }
    });
    return response.data;
}

const send = async (cardId, text) => {
    console.log('Sending an inbound message: ' + text);
    const response = await axios.post(apiUrl, {
        cardId: cardId,
        initiatorId: initiatorId,
        text: text
    });
    return response.data;
}

export default {
    get: get,
    send: send
};
