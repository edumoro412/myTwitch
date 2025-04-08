<script setup lang="ts">
import userIconRed from '../icons/userIconRed.vue';

defineProps({
  user_name: String,
  display_name: String,
  title: String,
  game_name: String,
  viewers: Number,
  tags: Array as () => string[],
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
        <span class="viewers"><userIconRed />{{ viewers }}</span>
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
  @include flex-center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-primary);
  color: var(--color-text);

  &__picture {
    width: 4rem;
    height: 4rem;
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
          @include button-style(var(--color-accent));
          &:hover {
            background-color: var(--color-accent-dark);
          }
        }

        .sub-btn {
          @include button-style(var(--color-tertiary));
          &:hover {
            background-color: var(--color-secondary);
          }
        }
      }
    }

    &--title {
      display: flex;
      justify-content: space-between;
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
        @include tag-style;
      }
    }
  }
}
.viewers {
  display: flex;
  color: var(--color-red);
  font-weight: bold;
  font-size: 1rem;
}
</style>
