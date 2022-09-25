<template>
    <div class="container">
        <MessageList :messages="this.messages"></MessageList>
        <ChatBox @send-message="sendMessage"></ChatBox>
    </div>
</template>

<script>
import MessageList from '@/components/MessageList.vue';
import ChatBox from '@/components/ChatBox.vue';

import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'HomeView',
    data() {
        return {
            messages: []
        }
    },
    methods: {
        sendMessage(message) {
            message.author = 'Вы';
            this.messages.push(message);
            console.log('Received ' + JSON.stringify(message));
            const outBoundMessage = {
                id: uuidv4(),
                author: 'Alice',
                text: 'Loopback: ' + message,
                inbound: false,
                createdAt: Date.now()
            };
            this.messages.push(outBoundMessage);
        }
    },
    components: {
        ChatBox,
        MessageList
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
