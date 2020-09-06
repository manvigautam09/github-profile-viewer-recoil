import ApiService from "./apiService";

export const getUserDetailsRepos = (endpoint) => {
  const APIObj = {
    method: "GET",
    endPoint: endpoint,
    removeHeader: true,
  };
  return ApiService(APIObj);
};
