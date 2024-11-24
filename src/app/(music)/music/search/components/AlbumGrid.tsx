import AlbumCard from "./AlbumCard";
import { Album } from "../../common/model/Album";

type Props = {albums: Album[];};

const AlbumGrid = ({albums}: Props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-4 g-0">
        {albums.map((album) => (
          <div className="col" key={album.id}>
            <AlbumCard album={album}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
