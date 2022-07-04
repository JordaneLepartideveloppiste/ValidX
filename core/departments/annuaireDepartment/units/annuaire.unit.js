export class Annuaire {
  constructor(id, name, proprietaireId, proprietaireName, source, urlToken, nameColumns, columnsToCrypt, columnsToCheck ) {
    this.id = id;
    this.name = name;
    this.proprietaireId = proprietaireId;
    this.proprietaireName = proprietaireName;
    this.source = source;
    this.urlToken = urlToken;
    this.nameColumns = nameColumns;
    this.columnsToCrypt= columnsToCrypt;
    this.columnsToCheck= columnsToCheck;
    this.accessArray = [];
  }

  static newAnnuaire() {
    return new Annuaire(null, null, null, null, null, null, null, null, null);
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setProprietaireId(proprietaireId) {
    this.proprietaireId = proprietaireId;
  }

  getProprietaireId() {
    return this.proprietaireId;
  }
  setProprietaireName(proprietaireName) {
    this.proprietaireName = proprietaireName;
  }
  getProprietaireName() {
    return this.proprietaireName;
  }
  setSource(source) {
    this.source = source;
  }
  getSource() {
    return this.source;
  }
  setUrlToken(urlToken) {
    this.urlToken = urlToken;
  }
  getUrlToken() {
    return this.urlToken;
  }
  setNameColumns(nameColumns) {
    this.nameColumns = nameColumns;
  }
  getNameColumns() {
    return this.nameColumns;
  }
  setColumnsToCrypt(columnsToCrypt) {
    this.columnsToCrypt = columnsToCrypt;
  }
  getColumnsToCrypt() {
    return this.columnsToCrypt;
  }
  setColumnsToCheck(columnsToCheck) {
    this.columnsToCheck = columnsToCheck;
  }
  getColumnsToCheck() {
    return this.columnsToCheck;
  }
  setAccessArray(accessArray) {
    this.accessArray = accessArray;
  }
  getAccessArray() {
    return this.accessArray;
  }
}