let year = 1997 ;
if(year % 4 === 0){
    console.log('Bhai tomi leap year', year)
}
else if(year % 4 === 0 && year % 100 !== 0){
    console.log('Bhai Tomio leap year')
}
else{
    console.log("Bhai tomi leap year nah")
}