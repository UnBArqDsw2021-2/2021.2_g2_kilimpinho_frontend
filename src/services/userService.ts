import { api } from "@/services/api";
import { ProfileAdapter } from "adapters/profileAdapter";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const signin = async (credentials: ISignin) => {
  try {
    const user = await api.post<{ token: string; user: IUser }>(
      "/auth/login",
      credentials
    );

    return user?.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const signup = async (userData: ISignup) => {
  try {
    const user = await api.post("/user", userData);
    toast.success("Sua conta foi cadastrada com sucesso");
    return user;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
};

export const updateProfile = async (userData: ISignup, token: string) => {

  const profile = new ProfileAdapter(userData)
  const newData = profile.formatedProfileToEdition()
  try {
    const user = await api.patch("/user", newData, {
      headers: {
        Authorization: `Bearer ${token!}`
      },
    });
    toast.success("Seus dados foram alterados com sucesso");
    return user;
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.response?.data);
  }
};
