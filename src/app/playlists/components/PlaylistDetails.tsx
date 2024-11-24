"use client";
// tsrafce

import { Playlist } from "@/app/model/Playlist";
import React from "react";

type Props = {
  playlist?: Playlist;
  onEdit(): void;
};

const PlaylistDetails = ({ playlist, onEdit }: Props) => {
  // Function (Type) Guard  - if + return
  if (!playlist) {
    return (
      <div
        data-testid="playlist-details"
        className="p-5 border border-solid border-white"
      >
        No playlist selected
      </div>
    );
  }

  return (
    <div data-testid="playlist-details">
      {/* .grid.gap-5>.grid.gap-2*3>strong{Name}+div{Playlist $$$} */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <strong>Name</strong>
          <div data-testid="playlist-details-name">{playlist.name}</div>
        </div>
        <div className="grid gap-2">
          <strong>Public</strong>
          <div
            style={{
              color: playlist.public ? "green" : "red",
            }}
          >
            {playlist.public ? "Yes" : "No"}
          </div>
        </div>
        <div className="grid gap-2">
          <strong>Description</strong>
          <div>{playlist.description} </div>
        </div>

        <div className="flex">
          <button onClick={onEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
