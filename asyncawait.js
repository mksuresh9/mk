

console.log('asyncfun1');
console.log('asyncfun2');

const asyncfun3 = async ()=>{
    const loaduserdata= new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('loaded'), 2000)

    })

    const verifieddata = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('verified data'), 3000);
    });


    let result = await Promise.all([loaduserdata, verifieddata]);
       return result;
    /*let loaded  = await loaduserdata;
    console.log("loaduserdata");
    console.log("loaded");

    let verified=  await verifieddata;
    
    return verifieddata;*/
}

asyncfun3().then((i)=>console.log(i));

console.log('asyncfun4');
console.log('asyncfun5');