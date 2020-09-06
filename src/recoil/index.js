import { atom, selector } from "recoil";

import { GITHUB_USER_DETAILS } from "../utils/constants";

export const localUser = atom({
  key: "localUser",
  default: "manvisharma09",
});

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

export const repoFilterState = atom({
  key: "repoFilterState",
  default: "",
});

// export const getFilteredRepos = selector({
//   key: "getFilteredRepos",
//   get: ({ get }) =>
//     get(repoFilterState).length
//       ? get(getUserRepos).filter(
//           (item) => item.name.search(get(repoFilterState).toLowerCase()) !== -1
//         )
//       : get(getUserRepos),
// });

// export const getFilteredRepoLanguages = selector({
//   key: "getFilteredRepoLanguages",
//   get: ({ get }) => {
//     return [...new Set(get(getUserRepos).map((item) => item.language))];
//   },
// });

export const getFilteredReposandLanguges = selector({
  key: "getFilteredRepos",
  get: ({ get }) =>
    get(repoFilterState).length
      ? {
          repos: get(getUserRepos).filter(
            (item) =>
              item.name.search(get(repoFilterState).toLowerCase()) !== -1
          ),
          languages: [
            ...new Set(
              get(getUserRepos)
                .filter(
                  (item) =>
                    item.name.search(get(repoFilterState).toLowerCase()) !== -1
                )
                .map((item) => item.language)
            ),
          ],
        }
      : {
          repos: get(getUserRepos),
          languages: [
            ...new Set(get(getUserRepos).map((item) => item.language)),
          ],
        },
});
