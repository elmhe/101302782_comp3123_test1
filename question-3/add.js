const fs = require("fs")
const path = require("path")

//path
const dir = './Log'

//check if directory exists
if(!fs.existsSync(dir)){
    fs.mkdir(dir, (e) => {
        console.log('Directory is created!')// : 'Directory already exist!')
    })      
}
else{
    console.log('Directory already exist!')
}

//create files
for(let i = 0; i < 10; i++){
    fs.appendFile(`./Log/log${i}.txt`, 'This is a line', (e) => {
        if (e) throw e
        console.log(`log${i}.txt is made`)
    })
}

// fs.readdir(dir,(e, file) => {
//     for(f in file)
//     console.log(f)
// })