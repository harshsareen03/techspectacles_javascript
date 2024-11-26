// if-else

let num =100

if(num>100){
    console.log('greater than')
}
else{
    console.log('lesser than 100')
}

// chaining with else if

let point=110

if(point>=110){
    console.log('YOU WON PREMIUM REWARD')
}
else if(point>=80){
    console.log('YOU WON CHICKEN DINNER')
}
else{
    console.log('BETTER LUCK NEXT TIME')
}


// ternary operator
let age =18

let  Age_criteria=age>=18?'Adult':"Minor"
console.log(Age_criteria)

// switch-case

const car='mercedies'
switch(car){
    case 'mercedies':
        console.log('300000$')
        break;
    case 'scorpio':
        console.log('100000$')
        break;
    default:
        console.log('not available')

}
