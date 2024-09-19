import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/users/{username}";
const fetchUserData = async () => {
  const response = await axios.get(`${GITHUB_API_URL}`);
  return response.data;
};
export default fetchUserData;
