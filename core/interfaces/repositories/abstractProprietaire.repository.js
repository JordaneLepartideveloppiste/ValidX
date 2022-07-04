export class AbstractProprietaireRepository {
  constructor() {
    if (this.constructor === AbstractProprietaireRepository) {
      throw new TypeError(
        'Abstract class "AbstractProprietaireRepository" cannot be instantiatied directly'
      );
    }
  }

  findById(id) {
    throw new Error("You must implement this function");
  }
  findAll() {
    throw new Error("You must implement this function");
  }
  create(proprietaire) {
    throw new Error("You must implement this function");
  }
  update(proprietaire) {
    throw new Error("You must implement this function");
  }
  removeById(id) {
    throw new Error("You must implement this function");
  }
}