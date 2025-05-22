
let number1 = 5
let number2 = 10
let number3 = 7

if((number1 <= 0) || (number2 <= 0) || (number3 <= 0)){
    console.log("Triangle is not possible")
}else if((number1+number2>number3)&&(number1+number3>number2)
&&(number2+number3>number1)){
    console.log("Triangle is possible")
}else{
    console.log("Triangle is not possible")
}