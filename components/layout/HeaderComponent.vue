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
      <NuxtLink class="header__left" to="/">
        <mytwitchIcon alt="Icono de myTwitch" />
        <span class="header__left--name">
          <p>MYTWITCH</p>
        </span>
        <optionsIcon alt="Icono de opciones" />
      </NuxtLink>
      <form class="header__center" name="search">
        <input type="text" placeholder="Search" class="header__center--input" />
        <button class="header__center--search">
          <searchIcon alt="Icono de búsqueda" />
        </button>
      </form>
      <span class="header__right">
        <crownIcon alt="Icono de corona" />
        <button class="header__right--login">Log In</button>
        <button class="header__right--signup">Sign Up</button>
        <userIcon alt="Icono del usuario" />
      </span>
    </header>
  </div>
</template>

<style lang="scss">
.header {
  background-color: var(--color-secondary);
  color: white;
  padding-left: 0.5em;
  padding-right: 0.5em;
  height: 4em;
  width: 100%;
  @include flex($justify-content: space-between);
  @include responsive();

  &__left {
    text-decoration: none;
    color: white;
    @include flex($justify-content: left, $flex-grow: 0);

    &--name {
      margin: 0 0.5em;
      font-weight: bold;
      font-size: 1.2em;
      @media (max-width: 732px) {
        display: none;
      }
    }
  }

  &__center {
    width: auto;
    align-items: center;
    background-color: #2f2f34;
    border-radius: 0.5em;
    padding-right: 0.5em;
    @include flex($justify-content: center, $flex-grow: 0);

    @media (max-width: 732px) {
      width: 12em;
      height: 2em;
    }

    @media (max-width: 600px) {
      width: 8em;
      height: 2em;
    }

    &--input {
      width: 20em;
      height: 3em;
      @include input($background-color: var(--color-secondary), $color: grey);

      @media (max-width: 732px) {
        width: 11em;
        height: 100%;
      }

      @media (max-width: 600px) {
        width: 8em;
        height: 100%;
      }
    }

    &--search {
      background-color: var(--color-tertiary);
      border: none;
      cursor: pointer;
      padding: 0.5em;
      border-radius: 0.5em;
      margin: 0.2em;

      @media (max-width: 732px) {
        margin: 0;
        width: 8em;
        height: 2em;
        padding: 0;
      }

      @media (max-width: 600px) {
        margin: 0;
        width: 2em;
        height: 2em;
        padding-right: 0.3em;
      }
    }
  }

  &__right {
    @include flex($justify-content: right, $flex-grow: 0);

    &--login {
      color: white;
      margin: 0 0.5em;
      @include button($color: white, $background-color: var(--color-tertiary));

      @media (max-width: 500px) {
        font-size: 0.5em;
      }

      &:hover {
        background-color: #1d1d1d;
      }
    }

    &--signup {
      color: white;
      margin: 0 0.5em;
      @include button($color: white, $background-color: #179afc);

      @media (max-width: 500px) {
        font-size: 0.5em;
      }

      &:hover {
        background-color: #0e6fb8;
      }
    }
  }
}
</style>
