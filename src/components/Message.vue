<template>
    <div :class='["message", { inbound }, { right: inbound }]'>
        <h5>{{ author }}</h5>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        id: String,
        author: String,
        text: String,
        inbound: Boolean,
        createdAt: Number
    },
    mounted() {
      console.log("HERE");
      document.getElementById('scrollMarker').scrollIntoView();
    }
}
</script>

<style scoped>
    .message {
      background: #e7e7e7;
      border-radius: 10px;
      padding: 1rem;
      width: fit-content;
    }
    .message.inbound {
      background: #e9eaf6;
    }
    h5 {
      margin: 0 0 .5rem 0;
    }
    .message + .message {
      margin-top: 1rem;
    }
    .message.right {
      margin-left: auto;
    }
</style>
