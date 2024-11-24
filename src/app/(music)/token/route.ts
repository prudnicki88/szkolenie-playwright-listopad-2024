import "server-only";

var client_id = process.env["CLIENT_ID"];
var client_secret = process.env["CLIENT_SECRET"];

export async function GET(request: Request): Promise<Response> {
  const form = new URLSearchParams();
  form.append("grant_type", "client_credentials");

  const url = "https://accounts.spotify.com/api/token";

  var authOptions = {
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: form.toString(),
    json: true,
  };

  const res = await fetch(url, authOptions);
  const data = await res.json();

  return Response.json(data, { status: res.status });
}