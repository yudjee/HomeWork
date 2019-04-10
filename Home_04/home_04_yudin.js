// 1. Задача

let arr = [];

let arrMake = function(element, quant) {
	for(i = 1; i <=quant; i++) {
    arr.push(element);
    }
}
arrMake('x', 5);
document.write(arr);


// 2. Задача

let arr = [[1, 2, 3], [4, 5], [6, 7]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
    sum +=arr[i][j];
    }
}
    
document.write(sum);


// 3. Задача 


let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
    	for(let k = 0; k < arr[i][j].length; k++) {
    		sum +=arr[i][j][k];
            }
    }
}
    
document.write(sum);



// 4. Задача 

function isNumberInRange(numb) {
	if(numb > 0 && numb < 10) {
    return true;
    } else {
    return false};
}

document.write(isNumberInRange(11));


// 5. Задача


let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
	if(arr[i] % 2 == 0) {
    newArr.push(arr[i])}
}

document.write(newArr);


// 6. Задача

let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
	if(arr[i] % 2 != 0) {
    newArr.push(arr[i])}
}

document.write(newArr);


// 7. Задача


let arr = [];

function del(number) {
	for( i = 1; i <= number; i++) {
    if(number % i == 0) {
    	arr.push(i);
    	}
    }
    return arr;
}

document.write(del(10));


// 8.1 задача

let new_arr = [];
 
let index = 0;
 
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        new_arr[index] = i * j;
        document.write(new_arr[index] + ' ');
        index++;
    }
    document.write('<br /> ');
}


// 8.2 Задача







// 9. Задача


function pow(number, exp) {
	let numbInExp = Math.pow(number, exp);
	return numbInExp 
}

alert(pow(10, 2));



// 10. Задача

function howOld(age) {
  
	if(age > 16) {
   
 	return "Добро пожаловать"
  
	} else {
    
	return "Вы еще молоды"
  
	}

}



document.write(howOld(15))


// 11. Задача 

function howOld(age) {
  
	if(age > 16) {
    
	return "Добро пожаловать"
  
	} else if (age <= 16) {
    
	return "Вы еще молоды"
  
	} else {
    
	return "Введите возраст"
  
	}

}



document.write(howOld())

// 12. Задача

<script>
function arrCalc(arr) {
  if (arr == undefined) {
    return "Введите массив"
  } else {
    return "Длина массива - " + arr.length
  }
}

document.write(arrCalc([1, 2]));
</script>



// 13. Задача 


let number = prompt('Введите число', '0');

function calcul(number) {
  if(number > 10) {
    return Math.pow(number, 2);
  } else if(number < 7) {
    return "Число меньше 7";
  } else if(number == 8 || number == 9) {
    return number - 1;
  }
} 

document.write(calcul(number));


// 14. Задача 