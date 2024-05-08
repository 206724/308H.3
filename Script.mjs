//** Part 1: Fizz Buzz*/

// Loop through all numbers from 1 to 100.
// for (let i =1;i<100; i++){  
//     if (i% 3 == 0)            
//         {
//             console.log("Fizz")  //If a number is divisible by 3, log “Fizz.”
       
//         }
//     else if (i% 5 ==0)
//         {
//             console.log("Buzz")   // If a number is divisible by 5, log “Buzz.
          
//         }
//     else if ( i%3 ==0 && i% 5 ==0)
//         {
//             console.log("Fizz Buzz")   // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
          
//         }    
//     else
//     {
//         console.log(i)                //If a number is not divisible by either 3 or 5, log the number.
//     }
    
    
//  }

//*************Part 2: Prime Time*********** */

let n =100;

for (let i=2;i<n;i++)
    {    
        if( i ===2 || i===3 || i===5 || i==7)
            {
                console.log(i)
              
            }
       else if(i % 2 === 0 || i % 3===0 ||  i%5 ===0 || i%7===0)
         {
            console.log(`${i} , is not prime number`);
            
        }

        else
        {
            console.log(`${i} , is prime number`);
            
        }
    }



    //**** Part 3: Feeling Loopy***************/

    