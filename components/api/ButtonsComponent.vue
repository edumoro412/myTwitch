<script setup lang="ts">
import gameIcon from '../icons/gameIcon.vue';
import artIcon from '../icons/artIcon.vue';
import trophyIcon from '../icons/trophyIcon.vue';
import micIcon from '../icons/micIcon.vue';
import headsetIcon from '../icons/headsetIcon.vue';
</script>

<template>
  <section class="container">
    <button class="container__buttons">
      <span class="container__buttons--content">
        <span class="btn-text">Games</span>
        <span class="btn-icon"><gameIcon /></span>
      </span>
    </button>
    <button class="container__buttons">
      <span class="container__buttons--content">
        <span class="btn-text">IRL</span>
        <span class="btn-icon"><micIcon /></span>
      </span>
    </button>
    <button class="container__buttons">
      <span class="container__buttons--content">
        <span class="btn-text">Music & DJs</span>
        <span class="btn-icon"><headsetIcon /></span>
      </span>
    </button>
    <button class="container__buttons">
      <span class="container__buttons--content">
        <span class="btn-text">Creative</span>
        <span class="btn-icon"><artIcon /></span>
      </span>
    </button>
    <button class="container__buttons">
      <span class="container__buttons--content">
        <span class="btn-text">Esports</span>
        <span class="btn-icon"><trophyIcon /></span>
      </span>
    </button>
  </section>
</template>

<style scoped lang="scss">
.container {
  margin: 3em 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1em;

  &__buttons {
    @include button($padding: 0.7em 2.5em, $background-color: #179afc);
    font-size: 1.3em;
    font-weight: bold;
    border-radius: 1em;

    &--content {
      @include flex($justify-content: space-between, $gap: 1em);
      width: 100%;
      position: relative;
    }
  }

  .btn-text {
    flex: 1;
    text-align: left;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    transform: translate(30%, -20%);
  }

  @include responsive(48em) {
    flex-direction: column;
    align-items: center;

    &__buttons {
      width: 80%;
    }
  }
}
</style>
