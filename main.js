function samePassword() {
    let inputPassword = document.querySelector("#password");
    let inputConfirmPassword = document.querySelector("#confirm-password");
    let pass = inputPassword.value;
    let confirmPass = inputConfirmPassword.value;
    if (pass === '' || confirmPass == '') {
        if(pass === '') {
            alert('No ha escrito ninguna Password');
        } else if (confirmPass === '') {
            alert('Escriba su otra vez su password')
        }
    } else if (pass === confirmPass) {
        inputPassword.classList.remove('error')
        inputConfirmPassword.classList.remove('error')
        alert('Correct')

    } else {
        alert('Incorrecto')
    }
}

const btn = document.querySelector('#submit-btn')
btn.addEventListener('click', ()=> samePassword())
console.log(3)
