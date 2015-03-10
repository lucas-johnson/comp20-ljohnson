function parse(){
	request = new XMLHttpRequest(); 

	request.open("GET", "data.json", true);

	request.onreadystatechange = parseData;

	request.send();
}

function parseData(){
	
	if(request.status == 200){

		converted = JSON.parse(request.responseText);

		document.getElementById("messages").innerHTML += "<p>" + converted[0]['content'] + " " + converted[1]['username'];

	}else{
		window.alert("Error!!!");
	}
}

