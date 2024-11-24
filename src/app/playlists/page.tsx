"use client";

import { useState } from "react";
import { Playlist } from "../model/Playlist";
import PlaylistDetails from "./components/PlaylistDetails";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistsList from "./components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";

const updatePlaylists = (draft: Playlist) => (playlists: Playlist[]) =>
  playlists.map((p) => (p.id == draft.id ? draft : p));

export default function PlaylistsView() {
  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [selected, setSelected] = useState<Playlist>();

  const [mode, setMode] = useState<"details" | "editor">("details");

  const selectPlaylistById = (id: string) => {
    const selected = playlists.find((p) => p.id == id);
    setSelected(selected);
  };

  const savePlaylist = (draft: Playlist): void => {
    setPlaylists(updatePlaylists(draft));
    setSelected(draft);
    setMode("details");
  };

  return (
    <div className="container">
      <h1 className="text-2xl text-red-400 leading-loose mb-4">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistsList
            items={playlists}
            selectedId={selected?.id}
            onSelect={selectPlaylistById}
          />
        </div>
        <div>
          {mode === "details" && (
            <PlaylistDetails
              playlist={selected}
              onEdit={() => setMode("editor")}
            />
          )}

          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={() => setMode("details")}
              onSave={savePlaylist}
            />
          )}
        </div>
      </div>
    </div>
  );
}
