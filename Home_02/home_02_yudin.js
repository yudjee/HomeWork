// 1. Задача

const a = 3;
const b = 3;
let x = 400;

if (a > b) {
	x = a + b/2*4;
} else if (a < b) {
	x = a - b + 2/b*4;
} 
	
console.log(x)



// 2. Задача - 1

const x = prompt("Введите значение X", '');
const y = prompt("Введите значение Y", '');

if (y > 0 && (-3*x + 4*y - 12) < 0 && (-3*x - 4*y + 12) > 0) {
	alert("точка в области");
} else {
	alert("точка не в области");
}

// 2. Задача - 2 (работает не корректно)

const x = prompt("Введите значение X", '');
const y = prompt("Введите значение Y", '');

if (y >= -1 && y <= 1 && (2*x + 2*y) >= 0 && (2*x - 2*y) <= 0) {
	alert("точка в области");
} else {
	alert("точка не в области");
}

// 3. Задача

let day = prompt('Какой день недели?');

switch (day) {
	case 'понедельник':
		alert('понедельник');
		break;
	case 'вторник':
		alert('вторник');
		break;
	case 'среда':
		alert('среда');
		break;
	case 'четверг':
		alert('четверг');
		break;
	case 'пятница':
		alert('пятница');
		break;
	case 'суббота':
		alert('суббота');
		break;
	case 'воскресенье':
		alert('воскресенье');
		break;
	default: alert('Такого дня недели не существует!');
}


// 4.Задача

const firstNumb = prompt('Введите число 1', 0);
const secondNumb = prompt('Введите число 2', 0);

if (firstNumb > secondNumb) {
	alert(firstNumb)
} else {
	alert(secondNumb)
}


// 5. Задача 

const firstNum = prompt('Введите число 1', 0);
const secondNum = prompt('Введите число 2', 0);

if (+firstNum > +secondNum) {
	alert('Первое число больше')
} else if(+firstNum === +secondNum) {
	alert('Числа равны')
} else if(+firstNum < +secondNum) {
	alert('Второе число больше');
} else {
	alert('Я просил ввести числа!!!')
}


// 6. Задача

const flat = prompt('Введите номер квартиры', 0);

if (flat >= 1 && flat <= 20) {
	alert('Квартира в первом подъезде')
} else if (flat > 20 && flat <= 48) {
	alert('Квартира во втором подъезде')
} else if (flat > 48 && flat <=90) {
	alert('Квартира в третьем подъезде')
} else {
	alert('Введите корректный номер квартиры')
}



// 7. Задача

const login = prompt('Введите логин', 0);
const pass = prompt('Введите пароль', 0);

if (login == 'ivan' && pass == '334455' ||
 	login == 'alex' && pass == '777' ||
 	login == 'petr' && pass == 'b5678') {
	alert('Добро пожаловать!')
} else {
	alert('Ошибка входа')
}



// 8. Задача

const age = prompt("Введите Ваш возраст", '');

if (age >= 16) {
	alert(age + " лет. Добро пожаловать")
} else {
	alert(age + " лет. Вход воспрещен")
};



// 9. Задача

const exp = prompt("Введите Ваш стаж", '0');

if (exp >=0 && exp < 3) {
	alert("Надбавка - 0%")
} else if (exp >=3 && exp < 10) {
	alert("Надбавка - 10%")
} else if (exp >=10 && exp < 20) {
	alert("Надбавка - 20%")
} else if (exp >= 20) {
	alert("Надбавка - 25%")
}

// 10. Задача

const quant = prompt("Кол-во товара", '');

if ((quant === 1) || (quant > 20 && quant % 10 === 1)) {
let word = " товар";
	} else if ((quant >= 2 && quant <= 4) || (quant > 20 && quant % 10 >= 2 && quant % 10 <= 4)) {
    word = " товара";
	} else {word = " товаров"};

alert(quant + word);

