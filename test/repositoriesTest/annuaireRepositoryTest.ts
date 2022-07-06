import { Access } from "../../core/departments/annuaireDepartment/units/access.unit";
import { Annuaire } from "../../core/departments/annuaireDepartment/units/annuaire.unit";
import { Proprietaire } from "../../core/departments/proprietaireDepartment/units/proprietaire.unit";
import { AnnuaireRepositoryInterface } from "../../core/interfaces/repositories/annuaireInterface.repository";


export class AnnuaireRepositoryTest implements AnnuaireRepositoryInterface {
  rawdata = [
    {
      id: "1",
      name: "les fruits",
      proprietaireId: "1",
      proprietaireName: "Jean",
      source: "local",
      urlToken: "9jhK0lnRt471ns3D",
      nameColumns: ["Identifiant", "Prénom", "Nom", "Statut", "Email"],
      columnsToCrypt: ["Prénom", "Nom", "Email"],
      columnsToCheck: ["Identifiant", "Email"],
      accessArray: [
        {
          id: "1",
          name: "PrimeursFruits",
          validityDate: "2022/12/31",
          tokenAccess: "2rFut659hvXS5za8T",
          columnsToReturn: [],
        },
        {
          id: "2",
          name: "SupermarchésFruits",
          validityDate: "2022/12/31",
          tokenAccess: "2rFut659hvXS5za8U",
          columnsToReturn: ["Email"],
        },
      ],
    },
    {
      id: "2",
      name: "les légumes",
      proprietaireId: "1",
      proprietaireName: "Jean",
      source: "local",
      urlToken: "9jhK0lRnt8qz5h98",
      nameColumns: ["Identifiant", "Prénom", "Nom", "Statut", "Email"],
      columnsToCrypt: ["Prénom", "Nom", "Email", "Statut"],
      columnsToCheck: ["Identifiant"],
      accessArray: [
        {
          id: "3",
          name: "PrimeursLégumes",
          validityDate: "2022/12/31",
          tokenAccess: "2rFut659hvXS5za8V",
          columnsToReturn: ["Statut"],
        },
        {
          id: "4",
          name: "SupermarchésLégumes",
          validityDate: "2022/12/31",
          tokenAccess: "2rFut659hvXS5za8W",
          columnsToReturn: [],
        },
      ],
    },
    {
      id: "3",
      name: "les fruits à coque",
      proprietaireId: "1",
      proprietaireName: "Jean",
      source: "local",
      urlToken: "9jhK0lyGj9l541Dv",
      nameColumns: ["Identifiant", "Prénom", "Nom", "Statut", "Email"],
      columnsToCrypt: ["Prénom", "Nom", "Email", "Statut"],
      columnsToCheck: ["Identifiant"],
      accessArray: [
        {
          id: "5",
          name: "PrimeursCoque",
          validityDate: "2022/12/31",
          tokenAccess: "2rFut659hvXS5za8Y",
          columnsToReturn: ["Identifiant", "Email", "Prénom", "Nom"],
        },
        {
          id: "6",
          name: "SupermarchésCoque",
          validityDate: "2022/12/31",
          tokenAccess: "2rFut659hvXS5za8Z",
          columnsToReturn: ["Prénom", "Nom"],
        },
      ],
    },
  ];
  constructor() {}
  findById(id: string): Annuaire {
      for (let i = 0; i < this.rawdata.length; i++) {
          for (let y = 0; y <this.rawdata[i].accessArray.length; y++) {
        if (this.rawdata[i].id === id) {
          return new Annuaire(
            this.rawdata[i].id,
            this.rawdata[i].name,
            this.rawdata[i].proprietaireId,
            this.rawdata[i].proprietaireName,
            this.rawdata[i].source,
            this.rawdata[i].urlToken,
            this.rawdata[i].nameColumns,
            this.rawdata[i].columnsToCrypt,
            this.rawdata[i].columnsToCheck,
          
          )
        }
      }
     
  }
   return undefined;
}

  findAllByProprietaire(proprietaire: Proprietaire): Annuaire[] {

      for (let i = 0; i < this.rawdata.length; i++) {
      if (this.rawdata[i].proprietaireId === proprietaire.id) {
        return new Annuaire(
            this.rawdata[i].id,
            this.rawdata[i].name,
            this.rawdata[i].proprietaireId,
            this.rawdata[i].proprietaireName,
            this.rawdata[i].source,
            this.rawdata[i].urlToken,
            this.rawdata[i].nameColumns,
            this.rawdata[i].columnsToCrypt,
            this.rawdata[i].columnsToCheck,
        );
      }
    }
    return undefined;
  }

  removeById(id: string): void {
      for (let i = 0; i < this.rawdata.length; i++) {
        if (this.rawdata[i].id === id) {
          delete this.rawdata[i];
          return;
        }
      }
  }

  create(annuaire: Annuaire): Annuaire {
      annuaire.id = this.rawdata.length.toString();

      // for (let i=0; i < annuaire.nameColumns.length; i++) { nameColumns.push(annuaire.nameColumns[i]) }
      
    const dic = {
        "id": annuaire.id, 
        "name" : annuaire.name, 
        "proprietaireId" : annuaire.proprietaireId,
        "proprietaireName" : annuaire.proprietaireName,
        "source" : annuaire.source,
        "urlToken" : annuaire.urlToken,
        "nameColumns" : annuaire.nameColumns ,
        "columnsToCrypt" : annuaire.columnsToCrypt,
        "columnsToCheck" : annuaire.columnsToCheck,
        "accessArray": annuaire.accessArray

    };
    this.rawdata.push(dic);
    return annuaire;
  }


  update(annuaire: Annuaire): Annuaire {}

  
  createAccessForAnnuaire(id: string, access: Access): Access {}
  updateAccess(access: Access): Access {}
  removeAccess(accessId: string): void {}
}

function findAllByProprietaire(Proprietaire: typeof Proprietaire, proprietaireId: any) {
    throw new Error("Function not implemented.");
}
function findAllByProprietaire(Proprietaire: typeof Proprietaire, proprietaireId: any) {
    throw new Error("Function not implemented.");
}

