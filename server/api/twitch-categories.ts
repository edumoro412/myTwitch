import fetchTwitchData from './fetchTwitchData';

export default async function getTrendingCategories() {
  try {
    const streamsData = await fetchTwitchData('streams?first=100');

    if (!streamsData?.data || !Array.isArray(streamsData.data)) {
      console.error('Datos de streams no válidos:', streamsData);
      return [];
    }

    const validStreams = streamsData.data.filter((stream) => stream?.game_id);

    if (validStreams.length === 0) {
      console.warn('No se encontraron streams con game_id válido');
      return [];
    }

    const gameIds = [...new Set(validStreams.map((s) => s.game_id))];

    if (!gameIds || gameIds.length === 0) return [];

    const categoriesData = await fetchTwitchData(
      `games?id=${gameIds.slice(0, 100).join('&id=')}`
    );

    return categoriesData?.data || [];
  } catch (error) {
    console.error('Error en getTrendingCategories:', error);
    return [];
  }
}
