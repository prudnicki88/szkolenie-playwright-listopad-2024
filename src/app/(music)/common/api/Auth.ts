'use client'
const client_id = "39745076a05d4b4d84e8bc53243c20c6";
const scope = "user-read-private user-read-email";

export const login = () => {
  if(typeof window === 'undefined') return;
  const redirect_uri = window.origin + "/index.html";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&show_dialog=true";

  window.location.href = url;
};

let token = "";

export const checkLogin = () => {
  if(typeof window === 'undefined') return;

  token = new URLSearchParams(location.hash).get("#access_token") || "";

  if (token) {
    sessionStorage.setItem("token", token);
    location.hash = "";
  } else {
    token = sessionStorage.getItem("token") || "";
  }
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};
