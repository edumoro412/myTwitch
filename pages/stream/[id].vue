<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import TwitchChat from '~/components/layout/TwitchChat.vue';
import StreamInfo from '~/components/layout/StreamInfo.vue';
const route = useRoute();
const userId = route.params.id.toString();

const user_name = ref('');
const display_name = ref('');
const profile_image_url = ref('');
const title = ref('');
const game_name = ref('');
const viewers = ref(0);
const tags = ref<string[]>([]);
const picture = ref('');
try {
  const { data } = await useFetch('/api/twitch-user-info', {
    query: { userId },
  });

  const { data: profileData } = await useFetch('/api/twitch-profile-picture', {
    query: { id: userId },
  });

  const info = data.value?.data?.[0];

  if (!info) {
    navigateTo('/');
  }

  viewers.value = info.viewer_count;
  user_name.value = info.user_name;
  display_name.value = info.display_name;
  profile_image_url.value = info.profile_image_url;
  title.value = info.title;
  game_name.value = info.game_name;
  tags.value = info.tags || [];
  picture.value = profileData.value?.data?.[0]?.profile_image_url;
} catch (err) {
  console.error('Error cargando datos del stream', err);
  navigateTo('/');
}
</script>

<template>
  <div class="container">
    <article class="container__stream">
      <iframe
        :src="`https://player.twitch.tv/?channel=${user_name}&parent=my-twitch.vercel.app`"
        frameborder="0"
        allowfullscreen
        class="container__stream--stream"
      ></iframe>
      <StreamInfo
        :user_name="user_name"
        :display_name="display_name"
        :title="title"
        :game_name="game_name"
        :viewers="viewers"
        :tags="tags"
        :picture="picture"
      />
    </article>

    <article class="container__chat">
      <TwitchChat :user_name="user_name" />
    </article>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;

  &__stream {
    display: flex;
    flex-direction: column;

    &--stream {
      width: 60vw;
      height: 60vh;
      @media (max-width: 1240px) {
        width: 80vw;
        height: 60vh;
      }
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
