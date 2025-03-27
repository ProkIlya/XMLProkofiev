// 1. Функция перемещения элемента в массиве
export function moveElement(arr, from, to) {
    const element = arr[from];
    arr.splice(from, 1);
    arr.splice(to, 0, element);
    return arr;
}

// 2. Функция склеивания строк
export function concatenate(arr, separator) {
    return arr.join(separator);
}

// 3. Функция суммы уникальных элементов
export function sumUnique(arr) {
    const unique = new Set(arr);
    return [...unique].reduce((sum, num) => sum + num, 0);
}

// 4. Функция проверки палиндрома (2 решения)
export function isPalindrome(str) {
    // Решение 1: с использованием методов строки и массива
    const cleanStr = String(str).toLowerCase().replace(/\s+/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');

    // Решение 2: с использованием цикла
    // const cleanStr = String(str).toLowerCase().replace(/\s+/g, '');
    // const len = cleanStr.length;
    // for (let i = 0; i < len / 2; i++) {
    //     if (cleanStr[i] !== cleanStr[len - 1 - i]) {
    //         return false;
    //     }
    // }
    // return true;
}