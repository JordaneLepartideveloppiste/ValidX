 export class Access {
  constructor(
    id,
    name,
    validityDate,
    tokenAccess,
    columnsToReturn
  ) {
    this.id = id;
    this.name = name;
    this.validityDate = validityDate;
    this.tokenAccess = tokenAccess;
    this.columnsToReturn = columnsToReturn;
  }

  static newAccess() {
    return new Access(null, null, null, null, null);
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
  setValidityDate(validityDate) {
    this.validityDate = validityDate;
  }

  getValidDate() {
    return this.validDate;
  }
  setTokenAccess(tokenAccess) {
    this.tokenAccess = tokenAccess;
  }
  getTokenAccess() {
    return this.tokenAccess;
  }
  setColumnsToReturn(columnsToReturn) {
    this.columnsToReturn = columnsToReturn;
  }
  getColumnsToReturn() {
    return this.columnsToReturn;
  }
}
