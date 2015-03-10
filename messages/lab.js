function parse(){
	request = new XMLHttpRequest(); 

	request.open("GET", "data.json", true);

	request.onreadystatechange = parseData;

	request.send();
}

function parseData(){
	
	if(request.readyState == 4){

		if(request.Status == 200){

			converted = JSON.parse(request.responseText);

			for(i = 0; i < 2; i++){
				document.getElementById("messages").innerHTML += "<p>" + converted[i]['content'] + " " + converted[i]['username'];
			}

		}else{
			window.alert("Error!!!");
		}
	}
}

