export class Proprietaire  {
    id: string; 
    name: string; 
    email: string;
    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static newProprietaire() {
        return new Proprietaire(null, null, null)
    }

    setId(id: string) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }
    

}