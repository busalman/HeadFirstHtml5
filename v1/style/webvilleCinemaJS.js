window.onload = function init(){
	var nextShowing = movie1.getNextShowing();
	alert (nextShowing);
	nextShowing = movie2.getNextShowing();
	alert (nextShowing);
	nextShowing = banzaiMovie.getNextShowing();
	alert (nextShowing);
}

function getNextShowing(movie){
	var now = new Date().getTime();
	
	for (var i = 0 ; i< movie.showtimes.length; i++){
		var showtime = getTimeFromString(movie.showtimes[i]);
		if ((showtime - now) > 0){
			return "Next showing of " + movie.title + " is " + movie.showtimes[i];
			
		} 
		
	}
	return null;
	
}

function getTimeFromString(timeString){
	var theTime = new Date();
	var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	
	return theTime.getTime();
	
}

// Objects

var movie1 ={
	title: "Forbidden Planet",
	genre: "Classic Sci-fi",
	rating: 5,
	showtimes: ["1:00am", "3:00pm", "6:00pm"],
	getNextShowing: function (){
						var now = new Date().getTime();
						
						for (var i = 0 ; i< this.showtimes.length; i++){
							var showtime = getTimeFromString(this.showtimes[i]);
							if ((showtime - now) > 0){
								return "Next showing of " + this.title + " is " + this.showtimes[i];
								
							} 
							
						}
						return null;
						
					}
};

var movie2 ={
	title: "Plan 9 from Outer Space",
	genre: "Cult Classic",
	rating: 4,
	showtimes: ["5:00pm", "9:00pm"],
	getNextShowing: function (){
						var now = new Date().getTime();
						
						for (var i = 0 ; i< this.showtimes.length; i++){
							var showtime = getTimeFromString(this.showtimes[i]);
							if ((showtime - now) > 0){
								return "Next showing of " + this.title + " is " + this.showtimes[i];
								
							} 
							
						}
						return null;
						
					}
};

var banzaiMovie ={
	title: "Bukaroo Banzai",
	genre: "Cult Classic",
	rating: 5,
	showtimes: ["3:00pm", "5:00pm", "9:00pm"],
	getNextShowing: function (){
						var now = new Date().getTime();
						
						for (var i = 0 ; i< this.showtimes.length; i++){
							var showtime = getTimeFromString(this.showtimes[i]);
							if ((showtime - now) > 0){
								return "Next showing of " + this.title + " is " + this.showtimes[i];
								
							} 
							
						}
						return null;
						
					}
}