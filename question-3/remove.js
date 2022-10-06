const fs = require("fs")

const dir = './Log'

// fs.readdir(dir, (e, files) =>{
//     for(f in files){
//         fs.unlink(f, e => {

//         })
//         console.log(`deleting...log${f}.txt`)
//     }
// })

for(let i = 0; i < 10; i++){
    fs.unlink(`./Log/log${i}.txt`, (e) => {
        
        console.log(`log${i}.txt is deleted`)
    })
}