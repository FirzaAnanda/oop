// const strArray = ['javascript', 'java', 'c']
// function forEach(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++){
//     newArray.push(callback(array[i]))
//   }
//   return newArray;
// }
// const lenArray = forEach(strArray, (item => {
//   return item.length;
// }))
// console.log(lenArray)

function isPasswordCorrect(password) {
  return new Promise((resolve, reject) => {
    if (password !== '123456') {
      return reject("Wrong Password")
    }
    return resolve("Password is correct")
  });
}
const checkPassword = async () => {
  try {
    let result = await isPasswordCorrect('1234577')
    console.log(result)
  } catch (err) {
    console.log(err)
   }
}
 checkPassword()




// async function checkPassword() {
//   try {
//     let result = await isPasswordCorrect('123456')
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }
// checkPassword()





// const checkPassword = async () => {
//   try {
//     let result = await isPasswordCorrect('12345')
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// } 
// checkPassword()