// Seleccionar todas las preguntas
document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', event => {
        // Verificar si se hizo clic en un botón
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            const isCorrect = button.getAttribute('data-correct') === 'true';

            // Mostrar resultado y aplicar estilo
            if (isCorrect) {
                button.classList.add('correct');
                alert('¡Correcto!');
            } else {
                button.classList.add('incorrect');
                alert('Incorrecto, intenta de nuevo.');
            }

            // Deshabilitar todos los botones después de responder
            Array.from(question.children).forEach(btn => {
                btn.disabled = true;
                btn.style.cursor = 'not-allowed';
            });
        }
    });
});

// Función para reiniciar el juego
function resetGame() {
    // Habilitar todos los botones y eliminar estilos aplicados
    document.querySelectorAll('.question button').forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
        button.style.cursor = 'pointer';
    });
}

// Evento para el botón "Intentar de nuevo"
document.getElementById('retryBtn').addEventListener('click', resetGame);



