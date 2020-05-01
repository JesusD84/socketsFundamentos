var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jesus',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log("Respuesta Server: " + resp);
});

//Escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});