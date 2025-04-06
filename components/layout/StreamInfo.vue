<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  user_name: String,
  display_name: String,
  title: String,
  game_name: String,
  viewers: Number,
  tags: Array,
  picture: String,
});
</script>

<template>
  <section class="info">
    <img :src="picture" alt="Profile" class="info__picture" />
    <div class="info__rest">
      <div class="info__rest--name">
        <strong>{{ user_name }}</strong>
        <span class="buttons">
          <button class="follow-btn">Follow</button>
          <button class="sub-btn">Subscribe</button>
        </span>
      </div>
      <div class="info__rest--title">
        <span class="title">{{ title }}</span>
        <span class="viewers">{{ viewers }}</span>
      </div>
      <div class="info__rest--category">{{ game_name }}</div>
      <div class="info__rest--tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: $color;
  color: white;

  &__picture {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__rest {
    display: flex;
    flex-direction: column;
    width: 100%;

    &--name {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .buttons {
        margin-left: auto;
        display: flex;
        gap: 0.5rem;

        button {
          padding: 0.3rem 0.6rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .follow-btn {
          background-color: #199afc;
          color: white;
          transition: 0.3s ease-in-out;
          &:hover {
            background-color: #0c60b4;
            transform: scale(1.1);
          }
        }

        .sub-btn {
          background-color: $color-tertiary;
          color: white;
          transition: 0.3s ease-in-out;

          &:hover {
            background-color: #3d3d3d;
            transform: scale(1.1);
          }
        }
      }
    }

    &--title {
      font-weight: bold;
      margin: 0.3rem 0;
    }

    &--category {
      font-style: italic;
      color: #0c60b4;
      font-weight: bold;
    }

    &--tags {
      margin-top: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;

      .tag {
        background-color: #27272a;
        padding: 0.2rem 0.6rem;
        border-radius: 1rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
