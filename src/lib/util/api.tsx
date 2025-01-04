import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
const queryClient = new QueryClient();
const getPrdsData = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export { queryClient, getPrdsData };
