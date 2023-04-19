
//Funcion de inicio de sesión

const loginForm = document.querySelector('#login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.name === name && user.password === password)

    localStorage.setItem('login_success', JSON.stringify(validUser))

    // If para prevenir un ingreso erróneo
    if (validUser) {
        window.location.href = 'logout.html'
    }else {
        window.location.href = 'index.html'
    }

})
