
// when submit botton is pressed append text from inputBox into list
$list = $("ul")
$addToList = $("#inputBox")
 input = $( "form input:checkbox" )

$("button").on("click",function(event){
	event.preventDefault()
	// $list.append("<div> </div>")
	$list.append('<li class="checkbox-group"></li>')

	$("li:last").text($addToList.val())
	$addToList.val("") // clear input after added to list
	$("li:last").prepend('<input type="checkbox" name="checkMe" id="cb" class="yo" >') // add checkbox to last
	$("li:last").prepend('<img src="plant2.png" height="25px" width="25px" class="plant hvr-bob">')
	console.log ($('input:checkbox'))
 // input = $('.checkbox-group:last')
	// input.append('<img src="plant2.png" height="25px" width="25px" class="items">')

})
/// var input = $( "form input:checkbox" )
 //console.log(input);

 $(list).click(function(evt){
	//evt.preventDefault()
	//console.log(evt);
	var item = $(evt.target)
	//console.log(item.is(":checkbox"));
	//console.log(item.class)
	if (item.is(":checkbox")) {
		console.log(event.target);
		if (item.parent().hasClass("completed")) {
			item.parent().removeClass("completed")
		} else {
			item.parent().addClass("completed")
		}
	}

	// console.log(item.is(":image"));
	//console.log(item.attr("class"));

	if (item.attr("class") === "plant hvr-bob") {
		//console.log("foo")
		item.parent().remove()

	}

})

