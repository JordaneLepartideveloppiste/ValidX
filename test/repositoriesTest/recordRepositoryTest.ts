import { Annuaire } from "../../core/departments/annuaireDepartment/units/annuaire.unit";
import { Proprietaire } from "../../core/departments/proprietaireDepartment/units/proprietaire.unit";
import { Record } from "../../core/departments/recordDepartment/units/record.unit";
import { RecordRepositoryInterface } from "../../core/interfaces/repositories/recordInterface.repository";



export class RecordRepositoryTest implements RecordRepositoryInterface {
  rawdata = [
    { id: "1", annuaireId: "1", annuaireName: "les fruits", date: "2021/09/08", Ip: ":4245-8745", tokenAccess: "2Rek56fD9@ZsnB" },
    { id: "2", annuaireId: "1", annuaireName: "les fruits", date: "2021/09/08", Ip: ":4245-8745", tokenAccess: "2Rek56fD9@ZsnC" },
    { id: "3", annuaireId: "2", annuaireName: "les légumes", date: "2021/10/08", Ip: ":4245-8745", tokenAccess: "2Rek56fD9@ZsnD" },
   
  ];
  constructor() {}

  findByProprietaire(proprietaire: Proprietaire): Record[] {}
  findByAnnuaire(annuaire: Annuaire): Record[] {}
  create(record: Record):Record {}
}