<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id.toString();

const { data } = await useFetch('/api/twitch-user-info', {
  query: {
    userId,
  },
});

console.log('aqui esta la da', data);
console.log('===============', data.value?.data[0].user_name);
</script>

<template>
  <div>
    <iframe
      width="560"
      height="315"
      :src="`https://player.twitch.tv/?channel=${data.value?.data[0].user_name}&parent=localhost`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>
