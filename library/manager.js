class Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;