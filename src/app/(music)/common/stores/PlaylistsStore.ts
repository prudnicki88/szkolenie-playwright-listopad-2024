import { atom } from "jotai";
import { mockPlaylists } from "../fixtures/mockPlaylists";

export const playlistsAtom = atom(mockPlaylists);

export const playlistSelectedIdAtom = atom("123");

export const playlistSelectedAtom = atom((get) => {
  const id = get(playlistSelectedIdAtom);
  return get(playlistsAtom).find((p) => p.id == id);
});
