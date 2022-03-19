export interface IUser {
  name: string;
  email: string;
  cpf: string;
}

export interface ISignup extends IUser {
  password: string;
  confirmPassword?: string;
}
