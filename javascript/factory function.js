function factory(personname,age,address)
{
return {
    personname,
    age,
    isAlive:true,
    address,
    greeting()
    {
        console.log(`my name is ${this.personname} age is ${this.age}`);
    }
}
}

var person1= factory("ak",10,"salem");
person1.greeting();
var person2= factory("abi",13,"salem");
person1.greeting();
