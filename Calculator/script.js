const buttonDiv = document.querySelector(".buttons").childNodes

const display = document.querySelector("#display")





buttonDiv.forEach(button => {

    button.addEventListener("click",(event)=>{

        button.classList.add("clicked"); 
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 50);
        
        if(display.value === '0') {
            display.value = "";
        }
        if(event.target.value === 'AC')
        {
            display.value = 0
        }
        else if(event.target.value === 'C')
        {
           display.value = display.value.slice(0,display.value.length -1)
        }
        else if(event.target.value === '=')
        {
            display.value = eval(display.value)
        }
        else
        {
            display.value = display.value + event.target.value;
        }
    })
});
