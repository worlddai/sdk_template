import Animal from "./Animal";

export default class Cat extends Animal{
    constructor(name) {
        super();
        this.name = name;
    }
   
    brake() {
        console.log('miao miao miao');
    }

};
