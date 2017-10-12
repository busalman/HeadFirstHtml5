window.onload = function init(){
	
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlayList();
}

function handleButtonClick(){
	
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	
	var li = document.createElement("li");
	li.innerHTML = songName;
	var ul = document.getElementById("playlist");
 
	if (songName.trim() == ""){
		alert("Please enter song ");
	}else {
	    ul.appendChild(li);
		save(songName)
	}

}