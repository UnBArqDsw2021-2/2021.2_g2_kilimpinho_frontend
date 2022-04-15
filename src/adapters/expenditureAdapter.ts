import { registerExpenditure } from "@/services/expenditureService";

export class ExpenditureAdapter {
  expenditure: IExpenditure;
  constructor(expenditure: IExpenditure) {
    this.expenditure = expenditure;
  }

  addNewExpenditure() {
    const formatedExpenditure = this.formatedExpenditure();
    registerExpenditure(formatedExpenditure);
  }
  formatedExpenditure(): IExpenditure {
    return {
      amount:
        parseInt(
          (this.expenditure.amount as unknown as string).replace(/\D/gi, ""),
          10
        ) / 100,
      date: new Date(
        (this.expenditure.date as string).split("/").reverse().join("-") +
          " 00:00:00"
      ),
      title: this.expenditure.title,
      description: this.expenditure.description,
      isFixed: this.expenditure.isFixed,
    };
  }
}
