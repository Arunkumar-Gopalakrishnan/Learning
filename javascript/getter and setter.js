let student={
    name:'ak',
    class:'fifth',
    get rank()
        {
            return this.name;
        }
};
// student.rank; compile success
// student.rank(); error
// getter is used to access the data from an object as a property

// setter
let students={
    name:'ak',
    class:'fifth',
    set changes(changeName)
        {
            this.name=changeName;
        }
};
undefined
students.changess
undefined
students.changess('arun');
// VM937:1 Uncaught TypeError: students.changess is not a function
//     at <anonymous>:1:9
// (anonymous) @ VM937:1
// students.changess.'arun';
// VM959:1 Uncaught SyntaxError: Unexpected string
students.changess='arun';
// 'arun'
students.name;
// 'arun'
students.class='8th';
// '8th'
students.class;
// '8th'