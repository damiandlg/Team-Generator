const Employee = require(library/employee.js)

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    officeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;