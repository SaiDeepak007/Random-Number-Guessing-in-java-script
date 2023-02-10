
var a=Math.random()
a=a*100;
a=Math.round(a)
// console.log(a)
var b=100
do{
  c=prompt("Guess The Number");
  c=Number.parseInt(c)
  console.log(c)
  if(c<a)
     console.log("%d is lesser",c)
  else if(c>a)
    console.log("%d is greater",c)
  else
    console.log("c is the correct guess and ur score is %d",b)
     b--;
}while(c!=a);
