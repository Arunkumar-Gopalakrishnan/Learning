function printnumber(a)
    {
        let value=a;
        console.log(value);
        value = value-1;
        if(value<20 && value>0)
            {
                printnumber(value);
            }    
    }
printnumber(10);
// modified
function printnumber(a)
    {
       a;
        console.log(a);
        a = a-1;
        if(a<20 && a>0)
            {
                printnumber(a);
            }    
    }
printnumber(10);
// factorial
function factorials(n)
    {
        debugger
        if(n===0)
            {
                return "not valued number";
            }
        else
        {
        return n * factorial(n-1);
        }
    }
    // The function above is called an anonymous function.

    let x=function sqrt(num){return num*num};
undefined
x= function sqrt(num){return num*num};
x(99)
9801
let y=x(22);
y
484
// The function above is called an anonymous function.