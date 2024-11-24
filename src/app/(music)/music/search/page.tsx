"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Loading } from "../../common/components/Loading";
import { useAlbumSearch } from "../../common/hooks/useAlbumSearch";
import AlbumGrid from "./components/AlbumGrid";
import SearchForm from "./components/SearchForm"; 

const AlbumSearchView = () => {
  const { push } = useRouter();
  const query = useSearchParams();
  const path = usePathname();
  const q = query.get("q") || "";

  const { data: albums = [], error, isLoading } = useAlbumSearch(q);

  return (
    <div>
      {/* <h3 className="display-3">Search</h3> */}
      <div className="row">
        <div className="col">
          <SearchForm search={(q) => push(`${path}?q=${q}`)} query={q} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {error instanceof Error && (
            <p className="alert alert-danger">{error.message}</p>
          )}

          {isLoading && <Loading />}

          <AlbumGrid albums={albums} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
