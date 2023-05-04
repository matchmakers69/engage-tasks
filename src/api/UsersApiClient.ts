import engageAxiosApi from "config/axios/EngageClient";
import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
  const res = await engageAxiosApi.get("/users");
  return res.data?.data;
};
