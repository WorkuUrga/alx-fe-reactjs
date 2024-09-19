import axios from "axios";

const GITHUB_SEARCH_API_URL = [
  "https://api.github.com/search/users?q",
  "location",
  "minRepos",
];

const fetchUserData = async (queryParams) => {
  try {
    const query = Object.entries(queryParams)
      .map(([key, value]) => `${key}:${value}`)
      .join("+");

    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);
    return { user: response.data, error: null };
  } catch (error) {
    return { user: null, error: "Looks like we can't find the user" };
  }
};

export default fetchUserData;
