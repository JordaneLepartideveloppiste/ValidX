import { CustomerAccount } from "../../departments/paymentDepartment/units/customerAccount.unit"

export interface CustomerAccountRepositoryInterface {
  findByProprietaire(prorietaireId: string): CustomerAccount;

  create(customerAccount: CustomerAccount): CustomerAccount;
  update(customerAccount: CustomerAccount): CustomerAccount;
  removeById(id: string): void;
}
