document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('emailInput').value;
    
    // Aquí puedes agregar tu lógica para enviar el correo electrónico a tu servidor o plataforma de gestión de correos electrónicos
    
    document.getElementById('message').innerText = '¡Gracias por suscribirte!';
  });
  