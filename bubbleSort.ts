function bubbleSort(array: number[]): number[] {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos se estiverem na ordem errada
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// const bubbleSort = (array): number[] => {
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 // Troca os elementos se estiverem na ordem errada
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// Exemplo de uso
const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Array não ordenado:", arr);
bubbleSort(arr);
console.log("Array ordenado:", sortedArr);
