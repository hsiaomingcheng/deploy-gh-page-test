<script setup>
  import axios from 'axios'
  import HelloWorld from './components/HelloWorld.vue'

  const handleSendSlackMsg = () => {

    const slackPath = 'https://hooks.slack.com/services/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'

    const payload = JSON.stringify({
      channel: '#test',
      username: 'webhookbot',
      text: 'This is posted to #test and comes from a bot named webhookbot.',
      icon_emoji: ':ghost:',
    })

    axios.post(slackPath, payload)
  }
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <button @click="handleSendSlackMsg">點我發送訊息給Slack</button>

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
