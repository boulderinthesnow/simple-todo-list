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
	$("li:last").append('<input type="checkbox" name="checkMe" id="cb" class="yo" >') // add checkbox to last

 input = $( "form input:checkbox" )
// /.log(input);




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
	// event.preventDefault()
	//console.log("anyhtingadfsdf")

//console.log($(this).parent());

	// if ( $(this).parent().hasClass("completed") === false) {
	// 	console.log("COMPLETED", event.target.parentNode)
	// 	$(this).parent().addClass("completed")
	// } else {
	// $(this).parent().removeClass("completed")
	// console.log("INCOMPLETE", event.target.parentNode)
	// }

})
