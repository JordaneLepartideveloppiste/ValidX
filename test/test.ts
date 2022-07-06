import { Proprietaire } from "../core/departments/proprietaireDepartment/units/proprietaire.unit";
import { ProprietaireRepositoryTest } from "./repositoriesTest/proprietaireRepositoryTest";


const proprioRepo = new ProprietaireRepositoryTest();

const allProprios = ProprietaireRepositoryTest.findAll(0, 1);
proprioRepo.create();