<script setup lang="ts">
import ThumbnailComponent from '~/components/api/ThumbnailComponent.vue';

const { data: streamsData } = await useFetch('/api/twitch-top-streams');

const AhoraDirectos = streamsData?.value?.data || [];
</script>

<template>
  <div class="main">
    <p class="main__title">
      <span class="main__title--blue">Live channels</span> we think you´ll like
    </p>
    <h1>Videos de Twitch</h1>
    <section class="main__streams">
      <article
        v-for="stream in AhoraDirectos"
        :key="stream.id"
        class="main__streans--article"
      >
        <ThumbnailComponent v-bind="stream" />
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main {
  &__title {
    padding-top: 1em;
    font-size: 1.3em;
    color: white;
    font-weight: bold;

    &--blue {
      color: rgb(38, 152, 239);
    }
  }

  &__streams {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 4em;

    &--article {
      grid-row-start: 2;
    }
  }
}
</style>
