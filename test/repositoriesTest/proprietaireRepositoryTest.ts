import { Proprietaire } from "../../core/departments/proprietaireDepartment/units/proprietaire.unit";
import { ProprietaireRepositoryInterface } from "../../core/interfaces/repositories/proprietaireInterface.repository";

export class ProprietaireRepositoryTest implements ProprietaireRepositoryInterface {
  rawdata = [
    { id: "1", name: "Jean", email: "jeanneymar@gmail.com" },
    { id: "2", name: "Jeanne", email: "jeanne.marie@gmail.com" },
    { id: "3", name: "Jeans", email: "levis@gmail.com" },
  ];
  constructor() {}
  findById(id: string): Proprietaire {
    for (let i = 0; i < this.rawdata.length; i++) {
      if (this.rawdata[i].id === id) {
        return new Proprietaire(
          this.rawdata[i].id,
          this.rawdata[i].name,
          this.rawdata[i].email
        );
      }
    }
    return undefined;
  }
  findAll(limit: number, page: number): Proprietaire[] {
    page = this.rawdata.length / limit;
    const indexStart: number = limit * page;
    const indexEnd: number = Math.min(this.rawdata.length, indexStart + limit);
    const filteredProprietaires: Proprietaire[] = [];
    if (limit >= this.rawdata.length) {
      for (let i = 0; i < this.rawdata.length; i++) {
        filteredProprietaires.push(
            new Proprietaire(
          this.rawdata[i].id,
          this.rawdata[i].name,
          this.rawdata[i].email
        ));
      }
    } else {
        const rawdataFiltered = this.rawdata.slice(indexStart, indexEnd);
      for (let i = 0; i < rawdataFiltered.length; i++) {
        filteredProprietaires.push(
          new Proprietaire(
            rawdataFiltered[i].id,
            rawdataFiltered[i].name,
            rawdataFiltered[i].email
          )
        );
      }
    }
    return filteredProprietaires;
  }
  create(proprietaire: Proprietaire): Proprietaire {
   
      proprietaire.id = this.rawdata.length.toString();
    const dic = {"id": proprietaire.id, "name" : proprietaire.name, "email" : proprietaire.email};
    this.rawdata.push(dic);
    return proprietaire;
  }
  update(proprietaire: Proprietaire): Proprietaire {
      for (let i= 0; i < this.rawdata.length; i++) {
           if (this.rawdata[i].id === proprietaire.id) {
            this.rawdata[i].name = proprietaire.name;
            this.rawdata[i].email = proprietaire.email;
            return proprietaire;
           }
      }
      return undefined;
  }
  removeById(id: string): void {
    for (let i = 0; i < this.rawdata.length; i++) {
      if (this.rawdata[i].id === id) {
        delete this.rawdata[i];
        return
      }
    }
  }
}