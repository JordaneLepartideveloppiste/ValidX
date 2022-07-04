export class AbstractCustomerAccountRepository {
  constructor() {
    if (this.constructor === AbstractCustomerAccountRepository) {
      throw new TypeError(
        'Abstract class "AbstractCustomerAccountRepository" cannot be instantiatied directly'
      );
    }
  }

  findByProprietaire(prorietaireId) {
    throw new Error("You must implement this function");
  }
  
  create(customerAccount) {
    throw new Error("You must implement this function");
  }
  update(customerAccount) {
    throw new Error("You must implement this function");
  }
  removeById(id) {
    throw new Error("You must implement this function");
  }
}
