import axios from "axios";

export const userDataAPI = async (username) => {
  try {
    const res = await axios.get(
      `http://localhost:800/userdata?username=${username}`
    );
    if (res?.data) {
      return res?.data;
    } else null;
  } catch (error) {
    console.log(error);
  }
};
