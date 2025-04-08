export default async function getTwitchToken() {
  const config = useRuntimeConfig();

  const clientId = config.public.twitchClientId;
  const clientSecret = config.twitchClientSecret;

  const authUrl = 'https://id.twitch.tv/oauth2/token';
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'client_credentials');

  try {
    const response = await fetch(`${authUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Failed to fetch Twitch token data'
    );
  }
}
