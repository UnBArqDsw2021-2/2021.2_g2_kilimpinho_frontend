import { api } from "./api";

export const registerExpenditure = async (data: IExpenditure) => {
  try {
    const expenditure = await api.post<IExpenditure>("/expenditure", data);

    return expenditure?.data;
  } catch (err) {
    console.log(err);
    throw new Error(err as string);
  }
};
