import fetchTwitchData from './fetchTwitchData';

export default async function getTrendingCategories() {
  const streamsData = await fetchTwitchData('streams?first=100');

  if (!streamsData?.data) return [];

  const gameIds = [...new Set(streamsData.data.map((s: any) => s.game_id))];

  if (gameIds.length === 0) return [];

  const categoriesData = await fetchTwitchData(
    `games?id=${gameIds.slice(0, 100).join('&id=')}`
  );

  return categoriesData.data;
}
