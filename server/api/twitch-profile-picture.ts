import getTwitchToken from '~/server/api/twitch-token';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required',
    });
  }

  try {
    const token = await getTwitchToken();
    const config = useRuntimeConfig();

    const response = await $fetch(
      `https://api.twitch.tv/helix/users?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Client-Id': config.public.twitchClientId,
        },
      }
    );

    return response;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Failed to fetch Twitch token data'
    );
  }
});
