import { AlbumResponse, AlbumSearchResponse } from "../model/Album";
import { MusicAPI } from "./MusicAPI";

export const fetchAlbumsSearchResults = async (
  query = "batman",
  options: { signal?: AbortSignal }
) => {
  const res = await MusicAPI.get("search", {
    searchParams: {
      q: query,
      type: "album",
    },
    ...options,
  });
  const data = await res.json<AlbumSearchResponse>();

  return data.albums.items;
};

export const fetchAlbumsById = async (
  id: string,
  options: { signal?: AbortSignal }
) => {
  const res = await MusicAPI.get("albums/" + id, {
    ...options,
  });
  return res.json<AlbumResponse>();
};
