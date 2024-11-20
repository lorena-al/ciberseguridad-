// Funcionalidad de botón "Leer más"
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    alert('La ciberseguridad es clave para protegernos en la era digital. ¡Infórmate y actúa!');
});
// Mostrar contenido adicional al hacer clic
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    const section = document.getElementById('inicio');
    const extraContent = document.createElement('p');
    extraContent.textContent = 'La ciberseguridad abarca medidas como el cifrado de datos, protección contra malware y capacitación en seguridad digital.';
    section.appendChild(extraContent);
});
// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
