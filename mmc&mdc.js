function mmc(...values){
    const val = values.length ? values.flat(Infinity) : this;
    if(!val.length || val.some((v) => v%1 || isNaN(v))){
        return "Insira apenas numeros validos";
    }
    for(let max = Math.max(...val), i = max; !val.every((v)=>i%v === 0); i+=max );
    return i;
}

function mdc(...values){
    const val = values.length ? values.flat(Infinity) : this;
    if(!val.length || val.some((v) => v%1 || isNaN(v))){
        return "Insira apenas numeros validos";
    }
    val.sort((a,b)=>b-a);
    let i = val.reduce((a,v)=>{
        while(v){
            [a,v] = [v, a%v];
        }
        return a;
    })
    return i;
}

Array.prototype.mmc = mmc;
Array.prototype.mdc = mdc;
