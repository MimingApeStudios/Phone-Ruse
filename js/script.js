


function validateForm(time) {
	 var timer;
	 var x = time;
	 var waitMessage = "You will receive your fake call shortly: " + x + " minute(s)." ;
	 var endTime;
	 var minutes;
		 
	  // document.getElementById("demo").innerHTML = x;
    //console.log("before parse " + x);
    
	 if (x == 1){
		 document.getElementById("confirmation").innerHTML = waitMessage;
		 console.log("you selected " +x+ " minute")
		  //Setup call
		 timer = setTimeout (call, 60000 );
		 console.log("call called");
		 // Start Countdown
		 minutes = x;
		 var countdown = startTimer(minutes);	 
		 console.log("countdown called");
	 } else if (x == 5){
		 document.getElementById("confirmation").innerHTML = waitMessage;
		 console.log("you selected " +5+ " minutes")
		 //Setup call
		 timer = setTimeout (call, 60000 * x );
		 console.log("call called");
		 // Start Countdown
		 minutes = x;
		 var countdown = startTimer(minutes);	 
		 console.log("countdown called");

	 } else if (x == 10){
		 document.getElementById("confirmation").innerHTML = waitMessage;
		 console.log("you selected " +10+ " minutes")
		 //Setup call
		  timer = setTimeout (call, 60000 * x );
		 console.log("call called");
		 // Start Countdown
		 minutes = x;
		 var countdown = startTimer(minutes);	 
		 console.log("countdown called");

	 } else {
		 alert("error");
		 return false;
	 }
}

// PhoneCall Application
function call() {
	window.location = "call.html";
}

// End Call Application
function endCall() {
	window.location = "endCall.html";
}

// Boss Key
function bossKey() {
	window.location = "bossKey.html";
}

// Conversation
function playConversation() {
	for (i=0; i < 5; i++){
		var audio = new Audio('conversation.mp3');
		audio.play();
	}
}


//Countdown
function startTimer(minutes) {   
	   console.log("Minutes Started" + minutes);
	   if (minutes == "undefined" || minutes == "") {
		document.getElementById("countdown").innerHTML = "00:00";

	} else {
		var roundupMinutes = Math.round(minutes *100)/100;
	   document.getElementById("countdown").innerHTML = roundupMinutes  + " minutes(s) left";
	   seconds = minutes  * 60000;
	   seconds = seconds - 1000;
	   setTimeout (secondsAdjustment, 1000, seconds) 
	} 
}
// Adjust the number of seconds
function secondsAdjustment(seconds) {
	console.log("seconds received " + seconds);
	minutes = seconds / 60 / 1000;
	console.log("sminutes left " + minutes);
	startTimer(minutes); 
}
