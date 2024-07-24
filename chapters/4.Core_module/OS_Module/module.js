//   Os modules features


const os = require('os')

// 1. how to check Type of os to work on that time
// console.log("os type:=---" , os.type())
// Output:----
                        // PS G:\3.Kg\NodeJs(17 july)\chapters\4.Core_module\OS_Module> node module.js
                        // os type:=--- Windows_NT



// 2. How to check os platform
// console.log("os platform:--- " , os.platform())
// output:=------
// os platform:---  win32


//3.  how to check Free Memory
// console.log("Free Memory:---" , os.freemem()) 
// output:--
// Free Memory:--- 589926400



// 4.how to check total memory
// console.log("Total memory" , os.totalmem())
// output:--------
// Total memory 4169383936



// 5. how to Check when computer start
// console.log("Uptime:----" , os.uptime())
// output:--------
// Uptime:---- 1110140.859




// 3.how to check CPU architectures
// console.log(" cpu architecture:---" , os.arch())
// output:---
//  cpu architecture:--- x64


// 4. how to check Full CPU details
// console.log("CPU details" , os.cpus())
// output:------
// CPU details [
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 11436125,
//         nice: 0,
//         sys: 12436718,
//         idle: 238601046,
//         irq: 2153843
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 8698734,
//         nice: 0,
//         sys: 6086296,
//         idle: 247688531,
//         irq: 305921
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 14859515,
//         nice: 0,
//         sys: 9447328,
//         idle: 238166734,
//         irq: 407734
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 9638281,
//         nice: 0,
//         sys: 6433343,
//         idle: 246401953,
//         irq: 211812
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 13170140,
//         nice: 0,
//         sys: 8753515,
//         idle: 240549921,
//         irq: 449859
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 9016515,
//         nice: 0,
//         sys: 5506093,
//         idle: 247950953,
//         irq: 230187
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 11967906,
//         nice: 0,
//         sys: 7492578,
//         idle: 243013093,
//         irq: 440515
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz',
//       speed: 1800,
//       times: {
//         user: 13300062,
//         nice: 0,
//         sys: 7135218,
//         idle: 242038281,
//         irq: 541984
//       }
//     }
//   ]



