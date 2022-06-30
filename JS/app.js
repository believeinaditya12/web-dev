const nameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxalloweschars = nameInputElement.maxLength;

function updateremainingcharacters() {
    const enteredValue = nameInputElement.value;
    const remainingCharacters = maxalloweschars - enteredValue.length;
     remainingCharsElement.textContent = remainingCharacters
    if (remainingCharacters <= 10) {
        nameInputElement.classList.add('warning')
        remainingCharsElement.classList.add('warning');
    }
    else {
      nameInputElement.classList.remove('warning')
        remainingCharsElement.classList.remove('warning');
    }
}
nameInputElement.addEventListener('input',updateremainingcharacters);
