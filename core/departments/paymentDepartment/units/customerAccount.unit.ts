export class CustomerAccount {
  id: string;
   proprietaireName: string;
    proprietaireId: string;
     typeAccount: string;
      isActivate: boolean;
      
  constructor(id: string, proprietaireName: string, proprietaireId: string, typeAccount: string, isActivate: boolean) {
    this.id = id;
    this.proprietaireName = proprietaireName;
    this.proprietaireId = proprietaireId;
    this.typeAccount = typeAccount;
    this.isActivate = isActivate;
  }

  static newCustomerAccount() {
    return new CustomerAccount(null, null, null, null, null);
  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  setProprietaireName(proprietaireName: string) {
    this.proprietaireName = proprietaireName;
  }

  getProprietaireName() {
    return this.proprietaireName;
  }
  setProprietaireId(proprietaireId: string) {
    this.proprietaireId = proprietaireId;
  }

  getProprietaireId() {
    return this.proprietaireId;
  }

  setTypeAccount(typeAccount: string) {
    this.typeAccount = typeAccount;
  }
  getTypeAccount() {
    return this.typeAccount;
  }
  setIsActivate(isActivate: boolean) {
    this.isActivate = isActivate;
  }
  getIsActivate() {
    return this.isActivate;
  }
}
