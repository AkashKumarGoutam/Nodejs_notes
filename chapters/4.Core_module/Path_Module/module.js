//    Path Module  Most used Features

// import path module first
const path = require("path");

// features
// 1.dirname
// console.log("File name:- ----" , path.dirname(__filename))
// output:--------  File name:- ---- G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\Path_Module



// 2.filename or basename
// console.log("file name:-------" , path.basename(__filename))
// output:------------file name:------- module.js



// 3. Extension
// console.log("file name:-------" , path.extname(__filename))
// output:-------file name:------- .js



// 4.Parse
// console.log("Parse :-------" , path.parse(__filename))
// output:------- Parse :-------
// {
//   root: 'G:\\',
//   dir: 'G:\\3.Kg\\NodeJs(17 july)\\chapters\\4.Core_module\\Path_Module',
//   base: 'module.js',
//   ext: '.js',
//   name: 'module'
// }


// 5.join
// console.log("Join :-------" , path.join(__dirname, "secondModuleFile" , "app.js"))
// output:-----------Join :------- G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\Path_Module\secondModuleFile\app.js
