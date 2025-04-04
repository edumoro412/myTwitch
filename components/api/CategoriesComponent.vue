<script setup lang="ts">
const data = await useFetch('/api/twitch-categories?first=6');
const bestCategories = data.data.value.slice(0, 6);
console.log(bestCategories);

const width = 200;
const height = 300;

const updatedCategories = bestCategories.map((categorie) => {
  const updatedBoxArtUrl = categorie.box_art_url
    .replace('{width}', width.toString())
    .replace('{height}', height.toString());

  return { ...categorie, box_art_url: updatedBoxArtUrl };
});
</script>
<template>
  <article
    v-for="categorie in updatedCategories"
    :key="categorie.id"
    class="category"
  >
    <img
      :src="categorie.box_art_url"
      :alt="categorie.name"
      class="category__image"
    />
    <span class="category__name">{{ categorie.name }}</span>
  </article>
</template>

<style scoped lang="scss">
.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__name {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    margin-top: 10px;

    &__image {
      object-fit: cover;
    }
  }
}
</style>
