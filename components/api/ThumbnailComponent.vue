<script setup lang="ts">
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
console.log('Props:', props);

const thumbnailUrl = computed(() => {
  return props.thumbnail_url
    ?.replace('{width}', '450')
    ?.replace('{height}', '240');
});
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
      <div class="stream__viewer">
        <userIconRed class="stream__viewer--usericon" />
        <span class="count">{{ props.viewer_count }}</span>
      </div>
    </div>
    <div class="stream__info">
      <h3 class="stream__info--title">{{ props.title }}</h3>
      <p class="stream__info--streamername">{{ props.user_name }}</p>
      <p class="stream__info--category">{{ props.game_name }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stream {
  width: min-content;

  &__viewer {
    font-weight: bold;
    font-size: 1em;
    color: rgb(255, 2, 2);
    @include flex($justify-content: left, $flex-grow: 0);
    &--usericon {
      @include flex($justify-content: left, $flex-grow: 0);
    }
  }
  &__info {
    color: white;
    &--title {
      font-size: 1.2em;
      margin-bottom: 1em;
    }

    &--streamername,
    &--category {
      font-size: 1em;
      color: #7b7b8b;
    }
  }
}
</style>
