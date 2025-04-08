import fetchTwitchData from './fetchTwitchData';

export default async function getStreams() {
  try {
    const { data } = await fetchTwitchData('streams?first=6');

    if (!Array.isArray(data)) {
      return { data: [] };
    }

    return {
      data: data.map((stream) => ({
        id: stream.id || '',
        user_id: stream.user_id || '',
        user_name: stream.user_name || '',
        title: stream.title || '',
        viewer_count: stream.viewer_count || 0,
        thumbnail_url: stream.thumbnail_url || '',
      })),
    };
  } catch (error) {
    console.error('Error fetching streams:', error);
    return { data: [] };
  }
}
