<script setup lang="ts">
const config = useRuntimeConfig();

interface TokenResponse {
  token: string;
}

const { data: tokenData } = await useFetch<TokenResponse>('/api/twitch-token');
const token = tokenData.value?.token;

if (!token) {
  throw new Error('No se pudo obtener el token de Twitch');
}

// Obtener datos del video (ejemplo con ID fijo)
const videoId = '987654321'; // Reemplaza con un ID real
const { data: videoData } = await useFetch(
  `https://api.twitch.tv/helix/videos?id=${videoId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-ID': config.public.twitchClientId,
    },
  }
);

console.log('Video data:', videoData.value);

const hostname = ref('');
onMounted(() => {
  hostname.value = window.location.hostname; // Solo se ejecuta en el cliente
});
</script>

<template>
  <div>
    <h1>Video de Twitch</h1>
    <iframe
      v-if="hostname"
      width="560"
      height="315"
      :src="`https://player.twitch.tv/?video=${videoId}&parent=${hostname}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>
