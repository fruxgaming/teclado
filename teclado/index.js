const textoEntrada = document.getElementById('textoEntrada');
const tecladoVirtual = document.getElementById('tecladoVirtual');

// Definir el layout del teclado
const teclas = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Espacio', 'Borrar'
];

// Crear botones para cada tecla
teclas.forEach(tecla => {
    const boton = document.createElement('button');
    boton.textContent = tecla;
    
    boton.addEventListener('click', () => agregarTexto(tecla));


    tecladoVirtual.appendChild(boton);
});

// Función para agregar texto al campo de entrada
function agregarTexto(valor) {
    if (valor === 'Espacio') {
        textoEntrada.value += ' ';
    } else if (valor === 'Borrar') {
        textoEntrada.value = textoEntrada.value.slice(0, -1);
    } else {
        textoEntrada.value += valor;
    }
}