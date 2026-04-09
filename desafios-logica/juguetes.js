/**
 * Los Juguetes Ordenados (Beautiful Arrangement)
 *
 * Dado n juguetes etiquetados del 1 al n y n cajitas numeradas del 1 al n,
 * contar cuántos "Arreglos Hermosos" existen donde para cada cajita i:
 *   - El juguete en la caja i es divisible por i, O
 *   - i es divisible por el número del juguete en esa caja.
 *
 * Estrategia: Backtracking con bitmask.
 *   - Usamos una máscara de bits para rastrear qué juguetes ya fueron colocados.
 *   - Para cada posición (caja), probamos todos los juguetes disponibles que cumplan la regla.
 *   - Si llegamos a colocar todos los juguetes, encontramos un arreglo válido.
 *
 * Complejidad:
 *   - Tiempo: O(n!) en el peor caso, pero la poda reduce drásticamente las ramas.
 *     Con n <= 15, es perfectamente manejable.
 *   - Espacio: O(n) por la profundidad de la recursión.
 *
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    let count = 0;
    const used = new Array(n + 1).fill(false);

    function backtrack(pos) {
        // Si ya colocamos juguetes en todas las cajas, es un arreglo válido
        if (pos > n) {
            count++;
            return;
        }

        for (let juguete = 1; juguete <= n; juguete++) {
            // Solo intentar si el juguete no fue usado y cumple alguna regla
            if (!used[juguete] && (juguete % pos === 0 || pos % juguete === 0)) {
                used[juguete] = true;
                backtrack(pos + 1);
                used[juguete] = false;
            }
        }
    }

    backtrack(1);
    return count;
};

// ===================== CASOS DE PRUEBA =====================

console.log("=== Los Juguetes Ordenados ===\n");

// Casos del enunciado
console.log("Caso 1: n = 2 →", countArrangement(2), "(esperado: 2)");
console.log("Caso 2: n = 1 →", countArrangement(1), "(esperado: 1)");

// Casos adicionales
console.log("Caso 3: n = 3 →", countArrangement(3), "(esperado: 3)");
console.log("Caso 4: n = 4 →", countArrangement(4), "(esperado: 8)");
console.log("Caso 5: n = 5 →", countArrangement(5), "(esperado: 10)");

// Edge case: valor máximo permitido
console.log("Caso 6: n = 15 →", countArrangement(15), "(esperado: 24679)");
