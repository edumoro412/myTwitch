import fetchTwitchData from './fetchTwitchData';

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event);

  console.log('=======================================', userId);
  console.log('Fetching Twitch user info for ID:', userId);

  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'userId is required',
    });
  }

  try {
    const data = await fetchTwitchData(`streams?user_id=${userId}`);
    return data;
  } catch (error) {
    console.error('Error fetching Twitch user:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch Twitch user info',
    });
  }
});
