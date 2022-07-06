import { Annuaire } from "../../departments/annuaireDepartment/units/annuaire.unit";
import { Access } from "../../departments/annuaireDepartment/units/access.unit";

export interface AnnuaireRepositoryInterface {
  findById(id: string): Annuaire;
  findAllByProprietaire(proprietaireId: string): Annuaire[];
  create(annuaire: Annuaire): Annuaire;
  update(annuaire: Annuaire): Annuaire;
  removeById(id: string): void;
  createAccessForAnnuaire(id: string, access: Access): Access;
  updateAccess(access: Access): Access;
  removeAccess(accessId: string): void;
}
