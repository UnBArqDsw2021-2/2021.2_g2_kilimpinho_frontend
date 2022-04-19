interface IUser {
  name: string;
  email: string;
  cpf: string;
  isAdmin: boolean;
  token: string;
  _id: string;
}

interface ISignup extends Partial<IUser> {
  password: string;
  confirmPassword?: string;
}

interface ISignin {
  email: string;
  password: string;
}
