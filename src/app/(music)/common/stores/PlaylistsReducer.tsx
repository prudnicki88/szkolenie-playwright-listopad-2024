import { mockPlaylists } from "../fixtures/mockPlaylists";
import { Playlist } from "../model/Playlist";

type State = {
  mode: "details" | "editor" | "creator";
  playlists: Playlist[];
  selected?: Playlist;
  selectedId?: Playlist["id"];
};

export const initialState: State = {
  mode: "details",
  playlists: mockPlaylists,
  selectedId: "123",
  selected: mockPlaylists[0],
};

export function reducer(state = initialState, action: Action): State {
  console.log(action.type);
  
  switch (action.type) {
    case "[Playlist] Select": {
      return {
        ...state,
        selectedId: action.payload.id,
      };
    }

    case "[Playlist] Set mode":
      return {
        ...state,
        mode: action.payload.mode,
      };

    case "[Playlist] Update": {
      const draft = action.payload.draft;
      return {
        ...state,
        playlists: state.playlists.map((p) => (p.id === draft.id ? draft : p)),
        selected: draft,
        selectedId: draft.id,
      };
    }

    case "[Playlist] Create": {
      const draft = action.payload.draft;
      return {
        ...state,
        playlists: [...state.playlists, draft],
        selected: draft,
        selectedId: draft.id,
      };
    }

    default:
      return {
        ...state,
        // counter: counterReducer(state.counter, action)
        // tracks: tracksReducer(state.tracks, action)
        // albums: albumsReducer(state.tracks, action)
      };
  }
}

type Action = ReturnType<
  | typeof selectPlaylistById
  | typeof switchMode
  | typeof updatePlaylist
  | typeof createPlaylist
>;

export const selectPlaylistById = (id: Playlist["id"]) =>
  ({
    type: "[Playlist] Select",
    payload: { id },
  } as const);

export const switchMode = (mode: "details" | "editor" | "creator") =>
  ({
    type: "[Playlist] Set mode",
    payload: { mode },
  } as const);

export const updatePlaylist = (draft: Playlist) =>
  ({
    type: "[Playlist] Update",
    payload: { draft },
  } as const);

export const createPlaylist = (draft: Playlist) => {
  draft.id = crypto.randomUUID();
  return {
    type: "[Playlist] Create",
    payload: { draft },
  } as const;
};

export const selectPlaylists = (state: State) => state.playlists;

export const selectActivePlaylist = (state: State) =>
  state.playlists.find((p) => p.id === state.selectedId);

export const selectActiveMode = (state: State) => state.mode;
