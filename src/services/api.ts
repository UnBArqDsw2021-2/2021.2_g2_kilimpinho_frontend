import { toast } from 'react-toastify';
import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NODE_API}/api`,
});


const errorResponseHandler = (error: any) => {
  if (error.response) {
    if (typeof error.response.data?.message === 'string') {
      toast.error(error.response.data?.message);
      return Promise.reject(error.response.data?.message);
    }

    return Promise.reject(new Error('Ocorreu um erro'));
  }
  if (error.request) {
    if (typeof error.request.response?.error === 'string')
      return Promise.reject(error.request.response.error);

    return Promise.reject(new Error('Ocorreu um erro'));
  }
  return Promise.reject(error.message);
};

api.interceptors.response.use((response) => response, errorResponseHandler);
