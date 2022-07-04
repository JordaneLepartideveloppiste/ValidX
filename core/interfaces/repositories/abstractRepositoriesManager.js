export class AbstractRepositoriesManager {
    constructor() {
        if (this.constructor === AbstractRepositoriesManager){
            throw new TypeError('Abstract class "AbstractRepositoriesManager" cannot be instantiatied directly') ;
            }
        }
    getProprietaireRepository() {
        throw new Error("You must implement this function");
    }
    getAnnuaireRepository() {
        throw new Error("You must implement this function");
    }
    getCustomerAccountRepository() {
        throw new Error("You must implement this function");
    }
    getRecordRepository() {
        throw new Error("You must implement this function");
    }
}

    
