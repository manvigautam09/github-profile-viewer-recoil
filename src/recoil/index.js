import { atom, selector } from "recoil";

import { getUserDetailsRepos } from "../services/userService";

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
    const res = await getUserDetailsRepos(`/${get(githubUser)}`);
    return res;
  },
});

export const getUserRepos = selector({
  key: "userRepos",
  get: async ({ get }) => {
    const res = await getUserDetailsRepos(`/${get(githubUser)}/repos`);
    return res;
  },
});

export const repoFilterState = atom({
  key: "repoFilterState",
  default: "",
});

export const selectedLanguages = atom({
  key: "selectedLanguages",
  default: [],
});

export const getFilteredReposandLanguges = selector({
  key: "getFilteredRepos",
  get: ({ get }) => {
    if (get(getUserRepos) === "User  Not found") {
      return {
        repos: [],
        languages: [],
      };
    } else {
      if (get(repoFilterState).length || get(selectedLanguages).length) {
        let filteredByName = get(getUserRepos).filter(
          (item) =>
            item.name
              .toLowerCase()
              .search(get(repoFilterState).toLowerCase()) !== -1
        );

        if (get(selectedLanguages).length) {
          filteredByName = filteredByName.filter(
            (item) => get(selectedLanguages).indexOf(item.language) !== -1
          );
        }

        return {
          repos: filteredByName,
          languages: [
            ...new Set(
              get(getUserRepos)
                .filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .search(get(repoFilterState).toLowerCase()) !== -1
                )
                .map((item) => item.language)
            ),
          ],
        };
      } else {
        return {
          repos: get(getUserRepos),
          languages: [
            ...new Set(get(getUserRepos).map((item) => item.language)),
          ],
        };
      }
    }
  },
});
