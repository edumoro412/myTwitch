<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id.toString();

const { data } = await useFetch('/api/twitch-user-info', {
  query: {
    userId,
  },
});

const user_name = data.value?.data[0].user_name.toString();
</script>

<template>
  <div>
    <h1>Directo</h1>
    <iframe
      width="560"
      height="315"
      :src="`https://player.twitch.tv/?channel=${user_name}&parent=localhost`"
      frameborder="0"
      allowfullscreen
    ></iframe>

    <h3>Chat</h3>
    <iframe
      width="350"
      height="315"
      :src="`https://www.twitch.tv/embed/${user_name}/chat?parent=localhost`"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>
