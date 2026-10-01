let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let justCalculated = false;
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
                justCalculated = true;
            }
            catch {
                input.value = "Error";
                string = "";
                justCalculated = false;
            }
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            // string = string.substring(0,string.length - 1);
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (e.target.innerHTML == ".") {
            let currentvalue = string.split(/[+\-/*]/).pop();
            if (!currentvalue.includes(".")) {
                string += ".";
                input.value = string;
            }

        }
        else if (e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "*"
            || e.target.innerHTML == "/") {

            if (justCalculated) {
                string += e.target.innerHTML;
                justCalculated = false;
                input.value = string;
            }
            else {
                let Lastvalue = string.slice(-1);
                if (string != "" && Lastvalue != "+" && Lastvalue != "-" && Lastvalue != "*" && Lastvalue != "/") {
                    string += e.target.innerHTML;
                    input.value = string;
                }
                if (string == "" && e.target.innerHTML == "-") {
                    string += "-";
                    input.value = string;
                }
            }
        }

        else {
            if (justCalculated) {
                string = e.target.innerHTML;
                justCalculated = false;
            }
            else {
                string += e.target.innerHTML;
            }

            input.value = string;
        }
    });
});
