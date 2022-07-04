export class AbstractRecordRepository {
  constructor() {
    if (this.constructor === AbstractRecordRepository) {
      throw new TypeError(
        'Abstract class "AbstractRecordRepository" cannot be instantiatied directly'
      );
    }
  }

  findByProprietaire(prorietaireId) {
    throw new Error("You must implement this function");
  }
  findByAnnuaire(annuaireId) {
    throw new Error("You must implement this function");
  }

  create(record) {
    throw new Error("You must implement this function");
  }
}
