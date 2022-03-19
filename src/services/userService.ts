import { ISignup } from './../types/user';
import { api } from '@/services/api';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// TODO
export const signin = () => {};

export const signup = async (userData: ISignup) => {
  try {
    const user = await api.post('/users', userData);
    toast.success('Sua conta foi cadastrada com sucesso');
    return user;
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.response?.data);
  }
};
