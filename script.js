//Script file for BigSet 



var e = "<div class='block'><div class='entry'>";

var end = "<a href='#' class= 'delete'>X</a></div><div class='details'><textarea rows='5' cols='50' class='addDetail'></textarea></div></div>";



$(document).ready(function(){

	//initially hide menus
	$(".dropdown-menu").hide();
	$(".addBox").hide();
	$(".backHome").hide();
	$(".content").hide();
	
	
	$(".getStarted").click(function(){
		$(".getStarted").hide();
		$(".backHome").show();
		$(".content").fadeIn("slow");
	});
	
	$(".backHome").click(function(){
		$(".getStarted").fadeIn("slow");
		$(".backHome").hide();
		$(".content").hide();
	});
	
	
	
	
	
	//enter key adds a new part	
	$('.addBox').bind("enterKey",function(e){
		var inputText = $(".addBox").val();
		var newButton = "<li class= 'addButton'>" + inputText + "</li>";
		$(".newPart").before(newButton +"");
		$(".addBox").hide();
	});
		
		
	$('.addBox').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
	});	
		
	//toggles the dropdown menu	
	$(".dropdown-toggle").click(function(){
    	$(".dropdown-menu").toggle();
  	});
  	
  	
  	//pops open the textbox to enter a new part
  	$(".newPart").click(function(){
  		$(".addBox").toggle();
  		$(".addBox").select();
  		$(".addBox").focus();
  	});
  	
  	//delete "x" button
	$(document).on("click", ".delete", function(){
         $(this).parent().parent().remove();
     });
     
     //adds new part to the song
     $(document).on("click", ".addButton", function(){
     	var value = $(this).text();
     	console.log(e + value + end);
		$(".setList").append(e + value + end);
		$(".block").filter(":last").children(".details").hide();
	});
	
	
	//upon clicking on part, expands or retracts the info
	$(document).on("click", ".entry", function(){
		console.log("clicked");
		$(this).next().toggle();
	});
	
	//button to add text field button
	/*$(document).on("click", ".addDetailsButton", function(){
		//grabs the value of the preceding textbox
		var inputText =($(this).prev().val());
		//console.log(inputText);
		$(this).parent().append("<div class='notes'>" + inputText + '</div');
		$(this).prev().val('');
	});
	
	
	
	
	
	//enter key adds a new part	
	$('.addDetail').bind("enterKey",function(e){
		console.log("t");
		var inputText = $(this).val();
		//console.log(inputText);
		$(this).parent().append("<div class='notes'>" + inputText + "</div>");
		$(this).val('');
	
	});

		
		/*
	$(document).on("bind", ".addDetail", function(e){
		var inputText = $(this).val();
		//console.log(inputText);
		$(this).parent().append("<div class='notes'>" + inputText + "</div>");
		$(this).val('');
	});
	
	
	$(document).on("keyup", ".addDetail", function(e){
		if(e.keyCode == 13){
        	//$(this).trigger("enterKey");        
        	var inputText = $(this).val();
			console.log(inputText);
			$(this).parent().append("<div class='notes'>" + inputText + "</div>");
			$(this).val('');    
    	}
	});	
		
			
	
	$('.addDetail').keyup(function(e){
    if(e.keyCode == 13)
    {
    	console.log("trigger");
        $(this).trigger("enterKey");
    }
	});	*/
	
	
	
	
	 $(function() {
   		$( "#sortable" ).sortable();
    	$( "#sortable" ).disableSelection();
  });
	

	
	
});