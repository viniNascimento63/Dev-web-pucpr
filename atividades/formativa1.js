/* --- MODA de um array */

let nums = [2, 5, 5, 2];

function getModa(array) {
    let moda;
    let aux;
    let frequencia = 0;

    for (let i = 0; i < array.length-1; i++) {
        aux = array[i];
        let contador = 0;

        // Encontrar a frequência de um número.
        for (let j = 0; j < array.length; j++) {
            if (array[j] === aux) {
                contador += 1;
            }
        }
        
        // Se for encontrado um número com frequência maior.
        if (contador > frequencia) {
            frequencia = contador;
            moda = aux;
        } else if (contador == frequencia) {
            return null;
        }
    }
    return moda;
}

console.log(getModa(nums));
