// JavaScript Document
$(document).ready(function(){

});

$(document).ready(function() {
	$('body').on('click', '#reviewbutton', function(event){
		review(event);
	});
});

function review(event)
{
	if($('#reviewtext').val()=='')
	{
		alert("please enter your review");
	}
	else {
		alert("Your review has been posted succesfully!");
	}
}
