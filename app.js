
const fs = require('fs')

const files = fs.readdir('$', function(err, files){
    if (err) console.log("error", err)
    else console.log("result", files)
})
console.log(files)