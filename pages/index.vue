<script setup lang="ts">
// Cargar config
const config = useRuntimeConfig();
const cliente_id = config.public.twitchClientId;

const { data: streamsData } = await useFetch('/api/twitch-top-streams');
console.log('ESTO ES LO DEL DATA', streamsData);
const AhoraDirectos = streamsData.value?.data || []; // Array vacío si no hay datos

// Obtener la miniatura del primer stream (o el que necesites)
const miniatura = AhoraDirectos[0]?.thumbnail_url
  ?.replace('{width}', '640')
  .replace('{height}', '360');
</script>

<template>
  <div>
    <h1>Videos de Twitch</h1>

    <!-- Mostrar miniatura del stream -->
    <img v-if="miniatura" :src="miniatura" alt="Miniatura del directo" />

    <div v-if="AhoraDirectos.length > 0">
      <div
        v-for="stream in AhoraDirectos"
        :key="stream.user_name || stream.id"
        class="mb-10 flex gap-4"
      >
        <div>
          <h2>{{ stream.user_name || stream.user_id }}</h2>

          <img
            :src="
              stream.thumbnail_url
                .replace('{width}', '640')
                .replace('{height}', '360')
            "
            :alt="`Miniatura de ${stream.user_name}`"
          />

          <iframe
            width="560"
            height="315"
            :src="`https://player.twitch.tv/?channel=${stream.user_name}&parent=localhost`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <h3>Chat</h3>
          <iframe
            width="350"
            height="315"
            :src="`https://www.twitch.tv/embed/${stream.user_name}/chat?parent=localhost`"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No hay streams disponibles en este momento.</p>
    </div>

    <p>cliente_id -> {{ cliente_id }}</p>
  </div>
</template>

<style>
p {
  color: white;
}
</style>
