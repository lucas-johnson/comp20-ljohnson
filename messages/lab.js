function parseData(){
	converted = JSON.parse(request.responseText);

	for(i = 0; i < 2; i++){
		index messages.innerHTML += "<p>" + converted[i]["id"];
	}
	
}

function parse(){
	request = new XMLHttpRequest(); 

	request.open("GET", "data.json", true);

	request.onreadystatechange = parseData;

	request.send();
}

