<script setup lang="ts">
import hideIcon from '~/components/icons/hideIcon.vue';
</script>
<template>
  <nav class="nav">
    <header class="nav__header">
      <h1>RECOMMENDED CHANNELS</h1>
      <hideIcon />
    </header>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  @include flex(
    $flex-grow: 0,
    $justify-content: flex-start,
    $align-items: flex-start
  );
  padding: 0.4em;
  width: 20vw;
  min-height: 100vh;
  background-color: $color;
  color: white;

  &__header {
    padding: 0.5em;
    width: 100%;
    @include flex($justify-content: left);
    & h1 {
      font-size: 1em;
    }
  }
}
</style>
