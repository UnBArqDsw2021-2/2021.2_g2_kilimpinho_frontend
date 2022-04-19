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
	ratingBy: string | undefined;
	rating: number;
	comment: string;
}

interface ILavagem{
  UserId:string;
  marca: string;
  modelo: string;
  placa: string;
  cor: string;
  polimento: boolean;
  limpeza: boolean;
  cheirinho: boolean;
}
