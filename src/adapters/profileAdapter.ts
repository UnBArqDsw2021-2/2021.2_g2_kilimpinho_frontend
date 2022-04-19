import { registerExpenditure } from "@/services/expenditureService";

interface EditProfile {
  updates: Record<'chave' | 'valor', string>[]
}
export class ProfileAdapter {
  userInfo: ISignup;
  constructor(userInfo: ISignup) {
    this.userInfo = userInfo;
  }


  formatedProfileToEdition(): EditProfile {
    console.log (Object.entries(this.userInfo))

    const updateAdapted = Object.entries(this.userInfo).map(user => ({chave: user[0], valor: user[1]}))

    console.log(updateAdapted)
    return {
        updates: [  
            ...updateAdapted  
        ]
    };
  }
}
