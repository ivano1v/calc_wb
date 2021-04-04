let buttons = document.querySelectorAll('.button');
let operation = document.querySelectorAll('.operation');
let val;
let last_choise;

for (let i = 0; i < buttons.length; i++) { 
    buttons[i]?.addEventListener('click', () => {
        let input = document.querySelector('.value');
        input.value += buttons[i].textContent;
    })
}

for (let i = 0; i < operation.length; i++) {
    operation[i]?.addEventListener('click', () => {
        let input = document.querySelector('.value');
        if (!val) { 
            val = input.value;
            input.value = '';
        }
        else {
            if (i == 0) input.value = parseInt(val) + parseInt(input.value);
            if (i == 1) input.value = parseInt(val) - parseInt(input.value);
            if (i == 2) input.value = parseInt(val) * parseInt(input.value);
            if (i == 3) input.value = '';
            if (i == 5) input.value = parseInt(val) / parseInt(input.value);
            if (i == 4) {
                switch (last_choise) {
                    case 0:
                        input.value = parseInt(val) + parseInt(input.value);
                        break;
                    case 1:
                        input.value = parseInt(val) - parseInt(input.value);
                        break;
                    case 2:
                        input.value = parseInt(val) * parseInt(input.value);
                        break;
                    case 5:
                        input.value = parseInt(val) / parseInt(input.value);
                        break;
                }    
            }
            val = '';
        }
        last_choise = i;
    })
}

