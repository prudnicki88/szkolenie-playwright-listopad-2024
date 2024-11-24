import Link from "next/link";
import React from "react";
import PlaylistEditor from "../components/PlaylistEditor";

type Props = {};

function PlaylistCreatePage({}: Props) {
  return (
    <div>
      <PlaylistEditor onCancel={() => {}} onSave={() => {}} />
    </div>
  );
}

export default PlaylistCreatePage;
