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
  <div class="container">
    <article class="container__stream">
      <iframe
        width="560"
        height="315"
        :src="`https://player.twitch.tv/?channel=${user_name}&parent=localhost`"
        frameborder="0"
        allowfullscreen
        class="container__stream--stream"
      ></iframe>
    </article>

    <article class="container__chat">
      <iframe
        width="350"
        height="315"
        :src="`https://www.twitch.tv/embed/${user_name}/chat?parent=localhost&darkpopout`"
        frameborder="0"
        scrolling="no"
        class="container__chat--chat"
      ></iframe>
    </article>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 0;
  display: flex;

  &__stream {
    &--stream {
      width: 60vw;
      height: 80vh;
    }
  }

  &__chat {
    &--chat {
      width: 20vw;
      height: 94vh;
    }
  }
}
</style>
