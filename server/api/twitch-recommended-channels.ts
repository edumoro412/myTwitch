import fetchTwitchData from './fetchTwitchData';

export default async function getRecommendedChannels() {
  return fetchTwitchData('streams?language=es&first=10');
}
