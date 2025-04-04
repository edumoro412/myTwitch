import getTwitchToken from './twitch-token';
import { useRuntimeConfig } from '#imports';

export default async function fetchTwitchData(endpoint: string) {
  const config = useRuntimeConfig();

  try {
    const token = await getTwitchToken();

    const response = await fetch(`https://api.twitch.tv/helix/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': config.public.twitchClientId,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Twitch API Error: ${response.status} ${response.statusText}. ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch Twitch data'
    );
  }
}
