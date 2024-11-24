"use client";

import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";
import { Playlist } from "../../model/Playlist";

const EMPTY_PLAYLIST: Playlist = {
  id: "",
  name: "",
  public: false,
  description: "",
};

type Props = {
  playlist?: Playlist;
  onCancel(): void;
  onSave(playlist: Playlist): void;
};

const PlaylistEditor = ({
  playlist = EMPTY_PLAYLIST,
  onCancel,
  onSave,
}: Props) => {
  // playlist = playlist || EMPTY_PLAYLIST; // Narrow undefined to Default
  // playlist = playlist ?? EMPTY_PLAYLIST; // Default

  const [playlistName, setPlaylistName] = useState(playlist.name);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylistName(event.currentTarget.value);
  };

  return (
    <div 
    data-testid="playlist_editor"
    id={`playlist_${playlist.id}`} title={playlist.name}>
      {/* .grid.gap-5>.grid.gap-2*3>label{Name}+input[value="Playlist $$$"] */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            type="text"
            defaultValue={playlistName}
            className="text-black"
            onChange={eventHandler}
          />
          <div className="text-end">{playlistName.length} / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" className="me-2" defaultChecked={playlist.public} />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Desciption</label>
          <textarea
            className="text-black"
            value={playlist.description}
            onInput={(e) => {}}
          />
        </div>

        <div className="flex justify-between">
          <button onClick={onCancel}>Cancel</button>
          <button
            onClick={() => {
              onSave({
                ...playlist,
                name: playlistName,
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
