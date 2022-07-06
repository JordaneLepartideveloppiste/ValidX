export class Record {
  id: string;
   annuaireId: string;
    annuaireName: string; 
    date: Date; 
    Ip: string; 
    tokenAccess: string;
  constructor(id: string, annuaireId: string, annuaireName: string, date: Date, Ip: string, tokenAccess: string) {
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

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  setAnnuaireId(annuaireId: string) {
    this.annuaireId = annuaireId;
  }

  getAnnuaireId() {
    return this.annuaireId;
  }
  setAnnuaireName(annuaireName: string) {
    this.annuaireName = annuaireName;
  }

  getAnnuaireName() {
    return this.annuaireName;
  }
  setDate(date: Date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }
  setIp(Ip: string) {
    this.Ip = Ip;
  }
  getIp() {
    return this.Ip;
  }
  setTokenAccess(tokenAccess: string) {
    this.tokenAccess = tokenAccess;
  }
  getTokenAccess() {
    return this.tokenAccess;
  }
}
