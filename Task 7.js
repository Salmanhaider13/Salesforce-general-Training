document.getElementById('submit').addEventListener('click',(event)=>{
    event.preventDefault();
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var text = event.target.result;
        words= text.split('\r\n');
        for(let word of words){
            let result=recursive(word);
            let str=word+" -> "+"{"+result.char+" : "+result.value+"}<br>";
            document.getElementById('display').innerHTML+=str;
        }
    }
    reader.readAsText(file);
});


const recursive=(word,index=0,seen=new Map())=>{
    if(seen.get(word[index])){
        let char=word[index];
        let value=[seen.get(word[index]),index];
        return {char,value};
    }
    else{
        seen.set(word[index],index);
    }
    return recursive(word,++index,seen);
}