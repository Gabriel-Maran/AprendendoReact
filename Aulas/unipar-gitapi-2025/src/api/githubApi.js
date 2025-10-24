import axios from "axios";

const gitHubApi = axios.create({
  baseURL: "https://api.github.com",
});

export async function getUser(username) {
  const response = await gitHubApi.get(`/users/${username}`);
  return response.data;
}

export async function getUserRepos(username) {
  const response = await gitHubApi.get(`/users/${username}/repos`);
  return response.data;
}
