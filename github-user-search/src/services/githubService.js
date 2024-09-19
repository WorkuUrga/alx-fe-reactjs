import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/users";
const fetchUserData = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/${username}`);
  return response.data;
};
export default fetchUserData;
