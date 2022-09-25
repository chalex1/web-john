<template>
    <form class="chat-box" @submit.prevent="send">
        <input
            v-model="text"
            placeholder="Текст сообщения"
            type="text"
        />
        <button :disabled="text === ''" type="submit">Отправить</button>
    </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    name: 'ChatBox',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        send() {
            // TODO: replace with real API call
            const message = {
                id: uuidv4(),
                text: this.text,
                inbound: true,
                createdAt: Date.now()
            };
            this.$emit('send-message', message);
            this.text = '';
        }
    }
}
</script>

<style scoped>
.chat-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 800px;
    display: flex;
}
button {
  border: 0;
  background: #2a60ff;
  color: white;
  cursor: pointer;
  padding: 1rem;
}
input {
  border: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
}
input {
    width: min(100%, 20rem);
    flex-grow: 1;
}
button:disabled {
    opacity: 0.5;
}
</style>
