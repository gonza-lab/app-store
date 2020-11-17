import { fetchWithToken } from "./fetch";

export const renewToken = async () => {
  const res = await fetchWithToken('/auth/renew', 'GET');
  return res.json();
}