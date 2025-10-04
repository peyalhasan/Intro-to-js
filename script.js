while(0){
    let num = prompt("Enter your value")
    let convertedNumber = Number(num);
    let correctAns = Math.floor(Math.random() * (90 - 10 +1)) +10 ; 
    console.log(correctAns)
    if(convertedNumber === correctAns){
        console.log('Mama hoiche')
    }
    else if(convertedNumber < correctAns){
            console.log('Tomi eto choto number daw keno')
        }
    else{
        if(convertedNumber > correctAns){
            console.log("You have guess the bigger one")
        }
        
    }
}