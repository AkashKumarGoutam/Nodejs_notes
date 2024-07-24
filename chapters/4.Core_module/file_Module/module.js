// file systum modules

const fs = require('fs')
const path = require('path')



// 1. How to Create Folder:-
// fs.mkdir(path.join(__dirname, '/test') , (err) => {
//     if(err){
//         console.log("Something went wrong")
//         console.log(err)
//         return
//     }
//     console.log("Folder Created........")
// })

//  output:--------
                            //  Something went wrong
                            //  [Error: EEXIST: file already exists, mkdir 'G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module\test'] {
                            //    errno: -4075,
                            //    code: 'EEXIST',
                            //    syscall: 'mkdir',
                            //    path: 'G:\\3.Kg\\NodeJs(17 july)\\chapters\\4.Core_module\\file_Module\\test'
                            //  }





// 2. How to Create File
// fs.writeFile(path.join(__dirname, 'test' , 'test.txt') , 'write some here in file ' , (err) => {
//     if(err){
//         throw err
//     }
//     console.log("File are Created........")
// })


// output:----
                        // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> node module.js
                        // File are Created........
                        // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> node module.js
                        // File are Created........
                        // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> 

                                // we have same output because of files are override 




// 3. How to fs.appendFile file to existing file
// fs.writeFile(path.join(__dirname, 'test' , 'test.txt') , 'write some here in file ' , (err) => {
//         if(err){
//             throw err            
//         }
//         fs.appendFile(path.join(__dirname , 'test' , 'test.txt') , "  appended  content"  , (err)=>{
//             if(err){
//                 throw err
//             }
//             console.log("data are append")
//         })
//         console.log("File are Created........")
//     })

//     output:--------
                        // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> node module.js
                        // File are Created........
                        // data are append
                        // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module>





// $.Read File
// fs.readFile(path.join(__dirname , 'test' , 'test.txt') , (err , data)=>{
//     if(err){
//         throw err
//     }
   
    // console.log(data)           :-- console karne pe original data nhi milega buffer data milega usse sahi karne ke liye hme "toSting method use karna hoga
    // <Buffer 77 72 69 74 65 20 73 6f 6d 65 20 68 65 72 65 20 69 6e 20 66 69 6c 65 20 20 20 61 70 70 65 6e 64 65 64 20 20 63 6f 6e 74 65 6e 74>

//     const content = Buffer.from(data)
//     console.log(content.toString())
// })

 // output:--------
                                    // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> node module.js
                                    // write some here in file   appended  content
                                    // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> 



//  5.read file second simple way
// fs.readFile(path.join(__dirname , 'test' , 'test.txt') , 'utf-8',  (err , data)=>{
//         if(err){
//             throw err
//         }
//         console.log(data)
// })
 // output:--------
                                    // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> node module.js
                                    // write some here in file   appended  content
                                    // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\file_Module> 



                        
6. 