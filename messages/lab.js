function parseData(){
	converted = data.json.parse(request.responseText);

	for(i = 0; i < 2; i++){
		index.html.getElementByID("messages").innerHTML += "<p>" + converted[i]["id"];
	}
	
}

function parse(){
	request = new XMLHttpRequest(); 

	request.open("GET", "data.json", true);

	request.onreadystatechange = parseData;

	request.send();
}

