<template>
  <div class="chat-app">
    <div id="chat-log">
      <div
        v-for="m in messages"
        :key="m.id"
        class="chat-message"
      >
        <span class="message-text">
          {{ m.message }} :{{ m.user }}
        </span>
        <span class="time-subdued">{{ m.time.toLocaleString() }}</span>
      </div>
    </div>
    <div id="chat-input">
      <b-form
        @submit.prevent="onSubmit"
        @reset="onReset"
      >
        <b-form-input
          id="message-input"
          v-model="message.message"
          type="text"
          required
          placeholder="Enter message"
        />
      </b-form>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      message: {
        user: null,
        message: null,
        time: null
      }
    }
  },
  computed: {
    ...mapState('messages', [ 'messages' ]),
    ...mapState('user', [ 'username' ])
  },
  methods: {
    ...mapActions('messages', [ 'addMessage' ]),
    onSubmit () {
      this.addMessage({
        ...this.message,
        user: this.username,
        time: new Date()
      })
      this.onReset()
    },
    onReset () {
      this.message = {
        user: this.message.user,
        message: null,
        time: null
      }
    }
  }
}
</script>

<style>
.chat-app {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#chat-log {
  height: calc(100vh - 50px);
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.chat-message {
  display: flex;
  flex-direction: column;
  text-align: right;
}
.message-text {
  padding: 0;
  margin: 0;
}
.time-subdued {
  line-height: 8px;
  font-size: 10px;
}
#chat-input {
  width: 100%;
  padding: 5px 0;
}
.links {
  padding-top: 15px;
}
</style>
