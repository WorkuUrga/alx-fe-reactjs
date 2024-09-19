import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/users";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return { user: response.data, error: null }; // Return user data
  } catch (error) {
    return { user: null, error: "Looks like we can't find the user" }; // Return error if something goes wrong
  }
};

export default fetchUserData;
