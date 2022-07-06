
 export class Access {
   id: string;
    name: string;
    validityDate: Date;
    tokenAccess: string;
    columnsToReturn: string[];
  constructor(
    id: string,
    name: string,
    validityDate: Date,
    tokenAccess: string,
    columnsToReturn: string[],
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
  setValidityDate(validityDate: Date) {
    this.validityDate = validityDate;
  }

  getValidDate() {
    return this.validityDate;
  }
  setTokenAccess(tokenAccess: string) {
    this.tokenAccess = tokenAccess;
  }
  getTokenAccess() {
    return this.tokenAccess;
  }
  setColumnsToReturn(columnsToReturn: string[]) {
    this.columnsToReturn = columnsToReturn;
  }
  getColumnsToReturn() {
    return this.columnsToReturn;
  }
}
