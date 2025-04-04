import fetchTwitchData from './fetchTwitchData';

export default async function getStreams() {
  const data = await fetchTwitchData('streams?first=9');

  return data;
}
