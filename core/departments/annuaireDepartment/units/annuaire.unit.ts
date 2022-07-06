export class Annuaire {
  id: string;
   name: string;
    proprietaireId: string;
     proprietaireName: string;
      source: string;
       urlToken: string;
        nameColumns: string[];
         columnsToCrypt: string[]; 
         columnsToCheck: string[];
         accessArray: string[];
  constructor(id: string, name: string, proprietaireId: string, proprietaireName: string, source: string, urlToken: string, nameColumns: string[], columnsToCrypt: string[], columnsToCheck: string[] ) {
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

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setProprietaireId(proprietaireId: string) {
    this.proprietaireId = proprietaireId;
  }

  getProprietaireId() {
    return this.proprietaireId;
  }
  setProprietaireName(proprietaireName: string) {
    this.proprietaireName = proprietaireName;
  }
  getProprietaireName() {
    return this.proprietaireName;
  }
  setSource(source: string) {
    this.source = source;
  }
  getSource() {
    return this.source;
  }
  setUrlToken(urlToken: string) {
    this.urlToken = urlToken;
  }
  getUrlToken() {
    return this.urlToken;
  }
  setNameColumns(nameColumns: string[]) {
    this.nameColumns = nameColumns;
  }
  getNameColumns() {
    return this.nameColumns;
  }
  setColumnsToCrypt(columnsToCrypt: string[]) {
    this.columnsToCrypt = columnsToCrypt;
  }
  getColumnsToCrypt() {
    return this.columnsToCrypt;
  }
  setColumnsToCheck(columnsToCheck: string[]) {
    this.columnsToCheck = columnsToCheck;
  }
  getColumnsToCheck() {
    return this.columnsToCheck;
  }
  setAccessArray(accessArray: string[]) {
    this.accessArray = accessArray;
  }
  getAccessArray() {
    return this.accessArray;
  }
}