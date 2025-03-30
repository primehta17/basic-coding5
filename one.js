//prime number

let num=24;
if(num<=1){
    console.log("non prime");
}
for(let i=2;i*i<=num;i++){
    if(num[i]%i==0){
      console.log("prime");
    }
}