/**
 * Realiza la Conjetura de Collatz para el número proporcionado por el usuario.
 */
function Collatz() {
  // Obtiene el elemento de entrada y el área de resultados en el documento HTML.
  const input = document.getElementById('collatzNumber');
  const result = document.getElementById('collatzResult');
  
  // Limpia el contenido anterior en el área de resultados.
  result.innerHTML = '';

  // Convierte el valor ingresado a un número entero.
  let num = parseInt(input.value);

  // Muestra el encabezado en el área de resultados.
  result.innerHTML += `Conjetura de Collatz para ${num}:<br>`;

  // Realiza la Conjetura de Collatz hasta que el número llegue a 1.
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    // Muestra el valor actual en el área de resultados.
    result.innerHTML += `${num}<br>`;
  }
}

/**
 * Calcula la constante de Kaprekar para un número de 4 dígitos.
 */
function Kaprekar() {
  // Obtener elementos HTML
  const input = document.getElementById('kaprekarNumber');
  const result = document.getElementById('kaprekarResult');
  result.innerHTML = ''; // Limpiar el resultado anterior

  // Convertir el valor del input a un número
  let num = parseInt(input.value);

  // Validación del número ingresado
  if (isNaN(num) || num < 1000 || num > 9999) {
    result.innerHTML = 'Por favor, ingrese un número de 4 dígitos válido.';
    return;
  }

  // Validación de dígitos repetidos
  if (Repetidos(num)) {
    result.innerHTML = 'Por favor, evite números con dígitos repetidos.';
    return;
  }

  // Mostrar el mensaje inicial
  result.innerHTML += `Constante de Kaprekar para ${num}:<br>`;

  // Realizar cálculos para encontrar la constante de Kaprekar
  while (num !== 6174) {
    const digits = num.toString().split('').sort((a, b) => a - b);
    const ascending = parseInt(digits.join(''));
    const descending = parseInt(digits.reverse().join(''));
    num = descending - ascending;
    result.innerHTML += `${descending} - ${ascending} = ${num}<br>`;
  }
}

// Función Repetidos para verificar si un número tiene dígitos repetidos
function Repetidos(number) {
  const digitCount = new Array(10).fill(0); // Array para contar ocurrencias de dígitos
  while (number > 0) {
    const digit = number % 10; // Obtener el último dígito
    if (digitCount[digit] > 0) {
      return true; // Si ya se encontró el dígito previamente, hay repetición
    }
    digitCount[digit]++; // Incrementar el contador para este dígito
    number = Math.floor(number / 10); // Eliminar el último dígito
  }
  return false; // No hay dígitos repetidos en el número
}

/**
 * Realiza la multiplicación egipcia de dos números enteros.
 */
function MultiEgipcia() {
  // Obtiene las referencias a los elementos de entrada y resultado en el documento HTML.
  const multiplicandoInput = document.getElementById('multiplicando');
  const multiplicadorInput = document.getElementById('multiplicador');
  const result = document.getElementById('egyptianMultiplicationResult');
  
  // Limpia el contenido previo del resultado.
  result.innerHTML = '';

  // Convierte los valores de entrada en enteros.
  let multiplicando = parseInt(multiplicandoInput.value);
  let multiplicador = parseInt(multiplicadorInput.value);
  
  // Agrega una introducción al resultado.
  result.innerHTML += `Multiplicación Egipcia de ${multiplicando} x ${multiplicador}:<br>`;

  // Inicializa las columnas y sumas necesarias.
  let column1 = [multiplicando];
  let column2 = [1];
  let sum = 0;
  let sum1 = 0;

  // Genera las columnas mediante duplicación hasta que la última entrada de la columna 2 sea mayor que el multiplicador.
  while (column2[column2.length - 1] <= multiplicador) {
    column1.push(column1[column1.length - 1] * 2);
    column2.push(column2[column2.length - 1] * 2);
  }

  // Agrega los valores de la columna 1 al resultado.
  result.innerHTML += 'Columna 1:<br>';
  for (let i = 0; i < column1.length; i++) {
    result.innerHTML += `${column1[i]}<br>`;
  }

  // Agrega los valores de la columna 2 al resultado.
  result.innerHTML += 'Columna 2:<br>';
  for (let i = 0; i < column2.length; i++) {
    result.innerHTML += `${column2[i]}<br>`;
  }

  // Selecciona y suma los valores de la columna 1 que corresponden a la multiplicación egipcia.
  result.innerHTML += 'Números seleccionados de la columna 1:<br>';
  for (let i = column2.length - 2; i >= 0; i--) {
    if (column2[i] + sum <= multiplicador) {
      result.innerHTML += `${column1[i]}<br>`;
      sum += column2[i];
      sum1 += column1[i];
    }
  }

  // Agrega la suma de los valores seleccionados y el resultado final al resultado.
  result.innerHTML += `Suma de los números seleccionados: ${sum}<br>`;
  result.innerHTML += `Resultado final: ${multiplicando} x ${multiplicador} = ${sum1}`;
}


/**
 * Realiza la multiplicación rusa entre dos números ingresados por el usuario y muestra los pasos y el resultado en un elemento HTML.
 */
function MultiRusa() {
  // Obtiene los elementos HTML necesarios
  const multiplicandoInput = document.getElementById('russianMultiplicando');
  const multiplicadorInput = document.getElementById('russianMultiplicador');
  const result = document.getElementById('russianMultiplicationResult');

  // Limpia el contenido anterior del elemento de resultados
  result.innerHTML = '';

  // Obtiene los valores de multiplicando y multiplicador de los campos de entrada
  let multiplicando = parseInt(multiplicandoInput.value);
  let multiplicador = parseInt(multiplicadorInput.value);

  // Muestra el encabezado de la multiplicación rusa en el elemento de resultados
  result.innerHTML += `Multiplicación Rusa de ${multiplicando} x ${multiplicador}:<br>`;

  let product = 0; // Almacena el resultado de la multiplicación rusa
  while (multiplicador > 0) {
    // Si el multiplicador es impar, muestra el paso y actualiza el producto
    if (multiplicador % 2 === 1) {
      result.innerHTML += `${multiplicando} \t ${multiplicador}<br>`;
      product += multiplicando;
    }

    multiplicando *= 2; // Duplica el multiplicando en cada paso
    multiplicador = Math.floor(multiplicador / 2); // Divide el multiplicador por 2 (eliminando el dígito menos significativo)
  }

  // Muestra el resultado final en el elemento de resultados
  result.innerHTML += `Resultado final: ${product}`;
}