function selectionSort(array: number[]): number[] {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Troca os elementos se o mínimo não estiver na posição atual
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return array;
}

// Exemplo de uso
const array3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Array não ordenado:", arr);
selectionSort(arr);
console.log("Array ordenado:", sortedArr);
