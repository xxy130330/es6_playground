import $ from 'jquery';


class Person {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        //return 'Hello, my name is ' + this.name;
        return `Hello, my name is ${this.name}`;
    }

    sayGoodbye(){
        return `It's time for me to go.`;
    }
}

class SuperPerson extends Person {
    constructor(name){
        super(name);
    }

    superSayHi(){
        return `HI, MY NAME IS ${this.name}`;
    }

    sayHello(){
        // const container = $('<h1>', {
        //     text:super.sayHello()
        // });
        //$('#root').append(container);

        const container = document.createElement('h1');
        container.innerText = super.sayHello();
        document.getElementById('root').appendChild(container);


        //return 'It worked!'
    }
}


export default SuperPerson;