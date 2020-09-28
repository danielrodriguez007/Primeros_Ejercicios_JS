/*Ejercicios 11/09/2020
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

console.log("**********PRIMER EJERCICIO************");

export function name() {
  let cadena = "Fuck World";
  let cadena2 = cadena.length;
  console.log(`La cadena de texto contiene ${cadena2} caracteres`);
}
name();

console.log("************SEGUNDO EJERCICIO**********");

export function name2() {
  let cadena3 = "Fuck World";
  console.log(cadena3.substr(0, 4));
}
name2();

console.log("**********TERCER EJERCICIO***********");

export function name3() {
  let cadena4 = "Fuck World Motherfuckers";
  console.log(cadena4.split(" "));
}
name3();

console.log("**********CUARTO EJERCICIO***********");

export function name4() {
  let contador = 4;
  for (let index = 1; index < contador; index++)
    console.log(`${index} Fuck World`);
}
name4();
console.clear();

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

console.info("********** QUINTO EJERCICIO**********");

export const cadena5 = (mensaje = "", x = mensaje.length, mensajeinv = "") => {
  if (!mensaje) {
    console.warn("No ingreso cadena de texto");
  } else {
    for (let index = x - 1; index >= 0; index--) {
      mensajeinv += mensaje[index];
    }
    console.log(mensajeinv);
  }
};
cadena5("Fuck the World");

console.log("**********SEXTO EJERCICIO**********");

export const texto = (cadena = "", palabra = "", resultado = "") => {
  if (!cadena) return console.warn("No ingreso cadena de texto");
  if (!palabra) return console.warn("No ingreso palabra a buscar");
  if ((cadena, palabra)) {
    resultado = cadena.match(palabra);
    console.log(`La palabra ${palabra} se repite ${resultado.length} veces`);
  }
};

texto("Fuck the Fuck world Fuck Fuck", /Fuck/g);

console.log("**********SEPTIMO EJERCICIO**********");

export const leer = (cadena2 = "", x2 = cadena2.length, cadenainv = "") => {
  if (!cadena2) {
    console.warn("No ingreso cadena  a validar");
  } else {
    for (let index = x2 - 1; index >= 0; index--) {
      cadenainv += cadena2[index];
    }
    let validacion =
      cadenainv == cadena2 ? console.log(true) : console.log(false);
  }
};

leer("ana");

console.log("**********OCTAVO EJERCICIO**********");

export const eliminar = (cadenas = "", elimina = "", x = "") => {
  if (!cadenas) return console.warn("No ingresaste cadena a validar");
  //if (!elimina) return console.warn("No ingreso palabra a eliminar");
  if ((cadenas, elimina)) {
    x = cadenas.replace(elimina, " ");
  }
  console.log(x);
};

eliminar("xyz1 xyz2 xyz3 xyz4", /xyz/g);

console.clear();

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

console.info("************NOVENO EJERCICIO***********");

export const numero = (number, number2, a) => {
  if (!number) return console.warn("Ingrese el rango de inicio");
  if (!number2) return console.warn("Ingrese el rango de final");
  if ((number, number2)) {
    a = Math.random() * (number2 - number) + number;
    console.info(Math.round(a));
  }
};
numero();
numero(2);
numero(501, 600);

console.info("**********DECIMO EJERCICIO***********");

export const capicua = (numero1, numero2) => {
  if (!numero1) return console.warn("Ingrese numero a evaluar");
  if (typeof numero1 != "number")
    return console.error("Se debe ingresar un dato de tipo numero");
  if (numero1) {
    numero1 = numero1.toString();
    numero2 = numero1.split("").reverse().join("");
  }
  numero1 == numero2 ? console.info(true) : console.info(false);
};
capicua();
capicua("2002");
capicua(2002);

console.info("**********UNDECIMO EJERCICIO**********");

export const factorial = (numero = undefined) => {
  if (numero === 0)
    return console.error(
      `Al numero ${numero} no se le puede calcular factorial`
    );

  if (!numero) return console.warn("Ingrese Valor");

  if (typeof numero != "number")
    return console.warn("Debe de ingresar un numero");

  if (Math.sign(numero) == -1)
    return console.error(
      "A los numeros negativos no se les puede calcular factorial"
    );

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial();
factorial("5");
factorial(0);
factorial(-1);
factorial(5);

console.clear();

/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

console.info("**********EJERCICIO DOCE**********");

export const primo = (numero = undefined, primo) => {
  if (!numero) return console.warn("Debe ingresar un numero a evaluar");

  if (typeof numero != "number")
    return console.error("Debe ingresar un dato tipo numero");

  if (Math.sign(numero) === -1)
    return console.error(
      "No se pude ejecutar la operación con numeros negativos"
    );
  if (numero === 1)
    return console.error(`El numero ${numero} no se puede calcular`);

  for (let i = 2; i < numero; i++) {
    primo = numero % [i];

    console.info(primo);

    if (primo === 1) {
      console.info(`El numero ${numero} es Primo`);
      break;
    } else {
      console.info(`El numero ${numero} es Compuesto`);
      break;
    }
  }
};

primo();
primo("2");
primo(-2);
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.
primo(1);
primo(200);

console.info("**********EJERCICIO CETRE**********");

export const non = (numero) => {
  if (numero === 0) return console.error("El valor ingresado no es valido");

  if (!numero) return console.warn("Ingrese un numero a evaluar");

  if (typeof numero != "number")
    return console.warn("Debe ingresar un dato tipo numero");

  let ope = numero % 2;

  ope === 0
    ? console.info(`El numero ${numero} es Par`)
    : console.info(`El numero ${numero} es Impar`);
};

non();
non("3");
non(0);
non(2);
non(3);
non(10);
non(11);

console.info("**********EJERCICIO CATORCE**********");

export const grados = (
  eleccion = undefined,
  grados = undefined,
  resultado = undefined
) => {
  if (eleccion >= 3) return console.error("Debe ingresar una opcion valida");

  if (!eleccion) return console.warn("Debe ingresar alguna opcion");

  if (typeof eleccion != "number")
    return console.warn("Ingrese 1 para Celsius o 2 Fahrenheit");

  if (!grados) return console.warn("Debe ingresar temperatura a convertir");

  if (typeof grados != "number")
    return console.error("Debe ingresar una temperatura en dato numerico");

  if (eleccion === 1) {
    resultado = grados * 1.8 + 32;

    console.log(`Los ${grados}°Celsius equivalen a ${resultado}°Fahrenheit`);
  } else if (eleccion === 2) {
    resultado = (grados - 32) / 1.8;

    console.log(`Los ${grados}°Fahrenheit equivalen a ${resultado}°Celsius`);
  }
};

grados();
grados(1);
grados("1");
grados(1, "2");
grados(3, 55);
grados(1, 100);
grados(2, 32);

console.clear();

/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

console.info("**********EJERCICIO QUINCE**********");

export const conver = (
  option = undefined,
  number = undefined,
  b = undefined
) => {
  if (option > 2)
    return console.warn(
      "Ingrese una opción valida 1.para Binaria o 2. para Decimal"
    );

  if (!option) return console.error("Debe ingresar una opción valida");

  if (typeof option != "number")
    return console.warn("Debe ingresar un dato numerico en la opción");

  if (!number) return console.error("Debe ingresar numero a validar");

  if (typeof number != "number")
    return console.warn("Debe ingresar un dato numerico");

  if (option === 1) {
    b = number.toString(2);
    console.info(`El numero ${number} equivale a ${b} en base Binaria`);
  } else {
    b = parseInt(number, 2);
    console.info(`El numero ${number} equivale a ${b} en base Decimal`);
  }
};
conver();
conver(4, 4);
conver("2", 3);
conver(2);
conver(2, "45");
conver(1, 28);
conver(2, 11100);

console.info("**********EJERCICIO DIECISEIS**********");

export const desc = (
  cifra = undefined,
  descuento = undefined,
  final = undefined,
  a = undefined,
  b = undefined
) => {
  if (cifra === 0) return console.warn("No se le puede aplicar descuento a 0");

  if (!cifra) return console.warn("Debe ingresar valor inicial");

  if (typeof cifra != "number")
    return console.error("Ingrese un dato tipo numero");

  if (Math.sign(cifra) === -1)
    return console.error("No se pueden calcular unidades negativas");

  if (descuento === 0) return console.warn("No hay descuento para aplicar");

  if (!descuento) return console.warn("Debe ingresar valor del descuento");

  if (typeof descuento != "number")
    return console.error("Ingrese un dato tipo numero en el descuento");

  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser negativo");

  a = descuento / 100;
  b = cifra * a;
  final = cifra - b;

  console.log(
    `El descuento de ${descuento}% a ${cifra} es igual a ${b} por ende el valor final es de ${final}`
  );
};

desc();
desc(0);
desc("0");
desc(-1);
desc(100);
desc(100, 0);
desc(100, "0");
desc(100, -100);
desc(5000, 50);

console.info("**********EJERCICIO DEICISIETE**********");

export const years = (actYear = "", pastYear = "") => {
  if (typeof actYear === "number")
    return console.error("Ingrese fecha en formato  valido");

  if (typeof pastYear === "number")
    return console.error("Ingrese fecha en formato valido");

  if (!actYear) return console.warn("Ingrese fecha inicial");

  if (!pastYear) return console.warn("Ingrese fecha final");

  if (actYear < pastYear)
    return console.error("No se pueden calcular años negativos");

  let actYear1 = new Date(actYear),
    pastYear1 = new Date(pastYear),
    anio1 = actYear1.getFullYear(),
    anio2 = pastYear1.getFullYear(),
    finalYear = anio1 - anio2;

  console.info(
    `El primer anio ingresado es ${anio1} y el segundo es ${anio2} por lo cual han pasado ${finalYear} anios`
  );
};
// years("2020 02 22", "202 02 22");

console.clear();

// // 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// // 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// // 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

console.info("***********EJERCICIO DIECIOCHO**********");

export const found = (str = "", newstr = "", cons = "") => {
  if (!str) return console.warn("Ingrese texto para ser analizado");

  if (!(typeof str == "string"))
    return console.error("Solo se reciben una cadena de texto ");

  newstr = str.toLowerCase();

  newstr = newstr.replace(/[aeiou]/g, "");

  newstr = newstr.replace(/ /g, "");

  cons = str.toLowerCase();

  cons = cons.replace(/[bcdfghjklmnpqrstvwyz]/g, "");

  cons = cons.replace(/ /g, "");

  console.info(
    `En el texto "${str}" Hay ${cons.length} vocales y ${newstr.length} consonantes`
  );
};
found();
found(12345);
found("Hola vamos a hacer una prueba con este string");

console.info("**********EJERCICIO DIECINUEVE**********");

export const cmpname = (str = "", str1 = "") => {
  if (!str) return console.warn("Ingrese Nombre");

  if (!(typeof str === "string"))
    return console.error("Caracteres invalidos en el nombre");

  str1 = str.match(/^[a-zA-Z\s]*$/)
    ? console.info(`La entrada ingresada: "${str}" es un nombre valido.`)
    : console.error(`La entrada ingresada :"${str}" no es un nombre valido.`);
};
cmpname();
cmpname(12345);
cmpname({});
cmpname("Didier Daniel Rodriguez Rodriguez");

console.info("**********EJERCICIO VIENTE**********");

export const mail = (str = "") => {
  if (!str) return console.warn("Ingrese correo electronico");

  if (!(typeof str === "string"))
    return console.warn("Ingrese un correo valido");

  let str1 =
    str.match(/@/g) && str.match(/.com/g)
      ? console.info(`El correo ${str} es un correo valido`)
      : console.error(`Valide el correo ${str} ya que no es un correo valido`);
};
mail();
mail(12345);
mail("daniel.com");
mail("daniel@");
mail("Daniel@gmail.com");

console.clear();

// // 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// // 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// // // 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}

console.info("**********EJERCICIO VENTIUNO**********");

export const sqrt = (array = undefined, base = undefined, pow = undefined) => {
  if (!(array instanceof Array))
    return console.error("Ingrese un arreglo de numeros");

  if (!array) return console.warn("Ingrese numeros a potenciar");

  if (!base) return console.warn("Potencia vacia");

  if (typeof base !== "number") return console.error("Potencia no valida");

  if (Math.sign(base) === -1 || Math.sign(base) === 0)
    return console.error("La potencia no puede ser negativa ni cero");

  for (let index = 0; index < array.length; index++) {
    const sqr = array[index];

    pow = [Math.pow(sqr, base)];

    console.info(pow);
  }
};

// sqrt();
// sqrt(12335, 2);
// sqrt([4, 4, 4, 4]);
// sqrt([2, 3, 4, 5], "3");
// sqrt([2, 3, 4, 5], -3);
// sqrt([2, 3, 4, 5], 0);
// sqrt([1, 4, 5], 2);

console.info("**********EJERCICIO VENTIDOS**********");

export const max = (array = undefined) => {
  if (!array) return console.warn("No hay numeros a validar");

  if (array.includes(typeof array != "number"))
    return console.error("El arreglo solo permite numeros");

  if (!(array instanceof Array))
    return console.error("Debe ingresar arreglo con numeros");

  let a = Math.max(...array),
    b = Math.min(...array);

  console.info(
    `Del arreglo ingresado [${array}] el numero mayor es: "${a}" y el menor es: "${b}"`
  );
};
max();
max("hol");
max(["a", true]);
max([1, 3, 10, 16]);

console.info("**********EJERCICIO VENTITRES**********");

export const par = (arr = undefined, par = [], impar = []) => {
  if (!arr) return console.warn("Ingrese array con #");

  if (!(arr instanceof Array)) return console.error("Solo se recibe un array");

  if (arr.includes(typeof arr != "number"))
    console.warn("Solo se recibe array con #");

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index] % 2;

    if (element === 0) {
      par.push(arr[index]);
    } else {
      impar.push(arr[index]);
    }
  }
  console.info(`# pares en el array [${par}]`);
  console.info(`# impares en el array [${impar}]`);
};
// par();
// par("hol");
// par(["h", true]);
// par([1, 3, 5, 7, 9, 2, 6]);
