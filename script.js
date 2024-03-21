function github() {
    window.open('https://github.com/itsuigy/gestion-de-usuarios');
}

gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: '931651077814-up7ag765hlr1js3tf1rfb8vuvvgksrie.apps.googleusercontent.com'
    });
});

function onSignIn(googleUser) {
    try {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Nombre: ' + profile.getName());
        console.log('URL de la imagen: ' + profile.getImageUrl());
        console.log('Correo electrónico: ' + profile.getEmail());
    } catch (error) {
        console.error('Error en onSignIn:', error.message);
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('Usuario cerró sesión.');
    }).catch(function (error) {
        console.error('Error al cerrar sesión:', error);
    });
}