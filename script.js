var arr1 = [3, 7, 5, 10, 4];

// 1. додати в кінець масиву число 10 а на початок масиву число 0

// 2. видалити число 3 з масиву

// 3. вивести в консоль всі числа які менші за 6

//1. додати в кінець масиву число 10 а на початок масиву число 0

let arr1 = [3, 7, 5, 10, 4],
    end = arr1.push(10),
    start = arr1.unshift(0);
console.log(arr1);


// 2. видалити число 3 з масиву
var arr1 = [3, 7, 5, 10, 4];
var deleted = arr1.shift();
console.log(arr1);

// 3. вивести в консоль всі числа які менші за 6
var arr1 = [3, 7, 5, 10, 4].forEach((i) => {
    console.log(i < 6);
});