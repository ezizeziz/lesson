/*const p = 3.14;


//let a = confirm(" Вам есть 18 лет?");
let a = prompt(" Вам есть 18 лет?", "Yes");


console.log(a);*/

/*let answer = [],
	questions = [
		" Как твое имя ? ",
		" Как фамилия ? ", 
		" сколько тебе лет ? "
	];


for (var i = 0; i < questions.length; i++) {
	answer[i] = prompt(questions[i]);
}


   console.log(answer);
   document.write(answer);*/

 /*  let age;
 age = prompt(" пиши свой age");
           	         alert(" Заходи ");
   }
   else {
   	alert(" Уйди от сюда!");
   }*/
/*
   function humanSayHello(argument) {
   	document.write("Hello " + argument + " !" + "<br>");
   }


   humanSayHello("Eziz"); 
   humanSayHello("ann");
   humanSayHello("ok");
   humanSayHello("cfffff");*/


/*   function calc(a, b) {
   	//document.write("a + " + "b " + "= " + a+b + "<br>");
   	console.log(a+b);
   } 

   calc(4, 4);
   calc(1, 4);
   calc(22, 4);
   calc(400, 4);*/








   function myFirstApp (name, age) {
   	alert("Привет, меня зовут " + name + " и это моя первая программа на JS! Поехали) ");

   	function showSkills() {   let skills = [   "Html", "Browser",
   	"JQuery", "CSS",    "Less", "SCSS",    "JavaScript", "C++",   "C", "C#",
   	"WordPress"   ];

   		document.write(" Я владею такими навыками как : " +  "<br>");
   		for(let i=0; i<skills.length; i++){
   			document.write("* " + skills[i] + "<br>");
   		}
   	}

   	showSkills();

   	function chekAge() {
   		age = prompt(" Укажите пожалуйста ваш возраст! ")
   		if(age > 18){
   			document.write("<br>" + " Проверяя ваш возраст, я хочу вам сказать,  ");
   			document.write(" Вы сможете стать frontend разработчиком! ");
   		} else {
   			document.write("<br>" + "  Проверяя ваш возраст, я хочу вам сказать, ");
   			document.write(" Ну не знаю , если только голова выдержит! ");
   		}
   	}

   	chekAge();

   	function calcPow(number) {
   		number = prompt(" Напишите число , квадрат которого хотели узнать! ")
   		document.write("<br>" + " <br> " + " Считая пальцеми , понял что, Квадрат от " + number + " равен - " + (number * number));
   	}

   	calcPow(4);

   }


   myFirstApp(" Эзиз ", 23);




