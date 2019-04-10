// 1. Задача

for (let i = 4; i <= 400; i++) {
	document.write(i + " ");
}

// 2. Задача

for (let i = 4; i <= 13; i+=3) {
	document.write(i + " "); 
}

// 3. Задача

for (let i = 654; i >= 0; i--) {
	document.write(i + " "); 
}

// 4. Задача

for (let i = 1983; i <= 2017; i++) {
	document.write(i + " "); 
}

// 5. Задача 

for (let i = -4; i <= 100; i+=2) {
	document.write(i + " "); 
}

// 6. Задача

for (let i = 1; i <= 9; i++) {
	document.write(i * 7 + ' ');
}

// 7. Задача 

for (let i = 1000; i <= 2000; i++) {
	document.write('&#'+i + ' ');
}

// 8. Задача

let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum = sum + i; 
}
document.write(sum);

// 9. Задача

let mult = 1;
for (let i = 1; i <= 50; i++) {
	mult = mult * i; 
}
document.write(mult);

// 10. Задача

const arrLength = prompt('Введите длину массива', '0');
const arr = [];
let str = 'x';

for (let i = 0; i < arrLength; i++) {
	arr.push(str);
    str = str + 'x';
}

document.write(arr);

// 11. Задача

const arrLength = prompt('Введите длину массива', '0');
const arr = [];


for (let i = 1; i <= arrLength; i++) {
	let str = '';
	for (let j = 0; j < i; j++) {
    str += i;
    }
arr.push(str);
}

document.write(arr);

// 12. Задача

function sumElement(arr) {
	var sum = 0;
	for (var i = 0 ; i < arr.length; i++) {
		sum += arr[i];
		if (sum > 10) {
			return i + 1;
		}
	}
}

document.write(sumElement([1, 2, 3, 4, 5, 6, 7, 8]));

// 13. Задача

const arr = [1, 2, 3, 4, 5, 6];
const reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {
	reverse.push(arr[i]);
}

document.write(reverse);

// 14. Задача

const arr = [-1, 0, 1, 2, 3, 4, 5, 8, 9, 11, 12, 13, 14];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
	if ( arr[i] > 0 && arr[i] < 10) {
    	newArr.push(arr[i]);
    }
}

document.write(newArr);


// 15. Задача

const arr = [-1, 0, 1, 2, 3, 4, 5, 8, 9, 11, 12, 13, 14];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
	if ( arr[i] % 2 == 0) {
    	newArr.push(arr[i]);
    }
}

document.write(newArr);


// 16. Задача