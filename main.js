//main.js
/* 
This program shows the basic concepts of javascript
*/
console.log("Hello world");


let a = 2 + 5 * (9+5.5)/4;
console.log(a);// logging a on cosole
const training = "DCI Resources";  //cons cannot be changed

a = "Hello World"; // weekly-typed
// Async javascript

function greet(name){
	console.log("Hello" + name);
}
function test(){
	console.log("Testing when this will be printed");
}
setTimeout(test,5000);
greet("Padmaja");
console.log("Comes here");

const helloBtn = document.querySelector("#SayHello");


// helloBtn--->clicks--->callback(){alert("Hello");}
helloBtn.addEventListener("click",function(){
alert("Hello!!");	
});

helloBtn.addEventListener("mouseover",function(){	
	console.log("Mouse hover");
});

const languages = document.querySelectorAll("#coding li");
for(language of languages){ // in java for-each: for(Element:languages)
	
	language.addEventListener("click", function(){
		//this.classList.add("blueBg");
		this.classList.add("blueBg");
	});
}


