import { ProprietaireRepositoryInterface } from "./proprietaireInterface.repository"
import { AnnuaireRepositoryInterface } from "./annuaireInterface.repository"


import { CustomerAccountRepositoryInterface } from "./customerAccountInterface.repository";
import { RecordRepositoryInterface } from "./recordInterface.repository";

export interface RepositoriesManagerInterface {
   
    getProprietaireRepository(): ProprietaireRepositoryInterface; 
    getAnnuaireRepository(): AnnuaireRepositoryInterface; 
    getCustomerAccountRepository(): CustomerAccountRepositoryInterface
    getRecordRepository(): RecordRepositoryInterface 
}

    
