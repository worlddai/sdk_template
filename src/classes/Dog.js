import Animal from "./Animal";

export default class Dog extends Animal{
    constructor(name) {
        super();
        this.name = name;
    }
   
    brake() {
        console.log('汪汪汪');
    }

};
