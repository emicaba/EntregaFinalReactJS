const customFetch = (timeout, task) => {
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(true){
            resolve(task);
        } else {
            reject("ERROR");
        }
    }, timeout);
}
)
}

export default customFetch