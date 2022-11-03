function terimaTidak(cinta) {
  return new Promise((resolve, reject)=>{
    if (cinta !== "Terima") {
      return reject("Mundur")
    }
    return resolve("Jadian")
  })
}

const mundurJadian = async() => {
  try {
    let result = await terimaTidak("Tidak")
    console.log(result)
  } catch(err){
    console.log(err)
  }
}

mundurJadian()
