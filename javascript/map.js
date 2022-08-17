let sampleArray=[22,33,4,55,222];

sampleArray.map(function sourceroot(x)
{
return x*x;
});

sampleArray.map(function sourceroot(x)
{
return x.toString(2);
});
// using arrow functions
let output=sampleArray.map((x)=> x.toString(2));