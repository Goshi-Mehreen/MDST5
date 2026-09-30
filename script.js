let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => 
{
    button.addEventListener('click', (e) => 
        
    {
        if (e.target.innerHTML == '=') 
        {
            try {
                string = eval(string);
                input.value = string;
            }
            catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == "AC") 
        {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") 
        {
            // string = string.substring(0,string.length - 1);
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (e.target.innerHTML == ".") 
        {
            let currentvalue = string.split(/[+\-/*]/).pop();
            if (!currentvalue.includes(".")) 
            {
                string += ".";
                input.value = string;
            }

        }
        else if(e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "*" 
            || e.target.innerHTML == "/")
        {
        
            let Lastvalue = string.slice(-1);
            if(string != "" && Lastvalue != "+" && Lastvalue != "-" && Lastvalue != "*" && Lastvalue != "/")
            {
                string += e.target.innerHTML;
                input.value = string;
            }
             if(string == "" && e.target.innerHTML == "-")
            {
            string += "-";
            input.value = string;
            }
        }
        
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
