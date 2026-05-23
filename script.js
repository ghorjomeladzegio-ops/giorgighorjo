const username = document.getElementById('username')
const password = document.getElementById('password')
const loginbtn = document.getElementById('loginbtn')

loginbtn.addEventListener('click', () => {
    const user = username.value
    const pass = password.value

    if (!user && !pass) {
        alert('შეავსე ორივე გრაფა')
        return;
    }

    if (user.length < 5) {
        username.style.border = "2px solid red"
    } else {
        username.style.border = "" 
    }

    if (pass.length < 9) {
        password.style.border = "2px solid red"
    } else {
        password.style.border = ""
    }


    if (user.length >= 5 && pass.length >= 9) {
        alert('თქვენ გაიარეთ რეგისტრაცია')
        location.reload() 
    }
})