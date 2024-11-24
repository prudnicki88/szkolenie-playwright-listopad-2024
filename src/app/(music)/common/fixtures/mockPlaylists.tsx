import { Playlist } from "../model/Playlist";

// Structural Typing
export const mockPlaylists: Playlist[] = [
  {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Best playlist",
  },
  {
    id: "234",
    name: "Playlist 234",
    public: false,
    description: "Awesome playlist",
  },
  {
    id: "345",
    name: "Playlist 345",
    public: false,
    description: "Cool playlist",
  },
];
