import { api } from "@/services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

// TODO
export const signin = async (credentials: ISignin) => {
	try {
		const user = await api.post<{ token: string; user: IUser }>(
			"/auth/login",
			credentials,
		);

		console;
		console.log("UUUU", user?.data);
		return user?.data;
	} catch (err) {
		const error = err as AxiosError;
		throw new Error(error.response?.data);
	}
};

export const signup = async (userData: ISignup) => {
	try {
		const user = await api.post("/users", userData);
		toast.success("Sua conta foi cadastrada com sucesso");
		return user;
	} catch (err) {
		const error = err as AxiosError;
		throw new Error(error.response?.data);
	}
};

export const avaliation = async (userAvali: Avaliation) => {
	try {
		console.log("cucu", userAvali);
	} catch (err) {
		const error = err as AxiosError;
		throw new Error(error.response?.data);
	}
};
