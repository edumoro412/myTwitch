<script setup lang="ts">
import Header from '~/components/layout/HeaderComponent.vue';
import NavComponent from '~/components/layout/NavComponent.vue';
</script>
<template>
  <div>
    <Header />
    <main class="main">
      <NavComponent />
      <section>
        <slot />
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main {
  @include flex($justify-content: left);
}
</style>
