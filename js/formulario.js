
const formulario = document.getElementById('formulario');
const mensajeExito = document.getElementById('mensaje-exito'); // Asegúrate de tener un elemento HTML con el id 'mensaje-exito' en tu HTML para mostrar el mensaje de éxito.


formulario.addEventListener('submit', async(e) =>{
  e.preventDefault();

  try {
    const response = await fetch('https://sheet.best/api/sheets/94f95403-6827-4c5d-ac66-a464a04b8eb6', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Nombre": formulario.nombre.value,
        "Ruc": formulario.ruc.value,
        "Telefono": formulario.telefono.value,
      }),
    });

    if (response.ok) {
      // Limpiar el formulario
      formulario.reset();
      // Mostrar mensaje de éxito
      mensajeExito.textContent = 'Solicitud enviado!! 😊';
      mensajeExito.className = 'alert alert-success mt-3';
      setTimeout(function() {
        mensajeExito.style.display = 'none';
      }, 4000);
    } else {
      throw new Error('Error al enviar los datos');
    }
  } catch (error) {
    console.error(error);
    // Mostrar mensaje de error si algo sale mal
    mensajeExito.textContent = 'Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.';
  }
});