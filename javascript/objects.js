var object={
    name:"Arun",
    age:22,
collegue:{
    name:"Bhuvan",
    name:"rahil",
},
greet:function(){console.log(` Hi this is ${this.name} my age is ${this.age} `)},
}
object.name,object.age,object.collegue.name,object.greet();
let peopleDetails={
    name:"Arunkumar",
    DOB:"4.0.1999",
    address:"salem bus stand",
    wife:"samantha",
    parents:{
father:"gopalakrishnan",
mother:"valliammal",
samy:"valliappan",
    }
};
console.log(peopleDetails.DOB);
console.log(peopleDetails.parents.mother);