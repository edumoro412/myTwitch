import getTwitchToken from './twitch-token';

export default async function getRecommendedChannels() {
  const config = useRuntimeConfig();

  try {
    const token = await getTwitchToken();

    const response = await fetch(
      'https://api.twitch.tv/helix/streams?language=es&first=10',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Client-Id': config.public.twitchClientId,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Failed to fetch Twitch streams data'
    );
  }
}
