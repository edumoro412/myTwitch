<script setup lang="ts">
const props = defineProps({
  user_name: String,
});
</script>

<template>
  <iframe
    :src="`https://www.twitch.tv/embed/${user_name}/chat?parent=https://my-twitch.vercel.app/&darkpopout`"
    frameborder="0"
    scrolling="no"
    class="container__chat--chat"
  ></iframe>
</template>

<style scoped lang="scss">
.container__chat--chat {
  width: 20vw;
  height: 94vh;
}
</style>
