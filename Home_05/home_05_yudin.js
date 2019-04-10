// 1. Задача

function show(n) {
	if( n >= 0) {
        show(n-1)
        document.write(n);
    }
}

show(10);



// 2. Задача

function count(A, B) {
	if ( A === B) {
    return A
    } else if( A < B) {
     return A + ' ' + count(A + 1, B);
     } else{
        return count(A, B + 1) + ' ' + B;
    }
}

document.write(count(11, 6));


// 3. Задача

function quant(num) {
	if (num < 10) {
    return num;
    } else {
    	return num%10 + quant(Math.floor(num/10))
    }
}

document.write(quant(12345));

// 4. Задача

function quant(num) {
	if (num < 10) {
    return num;
    } else {
    	return num%10 + ' ' + quant(Math.floor(num/10))
    }
}

document.write(quant(12345));


// 5. Задача

function quant(num) {
	if (num < 10) {
    return num;
    } else {
    	return quant(Math.floor(num/10)) + ' ' + num%10
    }
}

document.write(quant(12345));


// 6. Задача

let arr1 = ['a', 'b','c'];
let arr2 = [1, 2, 3];

arr1.push(arr2);

document.write(arr1);

// 7. Задача

let arr1 = ['a', 'b','c'];

arr1.push(1, 2, 3);

document.write(arr1);

// 8. Задача

let arr1 = [1, 2, 3];

arr1.unshift(4, 5, 6);

document.write(arr1);


// 9. Задача

let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1.slice(0, 3);

document.write(arr2);


// 10. Задача

let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1.slice(3);

document.write(arr2);


// 11. Задача

let arr1 = [1, 2, 3, 4, 5];

arr1.splice(1,2);

document.write(arr1);


// 12. Задача

let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1.splice(1,3);

document.write(arr2);


// 13. Задача


let arr1 = [1, 2, 3, 4, 5];

let arr2 = ['a', 'b', 'c'];

arr1.splice(3, 0, [arr2]);

document.write(arr1);


// 14. Задача

let arr1 = [1, 2, 3, 4, 5];

arr1.splice(1, 0, 'a', 'b');
arr1.splice(6, 0, 'c');
arr1.splice(8, 0, 'e');

document.write(arr1);