<template>
    <div class="message-list">
      <Message
          v-for='message in messages'
          :key='message.id'
          :id=message.id
          :author='message.author'
          :text='message.text'
          :inbound='message.inbound'
          :createdAt=message.createdAt
      />
      <div id="scrollMarker" class="scroll-marker"></div>
    </div>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
    name: 'MessageList',
    props: {
        messages: Array
    },
    components: {
        Message
    }
}
</script>

<style scoped>
    .message-list {
      flex-grow: 1;
      padding-bottom: 100px;
    }
    .scroll-marker {
        background-color: aqua;
    }
</style>
