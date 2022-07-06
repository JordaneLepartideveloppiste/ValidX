import {Record} from "../../departments/recordDepartment/units/record.unit"

export interface RecordRepositoryInterface {
  

  findByProprietaire(prorietaireId: string): Record[];
  findByAnnuaire(annuaireId: string): Record[];

  create(record: Record): Record;
}
