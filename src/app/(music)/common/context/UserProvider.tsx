"use client";
import React, { PropsWithChildren, useContext } from "react";
import { login } from "../api/Auth";
import { useQuery } from "react-query";
import { MusicAPI } from "../api/MusicAPI";

interface UserContext {
  user?: User;
  login(): void;
  logout(): void;
}
interface User {
  display_name: string;
}

const logout = () => {};

export const UserContext = React.createContext<UserContext | null>(null);

type Props = PropsWithChildren<{}>;

const UserProvider = ({ children }: Props) => {
  const { data: user } = useQuery(["user"], () =>
    MusicAPI.get("me").json<User>()
  );

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("Missing <UserProvider/>");
  return ctx;
};

// React.createElement('type',{},'children')
// <p props> children </p>

export default UserProvider;
