import { CustomerAccount } from "../../core/departments/paymentDepartment/units/customerAccount.unit";
import { Proprietaire } from "../../core/departments/proprietaireDepartment/units/proprietaire.unit";
import { CustomerAccountRepositoryInterface } from "../../core/interfaces/repositories/customerAccountInterface.repository";


export class CustomerAccountRepositoryTest
  implements CustomerAccountRepositoryInterface
{
  rawdata = [
    {
      id: "1",
      proprietaireName: "Jean",
      proprietaireId: "1",
      typeAccount: "free",
      isActivate: true,
    },
    {
      id: "2",
      proprietaireName: "Jeanne",
      proprietaireId: "2",
      typeAccount: "free",
      isActivate: true,
    },
    {
      id: "3",
      proprietaireName: "Jeans",
      proprietaireId: "3",
      typeAccount: "free",
      isActivate: true,
    },
  ];
  constructor() {}

  findByProprietaire(proprietaire: Proprietaire): CustomerAccount {}
  create(customerAccount: CustomerAccount): CustomerAccount {}
  update(customerAccount: CustomerAccount): CustomerAccount {}
  removeById(id: string): void {
    for (let i = 0; i < this.rawdata.length; i++) {
      if (this.rawdata[i].id === id) {
        delete this.rawdata[i];
        return;
      }
    }
  }
}