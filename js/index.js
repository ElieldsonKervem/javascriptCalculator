    
let calcScreen = document.getElementById("calcScreen");
let meuIcone = document.getElementById("meuIcone");
let display = document.getElementById("display");
let sceenOnoOrOff = false;
//função

 function  inputValue(num){
    if(sceenOnoOrOff){
    display.innerHTML += num;  
    }
 }
  
  
  function showResult(){
     if(display && sceenOnoOrOff){
            display.innerHTML = eval(display.innerHTML);
     }
     else{
            display.innerHTML = "err";
     }
  }
  
  function cleaning()
  {     if(sceenOnoOrOff){
        display.innerHTML = "";
    }  }

function percent(num){
    if(sceenOnoOrOff){
      display.innerHTML = eval(display.innerHTML)/100 + '%';;  
    }
}
btn17.addEventListener('click', function alternarIcone() {
    if (meuIcone.classList.contains("fa-toggle-off")) {
        turnOn();
        meuIcone.classList.remove("fa-toggle-off");
        meuIcone.classList.add("fa-toggle-on");
        display.innerHTML = "Olá seja bem vindo!";
        
    } else {
        turnOff();
        meuIcone.classList.remove("fa-toggle-on");
        meuIcone.classList.add("fa-toggle-off");
        display.innerHTML = "";
        
    }
});

function turnOn() {
    calcScreen.classList.remove("screenTurnOff");
    calcScreen.classList.add("screenTurnOn");
    sceenOnoOrOff = true

}

function turnOff() {
    calcScreen.classList.remove("screenTurnOn");
    calcScreen.classList.add("screenTurnOff");
    sceenOnoOrOff = false
     
}







//funlão de ligar e desligar o botão de ligar e desligar a calculadora pronto

