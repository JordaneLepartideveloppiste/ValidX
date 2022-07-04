export class CustomerAccount {
  constructor(id, proprietaireName, proprietaireId, typeAccount, isActivate) {
    this.id = id;
    this.proprietaireName = proprietaireName;
    this.proprietaireId = proprietaireId;
    this.typeAccount = typeAccount;
    this.isActivate = isActivate;
  }

  static newCustomerAccount() {
    return new CustomerAccount(null, null, null, null, null);
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  setProprietaireName(proprietaireName) {
    this.proprietaireName = proprietaireName;
  }

  getProprietaireName() {
    return this.proprietaireName;
  }
  setProprietaireId(proprietaireId) {
    this.proprietaireId = proprietaireId;
  }

  getProprietaireId() {
    return this.proprietaireId;
  }

  setTypeAccount(typeAccount) {
    this.typeAccount = typeAccount;
  }
  getTypeAccount() {
    return this.typeAccount;
  }
  setIsActivate(isActivate) {
    this.isActivate = isActivate;
  }
  getIsActivate() {
    return this.isActivate;
  }
}
