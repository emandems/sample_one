
//$(window).scroll(
 //   {
   //     previousTop: 0
  //  }, 
 //   function () {
   // var currentTop = $(window).scrollTop();
  //  if (currentTop < this.previousTop) {
 //       $(".sidebar em").text("Up"); /* optional for demo */
  //      $(".header").show(500);
 //   } else {
 //       $(".sidebar em").text("Down");
 //       $(".header").hide(500);
 //   }
 //   this.previousTop = currentTop;
//});


$(document).ready(function(){
	$("#hide").on({
		click: function(){
			$(".header-div").toggle(700);
		},
		
	});
});



//$(document).ready(function(){
//	$("#card").flip({
//		axis: 'y',
//		trigger: 'hover',
//		reverse: true
//	});
//});



$(document).ready(function(){
	$("#click").on({
		click:function(){
			$(this).hide();
			$("#box1").fadeIn();
			
			$(".collapse").fadeIn();
		},

	});
});

$(document).ready(function(){
	$(".collapse"). on({
		click:function(){
			$(this).hide();
			$("#box1").fadeOut();
			$("#click").show();
			},
	});
});


function luckyNumber(){
	var age =$("#age").val();
	var month=$("#month").val();

	console.log(age);
	console.log(month);

	var number = age/month*2; 

	console.log(number);

	$("#result").html("Your Lucky Number is " + number +"!");

}

 $("#birthButton").click(function(event){
 		event.preventDefault();
 		luckyNumber();
 });





