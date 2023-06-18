function speedDetector(speed){
if(speed <= 70){
    return "Ok"
} else {
let points = (speed - 70) / 5 
if(points > 12){
    return 'License suspended!'
}else{
    return "Points: " + points.toFixed(2)
}
}
}
console.log(speedDetector(80))
console.log(speedDetector(70))
console.log(speedDetector(90))
console.log(speedDetector(120))

//  //points = ((speed - 70) / 5)
// //return `Demerit &{points}`
// return points '((speed - 70) / 5)`
// }
// if(points > 12){
//     return 'License suspended' 
// }
