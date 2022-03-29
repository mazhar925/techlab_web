
const payment = true;
const marks = 85;

function enroll(){
    console.log(`Payment is processing...`);

    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (payment){
                resolve `Your Payment Done`;
            }
            else{
                reject `Payment Failed`;
            }
        }, 2000)

    })
}


function progress(){
    console.log(`Course is on progress...`);

    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (marks>=80){
                resolve `You will get the certificate`;
            }
            else{
                reject `Alash! You got low marks.`;
            }
        }, 3000)

    })
}


function getCertificate(){
    console.log(`Certificate is processing...`);

    let promise = new Promise(function(resolve){
        setTimeout(function(){
                resolve `Congratulations`;
        }, 1000)

    })
}

async function course(){
   try{
    await enroll();
    await progress();
    let message = await getCertificate();
    
    console.log(message);
   }
    catch(err){
        console.log(err);
}
}

course();