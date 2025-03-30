let arr=[4,33,23,33,2,33,4];
function duplicate(arr){
    let seen={};let dup=[];
    for(let i=0;i<arr.length;i++){
        let abc=arr[i];
        if(seen[abc]==undefined){
            seen[abc]=1;
        }else if(seen[abc]==1){
            seen[abc]++;
            dup.push(abc);
        }
       
    }
    return dup;
}

console.log(duplicate(arr))