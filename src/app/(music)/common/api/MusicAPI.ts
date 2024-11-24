import ky, { KyResponse } from "ky";

export const MusicAPI = ky.create({
  prefixUrl: "https://api.spotify.com/v1/",
  headers: {},
  retry: {},
  searchParams: {},
  hooks: {
    beforeRequest: [
      (req) => {
        const token = sessionStorage.getItem("token");
        if (token) req.headers.set("Authorization", "Bearer " + token);
      },
    ],
    beforeError: [
      async (error) => {
        try {
          const {
            error: { message },
          } = await (error.response as KyResponse).json<SpotifyError>();
          error.message = message;
        } catch (e) {
          error.message = "Unexpected server error";
        }
        return error;
      },
    ],
  },
});

interface SpotifyError {
  error: { message: string };
}
