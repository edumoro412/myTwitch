const token = await getTwitchAdminToken();

async function sendCommercial() {
  const response = await fetch(
    'https://api.twitch.tv/helix/channels/commercial',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': process.env.TWITCH_CLIENT_ID,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  console.log(data);
}

await sendCommercial();
