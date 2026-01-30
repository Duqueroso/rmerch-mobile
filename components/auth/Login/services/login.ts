import axios from "axios";
export const login = async (data: any) => {
  const res = await axios.post("https://rmerchback.vercel.app/api/login", data);
  return res;
};
