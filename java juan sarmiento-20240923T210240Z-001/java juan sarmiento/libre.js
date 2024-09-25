let estudiantes = ['Juan', 'Alejandro', 'David'];

  // Eliminamos el último elemento "David" sin argumentos en .pop()
  alert(estudiantes.pop()); // removemos a "David"

  // Mostramos el array restante: ["Juan", "Alejandro"]
  alert(estudiantes); // "Juan", "Alejandro"

  // Añadimos "Felipe" al final del array
  alert(estudiantes.push('Felipe')); // nueva longitud: 3

  // Mostramos el array actualizado: ["Juan", "Alejandro", "Felipe"]
  alert(estudiantes); // "Juan", "Alejandro", "Felipe"

