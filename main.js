let formControl = document.querySelector(".form-control");
let Button = document.querySelectorAll(".button1");
let Sumbit = document.querySelector(".submit");
let operator = document.querySelectorAll(".op");
let clear = document.querySelector(".clear");
let total =0;
let value ="";
clear.addEventListener("click",()=>{
        formControl.value ="";
        value = "";
})
Sumbit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(formControl.value){
        formControl.value = eval(value);
        value =""; 
    }
    else{
        alert("Please Enter a value");
    }
})
Button.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        value += e.target.textContent;
        formControl.value = value;
    })
})
