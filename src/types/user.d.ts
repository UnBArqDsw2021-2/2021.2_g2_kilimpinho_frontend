interface IUser {
  name: string;
  email: string;
  cpf: string;
}

interface ISignup extends IUser {
  password: string;
  confirmPassword?: string;
}

interface ISignin {
  email: string;
  password: string;
}
