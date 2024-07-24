// we are create functions to some where

// 1.func
const register = function (username){
    console.log(`user ${username} are registerd`)
}
//  2.funs
const login= function (username){
    console.log(`user ${username} are login`)
}


// and finally we are export the auth.js file for use some where
module.exports = {
    register,
    login
}