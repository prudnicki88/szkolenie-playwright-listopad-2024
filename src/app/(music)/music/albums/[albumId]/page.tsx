"use client";
import { useState, useRef } from "react";
import { Loading } from "../../../common/components/Loading";
import { cls } from "../../../common/helpers/cls";
import { useAlbum } from "../../../common/hooks/useAlbumSearch";
import { Track } from "../../../common/model/Album";
import AlbumCard from "../../search/components/AlbumCard";

const AlbumDetailView = ({
  params: { albumId },
}: {
  params: { albumId: string };
}) => {
  const { data: album, error } = useAlbum(albumId);

  const [currentTrack, setCurrentTrack] = useState<Track>();

  const audioElem = useRef<HTMLAudioElement>(null);

  const play = (track: Track) => {
    setCurrentTrack(track);
    if (!audioElem.current) return;
    audioElem.current.src = track.preview_url;
    audioElem.current.volume = 0.2;
    audioElem.current.play();
  };

  if (error instanceof Error)
    return <p className="alert alert-danger">{error.message}</p>;

  if (!album) return <Loading />;

  return (
    <div>
      <div className="row">
        <div className="col">
          <h3 className="display-3">{album.name}</h3>
          <small>{albumId}</small>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <AlbumCard album={album} />
        </div>
        <div className="col">
          <dl>
            <dt>Artist</dt>
            <dd>{album.artists[0].name}</dd>
            <dt>Relase Date</dt>
            <dd>{album.release_date}</dd>
          </dl>

          {currentTrack && (
            <a
              href={currentTrack?.preview_url}
              download={'download.mp3'}
              className="float-end"
              target="_blank"
            >
              Download
            </a>
          )}
          <audio className="my-3 w-100" controls ref={audioElem}  />

          <div className="list-group">
            {album.tracks.items.map((track, index) => (
              <div
                className={cls(
                  "list-group-item",
                  track.id === currentTrack?.id && "active"
                )}
                onClick={() => play(track)}
                key={track.id}
              >
                {index + 1}.  {track.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailView;
