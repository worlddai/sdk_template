import Dog from "./Dog";
import Friends from './Friends'
import 'fetch-polyfill'



function mix(...mixins) {
    class Mix {
      constructor() {
        for (let mixin of mixins) {
          copyProperties(this, new mixin()); // 拷贝实例属性
        }
      }
    }
  
    for (let mixin of mixins) {
      copyProperties(Mix, mixin); // 拷贝静态属性
      copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
  
    return Mix;
  }
  
  function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
      if ( key !== 'constructor'
        && key !== 'prototype'
        && key !== 'name'
      ) {
        let desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
      }
    }
  }

  class PoodleDog extends mix(Dog,Friends){
    constructor(name) {
        super();
        this.name = name;
        this.shareThing = "bone"
        new Promise((resove,reject)=>{
          setTimeout(function(){resove()},200)
        }).then(r=>{
          debugger;
        })
        fetch('http://www.baidu.com').then(r=>{
          debugger;
        })
    }
    brake() {
        console.log('喔喔喔');
    }
    share()
    {
        console.log('my own share')
    }
   

};


export default PoodleDog;