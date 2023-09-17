import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_APP_STRIPE_DEV_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_APP_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
