//prime number

let num=15;
function primenum(num){
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
          return false;
          break;
         
        }
    }return true;
}
primenum(num);

function primeprint(num){
    for(let i=2;i<=num;i++){
        if(primenum(i)){
            console.log(i)
        }
    }

}
console.log( primeprint(num))
