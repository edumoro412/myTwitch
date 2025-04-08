<script setup lang="ts">
import CategoriesComponent from '~/components/api/CategoriesComponent.vue';
import ThumbnailComponent from '~/components/api/ThumbnailComponent.vue';
import ButtonsComponent from '~/components/api/ButtonsComponent.vue';

const { data: streamsData } = await useFetch('/api/twitch-top-streams');
const liveNow = streamsData?.value?.data || [];
</script>

<template>
  <div class="main">
    <p class="main__title">
      <span class="main__title--blue">Live channels </span> we think you´ll like
    </p>
    <section class="main__streams">
      <NuxtLink
        v-for="stream in liveNow"
        :key="stream.id"
        :to="`/stream/${stream.user_id}`"
        v-bind="stream"
      >
        <ThumbnailComponent v-bind="stream" />
      </NuxtLink>
    </section>
    <hr />
    <p class="categories__title">
      <span class="categories__title--blue">Categories</span> we think you´ll
      like
    </p>
    <section class="categories">
      <CategoriesComponent />
    </section>
    <ButtonsComponent />
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
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

.categories__title {
  font-size: 1.3em;
  font-weight: bold;
  margin: 1em;
  color: white;
  text-align: center;
  padding: 0.5em;
  &--blue {
    color: rgb(38, 152, 239);
  }
}

.categories {
  display: flex;
  justify-content: space-around;
  gap: 0.5em;
  align-items: flex-start;
  padding: 0.5em;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
}
</style>
