export class AbstractAnnuaireRepository {
  constructor() {
    if (this.constructor === AbstractAnnuaireRepository) {
      throw new TypeError(
        'Abstract class "AbstractAnnuaireRepository" cannot be instantiatied directly'
      );
    }
  }

  findById(id) {
    throw new Error("You must implement this function");
  }
  findAllByProprietaire(proprietaireId) {
    throw new Error("You must implement this function");
  }
  create(annuaire) {
    throw new Error("You must implement this function");
  }
  update(annuaire) {
    throw new Error("You must implement this function");
  }
  removeById(id) {
    throw new Error("You must implement this function");
  }
  createAccessForAnnuaire(id, access) {
    throw new Error("You must implement this function");
  }
  updateAccess(access) {
    throw new Error("You must implement this function");
  }
  removeAccessForAnnuaire(accessId) {
    throw new Error("You must implement this function");
  }
}
