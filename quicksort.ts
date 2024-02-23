function quickSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        }

        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Exemplo de uso
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Array não ordenado:", arr);
const sortedArr = quickSort(arr);
console.log("Array ordenado:", sortedArr);
