// Obtener referencia al formulario y al campo de correo electrónico
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

// Función para validar el correo electrónico
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Función para mostrar mensajes de error
function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;

  // Insertar mensaje de error después del campo de correo electrónico
  form.insertBefore(errorDiv, emailInput.nextElementSibling);
}

// Función para mostrar mensaje de éxito
function showSuccess() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = '¡Gracias por suscribirte!';

  // Insertar mensaje de éxito después del campo de correo electrónico
form.insertBefore(successDiv, emailInput.nextElementSibling);

  // Limpiar el campo de correo electrónico
    emailInput.value = '';
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault();

  // Obtener el valor del correo electrónico ingresado
    const emailValue = emailInput.value;

  // Validar el correo electrónico
    if (!validateEmail(emailValue)) {
    showError('Ingresa un correo electrónico válido');
    return;
    }

  // Realizar aquí cualquier otra validación adicional necesaria

  // Simular el envío del formulario (puedes reemplazar esto con tu lógica de envío real)
    setTimeout(function() {
    showSuccess();
    }, 1000);
}

// Agregar un listener al evento 'submit' del formulario
form.addEventListener('submit', handleSubmit);
