/**
 * La Pareja Perfecta de Premios (Two Sum II - Sorted Array)
 *
 * Dado un arreglo ordenado de forma ascendente y un target,
 * encontrar dos elementos que sumen exactamente el target.
 * Retornar sus índices basados en 1: [indice1, indice2].
 *
 * Estrategia: Dos punteros (Two Pointers).
 *   - Un puntero al inicio (left) y otro al final (right).
 *   - Si la suma es menor al target, avanzamos left (necesitamos un número mayor).
 *   - Si la suma es mayor al target, retrocedemos right (necesitamos un número menor).
 *   - Si la suma es igual, encontramos la pareja.
 *
 * Complejidad:
 *   - Tiempo: O(n) — recorremos el arreglo una sola vez.
 *   - Espacio: O(1) — solo usamos dos variables extra (espacio constante).
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const suma = numbers[left] + numbers[right];

        if (suma === target) {
            // Índices basados en 1
            return [left + 1, right + 1];
        } else if (suma < target) {
            left++;
        } else {
            right--;
        }
    }

    // Según las restricciones siempre hay solución, pero por seguridad:
    return [];
};

// ===================== CASOS DE PRUEBA =====================

console.log("=== La Pareja Perfecta de Premios ===\n");

// Casos del enunciado
console.log("Caso 1:", JSON.stringify(twoSum([2, 7, 11, 15], 9)), "(esperado: [1,2])");
console.log("Caso 2:", JSON.stringify(twoSum([2, 3, 4], 6)), "(esperado: [1,3])");
console.log("Caso 3:", JSON.stringify(twoSum([-1, 0], -1)), "(esperado: [1,2])");

// Edge cases
console.log("Caso 4:", JSON.stringify(twoSum([1, 2], 3)), "(esperado: [1,2])");
console.log("Caso 5:", JSON.stringify(twoSum([-3, -1, 0, 2, 4, 6], 3)), "(esperado: [1,6])");
console.log("Caso 6:", JSON.stringify(twoSum([0, 0, 3, 4], 0)), "(esperado: [1,2])");
console.log("Caso 7:", JSON.stringify(twoSum([-1000, -1, 0, 1, 1000], 0)), "(esperado: [1,5])");
