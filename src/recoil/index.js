import { atom, selector } from "recoil";

import { GITHUB_USER_DETAILS } from "../utils/constants";

export const githubUser = atom({
  key: "githubUser",
  default: "manvisharma09",
});

export const userDetails = selector({
  key: "userDetails",
  get: async ({ get }) => {
    const res = await fetch(`${GITHUB_USER_DETAILS}/${get(githubUser)}`);
    return res.json();
  },
});

export const getUserRepos = selector({
  key: "userRepos",
  get: async ({ get }) => {
    const res = await fetch(`${GITHUB_USER_DETAILS}/${get(githubUser)}/repos`);
    return res.json();
  },
});
