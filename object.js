let person = {
    id: 101,
    name: "Vijay",
    designation: "Fullstack Developer",
    single: true,
    address: {
        city: "Chennai",
        pin: 600097,
        state: "Tamil Nadu"
    },
    details: function(){
        return `ID: ${this.id} Name: ${this.name} Designation: ${this.designation} Single: ${this.single} City: ${this.address.city} State: ${this.address.state} Pin Code: ${this.address.pin}`

    }
}
console.log(`ID: ${person.id} Name: ${person.name} Designation: ${person.designation} Single: ${person.single} City: ${person.address.city} State: ${person.address.state} Pin Code: ${person.address.pin}`);

console.log(person.details());