const separateConsecutiveAscending=()=>{
    let str=document.getElementById('input-field').value;
    let result = "";
    let previous=0;
    for(let i of str){
        if(parseInt(i)-previous===1){
            result+=i
        }
        else{
            result+=" "+i
        }
        previous=parseInt(i);
    }
    document.getElementById('display').textContent=`Result : ${result}`;
}

