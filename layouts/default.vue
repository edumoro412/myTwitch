<script setup lang="ts">
import mytwitchIcon from '~/components/icons/mytwitchIcon.vue';
import optionsIcon from '~/components/icons/optionsIcon.vue';
import searchIcon from '~/components/icons/searchIcon.vue';
import crownIcon from '~/components/icons/crownIcon.vue';
import userIcon from '~/components/icons/userIcon.vue';
</script>
<template>
  <div>
    <header class="header">
      <span class="header__left">
        <mytwitchIcon />
        <span class="header__left--name">MIDUTCH</span>
        <optionsIcon />
      </span>
      <span class="header__center">
        <input type="text" placeholder="Search" class="header__center--input" />
        <span class="header__input--lupa"><searchIcon /> </span>
      </span>
      <span class="header__right"></span>
      <crownIcon />
      <button>Log In</button>
      <button>Sign Up</button>
      <userIcon />
    </header>
  </div>
</template>

<style lang="scss">
$color: #18181b;

@mixin flex(
  $direction: row,
  $wrap: nowrap,
  $justify-content: center,
  $align-items: center,
  $gap: 0.5em
) {
  display: flex;
  flex-wrap: $wrap;
  justify-content: $justify-content;
  align-items: $align-items;
  gap: $gap;
}

.header {
  background-color: $color;
  height: 4em;
  color: white;
  padding-left: 0.5em;
  @include flex($justify-content: left);

  &__left {
    @include flex($justify-content: left);
    &--name {
      padding-right: 1em;
    }
  }
  &__center {
    display: flex;
    align-items: center;
    background-color: #2f2f34;
    border-radius: 0.5em;
    padding-right: 0.5em;
    &--input {
      background-color: $color;
      width: 20em;
      padding: 0.5em;
      border: 1px solid #59585c;
      height: 3.5em;
      border-radius: 0.5em;
    }
  }
}
</style>
