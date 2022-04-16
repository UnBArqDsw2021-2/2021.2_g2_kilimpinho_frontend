interface IUser {
  name: string;
  email: string;
  cpf: string;
  isAdmin: boolean;
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

interface Avaliation {
  stars: number;
  avaliationText: string;
}