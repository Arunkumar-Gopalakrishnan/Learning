function Commondata(emp_name,emp_no)
{
 this.emp_name=emp_name;
 this.emp_no=emp_no;
 this.greetings=function()
 {
    console.log(emp_name,emp_no);
 }
};
let empolyee1= new Commondata("Arun",10);
empolyee1.greetings();
let empolyee2= new Commondata("Arunk",210);
empolyee2.greetings();
empolyee2.gender="male";
// main usage of constructor to create an object

