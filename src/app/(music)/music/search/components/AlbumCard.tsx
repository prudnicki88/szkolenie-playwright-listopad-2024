import { useRouter } from "next/navigation";
import { Album } from "../../../common/model/Album";

type Props = { album: Album };

const AlbumCard = ({ album }: Props) => {
  const { push } = useRouter();

  return (
    <div className="card" onClick={() => push("/music/albums/" + album.id)}>
      <img
        src={album.images[0].url}
        className="card-img-top"
        alt="album cover"
        style={{ filter: "blur(1px)" }}
      />
      <div className="card-body">
        <h5 className="card-title">{album.name}</h5>
      </div>
      {/* <card></card> */}
    </div>
  );
};

export default AlbumCard;
