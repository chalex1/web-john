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

            timer: null,
            since: 0,
            cardId: '',
            messages: []
        }
    },

    methods: {
        sendMessage(message) {
            message.author = 'Вы';
            this.messages.push(message);
        },
        async updateMessages() {
            const retrievedMessages = await messageService.get(this.cardId, this.since);
            this.since = new Date().getTime();
            const merged = [];
            let i = 0;
            let j = 0;
            while (i < this.messages.length && j < retrievedMessages.length) {
                const a = this.messages[i];
                const b = retrievedMessages[j];
                if (a.createdAt <= b.createdAt) {
                    merged.push(a);
                    i++;
                    if (a.createdAt == b.createdAt) {
                        j++;
                    }
                } else {
                    merged.push(b);
                    j++
                }
            }
            while (i < this.messages.length) {
                merged.push(this.messages[i++]);
            }
            while (j < retrievedMessages.length) {
                merged.push(retrievedMessages[j++]);
            }
            this.messages = merged;
        }
    },

    async mounted() {
        this.cardId = this.$route.query.cardId;
        console.log('Card ID = ' + this.cardId);
        this.updateMessages();
        this.timer = setInterval(this.updateMessages, 10000);
    },

    beforeUnmount () {
      clearInterval(this.times);
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
