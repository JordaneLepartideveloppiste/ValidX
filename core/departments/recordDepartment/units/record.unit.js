export class Record {
  constructor(id, annuaireId, annuaireName, date, Ip, tokenAccess) {
    this.id = id;
    this.annuaireId = annuaireId;
    this.annuaireName = annuaireName;
    this.date = date;
    this.Ip = Ip;
    this.tokenAccess = tokenAccess;
  }

  static newRecord() {
    return new Record(null, null, null, null, null, null);
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  setAnnuaireId(annuaireId) {
    this.annuaireId = annuaireId;
  }

  getAnnuaireId() {
    return this.annuaireId;
  }
  setAnnuaireName(annuaireName) {
    this.annuaireName = annuaireName;
  }

  getAnnuaireName() {
    return this.annuaireName;
  }
  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }
  setIp(Ip) {
    this.Ip = Ip;
  }
  getIp() {
    return this.Ip;
  }
  setTokenAccess(tokenAccess) {
    this.tokenAccess = tokenAccess;
  }
  getTokenAccess() {
    return this.tokenAccess;
  }
}
