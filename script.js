document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Definir usuarios válidos usando Map
    const validUsers = new Map();
    validUsers.set('user1', 'password1');
    validUsers.set('user2', 'password2');

    // Validar usuario y contraseña
    if (validUsers.has(username) && validUsers.get(username) === password) {
        // Redirigir a la página de bienvenida
        window.location.href = 'welcome.html';
    } else {
        // Mostrar mensaje de error
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
