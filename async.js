function  isPasswordCorrect(password){
    return new Promise((resolve, reject)=>{
        if(password !== '123456'){
            return reject("wrong password")
        }
        return resolve("Password benar")
    })
}
const checkPassword = async() => {
    try{
        let result = await isPasswordCorrect('123455')
        console.log(result)
    }catch (err){
        console.log(err)
    }
}
checkPassword()