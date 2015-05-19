

var button = document.querySelector("button")
//console.log(button,"button")
button.addEventListener("click", function(e){
	e.preventDefault();
	var input = document.querySelector("#textMe")
//	console.dir(input.value)
	var ul = document.querySelector("#list")
		//console.log(list)
	//console.dir (input)
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = ""
	//console.log (input, "input")
})



