import axios from "axios";

export const userDataAPI = async (username) => {
  try {
    const res = await axios.get(
      `https://margin-funding-backend-v3.vercel.app/userdata?username=${username}`
    );
    if (res?.data) {
      return res?.data;
    } else null;
  } catch (error) {
    console.log(error);
  }
};
