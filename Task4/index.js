var screen = document.getElementById("screen");
var buttons = document.querySelectorAll('button');

let screenValue = '';
screen.addEventListener('change',()=>{
    screenValue = screen.value;
})


const calculate = ()=>{
    try {
        screen.value = eval(screenValue);
        screenValue = screen.value;
    } catch (error) {
        screen.value = "Enter correct expression"
        setTimeout(()=>{
            screen.value = screenValue;
        },1000);
        
    }
}

for (let btn of buttons) {
    btn.addEventListener('click', (e) => {

        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "Back" ){
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            calculate();
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}