import { Proprietaire } from "../../departments/proprietaireDepartment/units/proprietaire.unit";
export interface ProprietaireRepositoryInterface {
  

  findById(id: string): Proprietaire; 
  findAll(limit: number, page: number): Proprietaire[]; 
  create(proprietaire: Proprietaire): Proprietaire; 
  update(proprietaire: Proprietaire): Proprietaire;
  removeById(id: string): void;
}