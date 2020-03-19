class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName () {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getInitials () {
        return `${this.name[0]}.${this.surname[0]}.`
    }
}

const me = new Person('Przemysław', 'Franczak');
const john = new Person('Jan', 'Nowak');

console.log(me.getFullName());
console.log(me.getInitials());

console.log(john.getFullName());
console.log(john.getInitials());
