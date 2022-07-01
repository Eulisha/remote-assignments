//using Promise
function delayedResultPromise(n1, n2, delayTime){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(n1+n2);
            reject(Error('something went wrong.'));
        }, delayTime)
    })
}
delayedResultPromise(4,5,3000)
    .then(console.log)
    .catch(err=>console.log(err));

//using Async
async function main(){
    try{
        const result = await delayedResultPromise(4,5,3000);
        console.log(result);
    } catch(err){
        console.error(e);
    }
}
main();
