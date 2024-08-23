import API from "@/config/API";
import { IUser } from "@/types/AuthForms";

export const getUser = async () : Promise<IUser> => API.get("/user");