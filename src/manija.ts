export function generarLorem(n: number): string {
  // COMPLETAR: Implementar la función generarLorem que reciba un número n y devuelva una cadena de texto con la frase "Lorem Ipsum" repetida n veces, separada por espacios. Por ejemplo, si n es 3, la función debería devolver "Lorem Ipsum Lorem Ipsum Lorem Ipsum".
    if (n === 1) {
      return "Lorem Ipsum"; // caso base
    } else {
      return "Lorem Ipsum " + generarLorem(n - 1); // llamada recursiva, = cada vez va sumando uno hasta que n = 1
      // n = 5 --- Lorem Ipsum + n = 4 --- Lorem Ipsum Lorem Ipsum + n = 4 .....
    }
  }

console.log(generarLorem(5));
