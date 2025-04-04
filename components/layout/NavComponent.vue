<script setup lang="ts">
import { ref } from 'vue';

const { data } = await useFetch('/api/twitch-recommended-channels');
const info = data.value?.data || [];

const profileImageUrls = ref<string[]>([]);

const fetchProfileImages = async () => {
  profileImageUrls.value = await Promise.all(
    info.map(async (profile) => {
      const { data } = await useFetch('/api/twitch-profile-picture', {
        query: { id: profile.user_id },
      });
      return data.value?.data[0]?.profile_image_url;
    })
  );
};

await fetchProfileImages();

const profiles = info.map((profile: object, index: number) => ({
  ...profile,
  profile_image_url: profileImageUrls.value[index],
}));
</script>

<template>
  <nav class="nav">
    <header class="nav__header">
      <h1>RECOMMENDED CHANNELS</h1>
      <hideIcon />
    </header>
    <section class="channels__list">
      <article
        v-for="profile in profiles"
        :key="profile.user_id"
        class="channel__card"
      >
        <div class="channel__avatar">
          <img
            :src="profile.profile_image_url"
            alt="Profile picture"
            class="channel__avatar--img"
          />
        </div>
        <div class="channel__details">
          <span class="channel__details--username">{{
            profile.user_name
          }}</span>
          <span class="channel__details--game">{{ profile.game_name }}</span>
        </div>
        <div class="channel__viewers">
          <span class="channel__viewes-liveindicator">🔴</span>
          <span>{{ profile.viewer_count }}</span>
        </div>
      </article>
    </section>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  height: 100vh;
  width: 20vw;
  min-width: 250px;
  background-color: $color;
  color: white;
  padding: 0.8em;
  overflow-y: auto;

  &__header {
    padding: 0.5em 0;
    @include flex($justify-content: space-between);
    margin-bottom: 1em;

    h1 {
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 1240px) {
    display: none;
  }
}

.channels__list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.channel__card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.8em;
  padding: 0.5em;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3a3a3d;
  }
}

.channel__avatar {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: #3a3a3d;
  @include flex(center, center);

  &--img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}

.channel__details {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &--username {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &--game {
    font-size: 0.8em;
    color: #adadb8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.channel__viewers {
  @include flex(center, center);
  gap: 0.3em;
  font-size: 0.8em;

  &--live--indicator {
    color: red;
    font-size: 0.6em;
  }
}
</style>
