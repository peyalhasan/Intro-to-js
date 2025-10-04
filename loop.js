/** 
 * 1. For loop 
 * 2. For in 
 * 3. While 
 * 4. Do While
 * 5. For of
 * 6. forEach
 * 7. Map
 */

// For loop 

// Task one Even
for( let i= 0; i<= 100; i +=2){
    console.log(i)
}

for(let i= 0; i<= 100; i++){
    if(i%2==0){
        console.log(i)
    }
}

let i = 0;
while(i <= 100){
    console.log('Odd Number', i)
    i++
}
 
let a = 1; 
do{
    console.log("Bha Bhai bha");
    a++;
}while(a < 5)