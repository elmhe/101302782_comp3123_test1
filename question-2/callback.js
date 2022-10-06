function resolvedPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'promise resolved!'})
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            try {
                reject(new Error('error: promise rejected!'));
            }
            catch(e){
                console.error(e);
            }
        })
    })
}

resolvedPromise().then(() => {
    console.log({'message': 'promise resolved!'})
})

rejectedPromise().catch(() => {
    console.error({'error': 'promise rejected!'})
})

