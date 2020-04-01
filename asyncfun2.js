
function fun(){
  return new Promise(resolve =>{
      setTimeout(()=>resolve('async function'),2000);
  });
};

let asyncCall = async ()=>{
    console.log('calling');

    let result = await fun();
     return result;
}

asyncCall().then(console.log);