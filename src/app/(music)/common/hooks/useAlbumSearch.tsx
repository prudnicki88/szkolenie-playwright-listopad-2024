import { useEffect, useState } from "react";
import {
  fetchAlbumsById,
  fetchAlbumsSearchResults,
} from "../api/fetchAlbumsSearchResults";
import { useQuery } from "react-query";

const CANCEL_SYMBOL = Symbol("CANCEL_SYMBOL");

export function useFetch<T, P>(
  param: P,
  fetcher: (
    param: P,
    options: {
      signal?: AbortSignal | undefined;
    }
  ) => Promise<T>
) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!param) return;

    const houston = new AbortController();

    setError(undefined);
    setIsLoading(true);
    setData(undefined);

    fetcher(param, {
      signal: houston.signal,
    })
      .then(setData)
      .catch((error) => {
        if (error == CANCEL_SYMBOL) return;
        setError(error);
      })
      .finally(() => setIsLoading(false));

    return () => houston.abort(CANCEL_SYMBOL);
  }, [param, fetcher]);

  return {
    data,
    error,
    isLoading,
  };
}

export const useAlbum = (id: string) => {
  return useQuery(
    ["albums/details/", id],
    ({ signal }) => fetchAlbumsById(id, { signal }),
    {
      enabled: id != "",
    }
  );
};

export function useAlbumSearch(query = "") {
  return useQuery(
    ["albums/search/", query],
    ({ signal }) => fetchAlbumsSearchResults(query, { signal }),
    {
      enabled: query != "",
    }
  );
}

// export function useAlbumSearch(query = "") {
//   const [data, setData] = useState<Album[]>([]);
//   const [error, setError] = useState<unknown>();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!query) return;

//     const houston = new AbortController();

//     setError(undefined);
//     setIsLoading(true);
//     setData([]);

//     fetchAlbumsSearchResults(query, {
//       signal: houston.signal,
//     })
//       .then(setData)
//       .catch((error) => {
//         if (error == CANCEL_SYMBOL) return;
//         setError(error);
//       })
//       .finally(() => setIsLoading(false));

//     return () => houston.abort(CANCEL_SYMBOL);
//   }, [query]);

//   return {
//     data,
//     error,
//     isLoading,
//   };
// }
