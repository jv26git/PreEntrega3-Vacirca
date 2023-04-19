
// Función de LOGOUT que previene acceso forzado
const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    window.location.href = 'index.html'
}

const logout = document.querySelector('#boton')

logout.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    window.location.href = 'index.html'
})

