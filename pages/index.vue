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
  margin: 0;
  &__title {
    padding: 0.5em;
    font-size: 1.3em;
    color: white;
    font-weight: bold;
    @include flex($justify-content: center, $align-items: center);
    &--blue {
      color: rgb(38, 152, 239);
    }
  }

  &__streams {
    @include flex(
      $justify-content: center,
      $align-items: flex-start,
      $wrap: wrap
    );
    gap: 4em;

    &--article {
      grid-row-start: 2;
    }
  }
}
</style>
