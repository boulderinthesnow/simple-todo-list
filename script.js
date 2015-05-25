
var ul = document.querySelector("#list")
var button = document.querySelector("button")
var $list = $("ul");

//console.log(button,"button")
button.addEventListener("click", function(e){
	e.preventDefault();
	var input = document.querySelector("#textMe")
//	console.dir(input.value)
	
		//console.log(list)
	//console.dir (input)
	li = document.createElement("li")
	//li.className = ""
	$list.append("<div id='new-div'> </div")
	console.log ($list)

	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	//var temp = console.log("foo")


	$("li").last().prepend('<input type="checkbox" name="checkMe" class="yo" id="cb" >')

	input.value="";
	//console.log (input, "input")
	//console.log($("li"));
	// console.log($("checkbox").val("yo"));
	//console.log(e.srcElement)
	//if ($(this))


// console.log($("input[type='checkbox']"));
// 	var checkbox = $("input[type='checkbox']:checked")//.change(function(){
// 		console.log(checkbox)





		
	    // if($(this).is(":checked")){
	    // 	console.log(this.next())
	    //     $("this").parent('className').addClass(".completed"); 
	    // }else{
	    //     $(this).parent().removeClass("redBackground");  
	    // }
	//});

})


$("li").click(function(event) {
	//console.log(event.target)
	//console.log(this);
	$(this).parent().addClass("completed")
	


	// var li = event.target
	// //var ohGod = $("li [type='checkbox']")
	// var please = li.querySelector("#cb")
	// console.log(please)

	//$(this).addClass("completed")
	// $(event.target).prop("checked")
	// $(event.target).prop("checked", true)

	//console.log($("input[type='checkbox']"));


//console.log(event)


	// var checkbox = $("input[type='checkbox']") //:checked
	// console.log(checkbox)

	// var parentOfTarget =  event.target.parentNode
	// if ($(this).is(":checked")) {
	 








})
	//console.log(parentOfTarget,"parentOfTarget")	
	//parentOfTarget.addClass("completed")




// $("[type='checkbox']").click(function() {
// 	console.log("this");
// });



// ul.addEventListener("click", function(e){
// 	if (e.srcElement.className){
// 		e.srcElement.className = ""
// 	} else {
// 		e.srcElement.className = "completed"
// 	}

// 	console.log (e.srcElement.nodeName)
// })

// ul.addEventListener("click", function(e){
// 	if (e.srcElement.className){
// 		e.srcElement.className = ""
// 	} else {
// 		e.srcElement.className = "completed"
// 	}

// 	console.log (e.srcElement)
// })



// add a box next to li, when checked, cross out item
