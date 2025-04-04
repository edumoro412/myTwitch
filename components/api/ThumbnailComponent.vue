<script setup lang="ts">
import { computed } from 'vue';
import userIconRed from '../icons/userIconRed.vue';

interface Stream {
  game_id: string;
  game_name: string;
  id: string;
  user_id: string;
  user_name: string;
  title: string;
  thumbnail_url: string;
  viewer_count: number;
}

const props = defineProps<Stream>();

const thumbnailUrl = computed(() => {
  return props.thumbnail_url
    ?.replace('{width}', '450')
    ?.replace('{height}', '240');
});

const { data: profilePic } = await useFetch('/api/twitch-profile-picture', {
  query: { id: props.user_id },
});

const pictureUrl = profilePic.value?.data[0]?.profile_image_url;
</script>

<template>
  <div class="stream">
    <div class="stream__thumbnail">
      <img
        :src="thumbnailUrl"
        :alt="`Stream thumbnail for ${props.user_name}`"
        class="thumbnail-image"
        loading="lazy"
      />
    </div>
    <div class="stream__viewer">
      <userIconRed class="stream__viewer--usericon" />
      <span class="count">{{ props.viewer_count }}</span>
    </div>
    <div class="stream__info">
      <div class="stream__info-header">
        <img
          v-if="pictureUrl"
          :src="pictureUrl"
          :alt="`Profile picture of ${props.user_name}`"
          class="stream__profile-pic"
        />
        <h3 class="stream__info--streamername">{{ props.user_name }}</h3>
      </div>
      <h3 class="stream__info--title">{{ props.title }}</h3>
      <p class="stream__info--category">{{ props.game_name }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stream {
  width: min-content;

  &__thumbnail {
    position: relative;
  }

  &__viewer {
    font-weight: bold;
    font-size: 1em;
    color: rgb(255, 2, 2);
    display: flex;
    align-items: center;
    margin: 0.7em 0 1em 0;

    &--usericon {
      margin-right: 5px;
      @include flex($justify-content: left, $flex-grow: 0);
    }
  }

  &__info {
    color: white;

    &-header {
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
    }

    &--streamername {
      font-size: 1.2em;
      margin: 0;
    }

    &--title {
      font-size: 1em;
      margin-bottom: 0.5em;
    }

    &--category {
      font-size: 0.9em;
      color: #7b7b8b;
    }
  }

  &__profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
}
</style>
