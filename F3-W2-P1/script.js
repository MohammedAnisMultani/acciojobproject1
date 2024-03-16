let increaseBtn = document.getElementById("increment");
let decreaseBtn = document.getElementById("decrement");
let countDisplay = document.getElementById("count")
let errordisplay = document.getElementById("red")
let clearBtn = document.getElementById("clear")
    // let flexItem = document.getElementById("flex")   

increaseBtn.addEventListener("click", increase)
decreaseBtn.addEventListener("click", decrease)
clearBtn.addEventListener("click", clear)


let count = 0;
function increase(e){
        clearBtn.classList.remove("none")
       
        errordisplay.innerHTML = "";
    
count++;
 countDisplay.innerHTML =`Your Current Count is : ${count}`
 }
    // let inc = 0;
function decrease(e){
    //  clearBtn.classList.remove("none")
    if(count == 0){ 
            
const error = document.createElement("div") 
        
        error.classList.add("error")
            error.innerHTML =`Error : Cannot go below 0`
            errordisplay.innerHTML = ""
            red.append(error)
        }
        else if(count >= 0){
          
           
            count--;
            countDisplay.innerHTML =`Your Current Count is : ${count}`
            errordisplay.innerHTML = "";
        }

    }

    function clear(){
    
            count = 0;
            countDisplay.innerHTML =`Your Current Count is : ${count}`
           
           
                clearBtn.classList.add("none")
            
        
        
    }


