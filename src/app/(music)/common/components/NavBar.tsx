"use client";
import { useMemo, useState } from "react";
import { cls } from "../helpers/cls";
import UserWidget from "./UserWidget";
import Link from "next/link";
import { checkLogin } from "../api/Auth";
// import { login } from "../api/Auth";

const login = async () => {
  const res = await fetch("/api/token");
  const data = await res.json();
  sessionStorage.setItem("token", data.access_token);
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useMemo(() => checkLogin(), []);

  return (
    <div>
      <nav className="my-2">
        <div className="container flex justify-between">
          <Link className={"navbar-brand"} href="/">
            MusicApp
          </Link>
          <ul className="navbar-nav flex gap-5">
            <li className="nav-item">
              <Link className="nav-link" href="/playlists">
                Playlists
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/todos">
                Todos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/examples">
                Examples
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/music/search">
                Search
              </Link>
            </li>
          </ul>
          <div className=" ">
            <button onClick={login}>Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
