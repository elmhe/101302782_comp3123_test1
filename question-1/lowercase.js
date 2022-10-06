const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(array){
    return new Promise((resolve, reject) =>{
        if(array){
            const newArray = array.filter(arr => {
                for(let i = 0; i < arr.length; i++){
                    if(typeof arr[i] == 'string'){
                        return arr[i]
                    }
                    else{
                        return ('Fail')
                    }
                }      
            })
            const lowerCase = newArray.map((value) => {
                return value.toLowerCase();
            })
            resolve('Resolved')
            console.log(lowerCase)
        } 
        else {
            reject('Something went wrong')
        }
    })
}

lowerCaseWords(mixedArray)
