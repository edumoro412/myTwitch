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
      <form class="header__center">
        <input type="text" placeholder="Search" class="header__center--input" />
        <button class="header__center--search"><searchIcon /></button>
      </form>
      <span class="header__right">
        <crownIcon />
        <button>Log In</button>
        <button>Sign Up</button>
        <userIcon />
      </span>
    </header>
  </div>
</template>

<style lang="scss">
.header {
  background-color: $color-secondary;
  color: white;
  padding-left: 0.5em;
  height: 4em;
  @include flex($justify-content: left);

  &__left {
    @include flex($justify-content: left);
    &--name {
      padding-right: 1em;
    }
  }
  &__center {
    @include flex($justify-content: left, $flex-grow: 0);
    width: auto;
    align-items: center;
    background-color: #2f2f34;
    border-radius: 0.5em;
    padding-right: 0.5em;
    &--input {
      background-color: $color-secondary;
      width: 20em;
      padding: 0.5em;
      border: 1px solid #59585c;
      height: 3.5em;
      border-radius: 0.5em;
      color: grey;
    }
    &--search {
      background-color: $color-tertiary;
      border: none;
      cursor: pointer;
      padding: 0.5em;
      border-radius: 0.5em;
      margin: 0.2em;
    }
  }

  &__right {
    @include flex($justify-content: right);
  }
}
</style>
