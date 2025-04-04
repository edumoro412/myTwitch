import { useRuntimeConfig } from '#imports';
import getTwitchToken from './twitch-token';

interface TwitchStream {
  id: string;
  user_id: string;
  user_name: string;
  title: string;
  viewer_count: number;
  thumbnail_url: string;
}

interface TwitchResponse {
  data: TwitchStream[];
}

export default async function getStreams(): Promise<TwitchResponse> {
  const config = useRuntimeConfig();

  try {
    const token = await getTwitchToken();
    console.log('Token obtenido:', token);

    const response = await fetch(
      'https://api.twitch.tv/helix/streams?first=6',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Client-Id': config.public.twitchClientId,
        },
      }
    );

    console.log('Client ID usado:', config.public.twitchClientId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Twitch API Error: ${response.status} ${response.statusText}. ${errorText}`
      );
    }

    const data = await response.json();
    console.log('Datos recibidos:', data);
    return data;
  } catch (error) {
    console.error('=================== ERROR ===================');
    console.error('Error al obtener streams de Twitch:', error);
    throw createError({
      statusCode: 500,
      message:
        error instanceof Error
          ? error.message
          : 'Failed to fetch Twitch streams data',
    });
  }
}
