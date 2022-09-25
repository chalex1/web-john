<template>

<div class="container">
    
    <MessageList
        :messages="this.messages"/>

    <ChatBox
        :cardId = "cardId"
        @send-message="sendMessage"/>
</div>

</template>



<script>
import messageService from '@/services/MessageService';

import ChatBox from '@/components/ChatBox.vue';
import MessageList from '@/components/MessageList.vue';

export default {

    name: 'HomeView',

    components: {
        ChatBox,
        MessageList
    },

    data() {
        return {
            cardId: 'XmD8zN5KjiSVBDS3O24Rw1B65C8dtbDy',
            messages: []
        }
    },

    methods: {
        sendMessage(message) {
            message.author = 'Вы';
            this.messages.push(message);
        }
    },

    async mounted() {
        const cardId = this.$route.query.cardId;
        console.log('Card ID = ' + cardId);
        const retrievedMessages = await messageService.get(cardId);
        this.messages.push(...retrievedMessages);
    }
}

</script>



<style scoped>

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
