const userInput = document.querySelector(".textbox");
const convertBtn = document.querySelector('#convert');
const result = document.querySelector('#result');
const reset = document.querySelector("#reset");
const radioBtns = document.querySelectorAll('input[name="unit"]');
let input;

// add event listener for textbox, target change event once the focus leaves the textbox and the user selects something else
userInput.addEventListener('change', function () {
    input = this.value;
});
    
//add event listener to convert button
convertBtn.addEventListener('click', function (e) {
	e.preventDefault();
	//check which radio button was selected, call function
	// iterate over the radio button group and check which button is selected, once found get the value of that button
	radioBtns.forEach(function (radioBtn) {
		if (radioBtn.checked) {
            const unit = radioBtn.value;
			// call corresponding unit converting function
            if (unit === "celcius") {
				toFahrenheit(input);
			} else {
				toCelcius(input);
			}
			return unit;
		}
	});
});


function toCelcius(temp) {
    let convertedTemp = (5 / 9) * (temp - 32);
    result.textContent = convertedTemp;
    return convertedTemp;
}

function toFahrenheit(temp) {
    let convertedTemp = (temp * (9 / 5)) + 32;
    result.textContent = convertedTemp;
    return convertedTemp;
}

// add event listener for reset button
reset.addEventListener = ('click', function () {
    userInput.textContent = "";
});