interface TwitchTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string[];
  token_type: string;
}

interface TwitchErrorResponse {
  error: string;
  status: number;
  message: string;
}

let adminToken: string | null = null;
let refreshToken: string | null = null;
let tokenExpiration: number | null = null;

export async function getTwitchAdminToken(): Promise<string | null> {
  const now = Date.now();

  if (adminToken && tokenExpiration && now < tokenExpiration) {
    return adminToken;
  }

  if (refreshToken) {
    try {
      const res = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: process.env.VITE_TWITCH_CLIENT_ID || '',
        }),
      });

      const jsonRes = await res.json();

      if ('error' in jsonRes && 'status' in jsonRes) {
        const errorResponse = jsonRes as TwitchErrorResponse;
        console.error(`Error al renovar token: ${errorResponse.message}`);
        adminToken = null;
        refreshToken = null;
        tokenExpiration = null;
        return null;
      }

      const successResponse = jsonRes as TwitchTokenResponse;

      if (successResponse.access_token) {
        adminToken = successResponse.access_token;
        tokenExpiration = now + (successResponse.expires_in || 3600) * 1000;
        refreshToken = successResponse.refresh_token || refreshToken;
        return adminToken;
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return null;
    }
  }

  return null;
}

export async function saveTwitchAdminToken(
  access_token: string,
  refresh_token: string,
  expires_in: number
): Promise<void> {
  adminToken = access_token;
  refreshToken = refresh_token;
  tokenExpiration = Date.now() + expires_in * 1000;
}
