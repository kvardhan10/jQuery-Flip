count = 0;
score = 1;
check = [];
elements = [];

$("#container").css("visibility", "hidden");
$("#container2").css("visibility", "hidden");
$("#start").click(function(){
  $("#main-well").addClass("animated bounceOut");
	$("#container").css("visibility", "visible");
	$("#container").addClass("animated zoomInUp");
});

$("#replay").click(function(){
	location.reload();
});


function flip(event){
	count++;
	var id;
	var element = event.currentTarget;
	check.push(element.id);
	element.style.transform = "rotateY(180deg)";
	elements.push(element);
	console.log(count);
	if (count == 2) {
		if (check[0] == check[1]) {
			check = [];
			// sleep for 2 seconds
			elements[0].style.visibility = "hidden";
			element.style.visibility = "hidden";
			// setTimeout(function(){
			// 	element.style.visibility = "hidden";
			// 	elements[0].style.visibility = "hidden"; <-this
			// }, 2000);
			// can't implement since during the delay of 2s, the control goes to elements=[] and 'this' won't execute :(
			elements = [];
			console.log("flow reached");
			count = 0;
			score++;
			console.log("score:" + score);
			if (score == 9) {
				$("#container2").css("visibility", "visible");
				$("#container2").addClass("animated zoomIn");
				$("#container").css("visibility", "hidden");
			}
		}
		else{
			check = [];
			element.style.transform = "rotateY(360deg)";
			//sleep for 1 second
			elements[0].style.transform = "rotateY(360deg)";
			count = 0;
			elements = [];
		}
	}
}
