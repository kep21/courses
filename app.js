/*const obj = {
	name:"Serg",
	age:20,
	isMarried:false
};
console.log(obj.name);
console.log(obj["age"]);

let arr= ['plum.png', 'orange.jpg', 6,'apple.bmp',{},[]];
alert(arr[1]);

const result =confirm("Are you here?");
console.log(result);
const answer =prompt ("Вам есть 18?","");
console.log(typeof(answer));

const answers =[];

//answers[0] = prompt("как ваше имя?");
//answers[1] = prompt("сколько вам лет?");
//answers[2] = prompt("какой ваш пол?");

console.log(typeof(answers));

const category ="toys";
console.log(`https://someurl.com/${category}/5`);

const user="Krek";
alert(`HELLO, ${user}`);

const isChecked = true,
isClose = true;
console.log(isChecked && isClose);

const Yes = true,
No = false;
console.log(Yes || No);

console.log(2 + 2 * 2 !=8);*/


//создать переменную numberOfFilms и в нее поместить ответ от пользователя на вопрос:Сколько фильмов ви уже посмотрели?

//const numberOfFilms = +prompt("Сколько фильмов ви уже просмотрели?", "");



/*Создать обєкт  personalMovieDB и в него поместить такие свойства:
- count-сюда передается ответ на первий вопрос
- movies- в єто свойство поместить пустой обєкт
- actors- тоже  поместить пустой обєкт
- genres- сюда поместить пустой массив
-privat - в єто свойство поместить Boolean(логическое) значение false*/

/*const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};*/



/*Задайте пользователю по два вопроса:
- "Один из последних просмотренних фильмов?"
- "На сколько его оцените? "
Ответи поместить в отдельние переменние
Записать ответи в обьект movies в формате:
movies:{
	'logan':"8.1"
}*/

/*const a = prompt("Один из последних просмотренних фильмов?", " "),
	b = prompt("На сколько оцените его?", ""),
	c = prompt("Один из последних просмотренних фильмов?", " "),
	d = prompt("На сколько оцените его?", " ");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);*/

//console.log(14 % 4);


// Тернарний оператор (бо є 3 аргументи)
const num = 50;
// 1 аргумент    2 аргумент          3 аргумент
(num === 50) ? console.log("ok!") : console.log("Eror!");

// if

const nums = 50;
if (nums < 49) {
	console.log("Error");
}
else if (nums > 100) {
	console.log("Много");
}
else {
	console.log("ok!");
}

// switch

const numb = 50;
switch (numb) {
	case 49:
		console.log("Неверно");
		break;
	case 100:
		console.log("Неверно");
		break;
	case 50:
		console.log("В точку");
		break;
	default:
		console.log("Не в єтот раз");
		break;
}


// Цикли

let number = 50;

/*while(number<55) {
	console.log(number);
	number++;
}*/

do {
	console.log(number);
	number++;
} while (number<55);

// for цикл

 for (let i = 1; i<10; i++) {
	 if (i===6) {
		 //break;
		 continue;
	 }
	 console.log(i);
 }
