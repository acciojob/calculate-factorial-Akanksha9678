//your JS code here. If required.
let input=parseInt(prompt("enter number : "))

let fact=1;
for(let i=input; i>0;i--){
	fact=fact*i;
}
alert(`The factorial of ${input} is ${fact}`)