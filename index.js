//With the usual Users and Todo lists:


// - Say hi to those users in the console - but only 1 greeting every 2 seconds.
// - Prompt the user for a user ID. Using the value, find all the todos that are Inc


// - Prompt the user for a letter

const userLetter = prompt("Input a letter")

// - Find all the users who's name contains the letter 

const foundUsers = users.filter(function (user){
    return user.name.includes(userLetter)
})

console.log('foundUsers:', foundUsers)
let userIndex = 0

// setInterval :: (function, ms: number) => id: number
if (foundUsers.length>0) {
    const intervalId = setInterval(function () {
        const user = foundUsers[userIndex]
        console.log(`Hello, ${user.name}!`)
        userIndex += 1
        if (userIndex === foundUsers.length) clearInterval(intervalId)
    }, 2000)
    } else{
        console.log('Found no users....')
    }
// setTimeout :: (function, ms: number) => id: number

const timeoutId = setTimeout(function(){

}, 1000)

// setInterval :: (function, ms: number) => id: number
const intervalId = setInterval(function (){

}, 1000)


