import Dog from "./Dog";

export default class PoodleDog extends Dog{
    constructor(name) {
         super();
        this.name = name;
    }
    brake() {
        console.log('喔喔喔');
    }

};
