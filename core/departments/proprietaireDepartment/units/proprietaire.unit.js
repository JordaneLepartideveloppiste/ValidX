export class Proprietaire  {
    constructor(id, name, email, hashPassword) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hashpassword = hashPassword;
    }

    static newProprietaire() {
        return new Proprietaire(null, null, null, null)
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }
    setHashPassword(hashPassword) {
        this.hashPassword = hashPassword;
    }

    getHashPassword() {
        return this.hashPassword;
    }

}