const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const num=document.getElementById("indc");
const reset=document.getElementById("res")
function createcounter(){
    let count=0;
    return{
        increment(){
            if(count===20){
               alert("You reached max limit!"); 
            }
            if(count<20){
            count++;
            }
            return count;
        },
        decrement(){
            if(count===0){
                alert("Counter reached 0!");
            }
            if(count>0){
            count--;
            }
             return count
        },
        reset(){
            count=0;
             return count
        }
    }
}
clouser=createcounter();
inc.addEventListener("click",()=>{
    num.textContent=clouser.increment();
})
dec.addEventListener("click",()=>{
    
    num.textContent=clouser.decrement();
})
reset.addEventListener("click",()=>{
    num.textContent=clouser.reset();
})
