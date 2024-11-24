export interface Playlist {
  id: string;
  name: string;
  /**
   * Is playlist only mine or visible to others
   * @see https://developer.spotify.com/documentation/web-api/concepts/playlists
   */
  public: boolean;
  description: string;
}

type PlaylistId = Playlist['id']