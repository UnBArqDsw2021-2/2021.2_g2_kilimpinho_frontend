import { api } from "./api";

export const registerExpenditure = async (data: IExpenditure) => {
  try {
    const expenditure = await api.post<IExpenditure>("/expenditure", data);

    return expenditure?.data;
  } catch (err) {
    console.log(err);
    // throw new Error(err as string);
  }
};

export const getExpenditures = async () => {
  try {
    const expenditure = await api.get<IExpenditure[]>("/expenditure");

    const monthArray: number[] = [];

    expenditure.data.forEach((data) => {
      monthArray[new Date(data.date).getMonth()] =
        (monthArray[new Date(data.date).getMonth()] || 0) + data.amount;
    });
    return monthArray;
  } catch (err) {
    console.log(err);
    // throw new Error(err as string);
  }
};

export const getExpendtiresByMonth = async (data: string) => {
  console.log(data);
  try {
    const expenditure = await api.get<IExpenditure[]>(
      `/expenditure?filtros=${data}`,
      {}
    );

    return expenditure.data;
  } catch (err) {
    console.log(err);
    throw new Error(err as string);
  }
};
