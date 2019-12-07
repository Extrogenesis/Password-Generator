function randomValue(){
    let value = Math.floor( Math.random() * 91)
    if (value < 48) {
        return randomValue()
    } else {
        return value
    }
}



let i = 0 
while (i < 100 ){
    let value = randomValue()
    console.log(`${i}: ${value} or ${String.fromCharCode(value)}`)
    i++
}