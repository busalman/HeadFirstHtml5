function showTemps(){
	var $tempByHour = new Array();
		$tempByHour[0] = 59.2;
		$tempByHour[1] = 55.6;
		$tempByHour[2] = 40;
		$tempByHour[3] = 34.7;
		$tempByHour[4] = 32;
	
	for (var i = 0; i< $tempByHour.length; i++){
		var $theTemp = $tempByHour[i];
		var $id = "temp"+i;
		var $li = document.getElementById($id);
		
		if(i== 0){
			$li.innerHTML = "The temperature at noon was " + $theTemp;
		} else {
			$li.innerHTML = "The temperature at " + i + " was " + $theTemp;
		}
	}
}

window.onload = showTemps;