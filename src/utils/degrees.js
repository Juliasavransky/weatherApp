const fahrenheit = (num) => {
    let fahrenheit = Math.round(num)
    return fahrenheit;
}

const  celsius = (num) => {
    let celsius = Math.round((num - 32) * (5 / 9))
    return celsius;
}
 export {celsius, fahrenheit}