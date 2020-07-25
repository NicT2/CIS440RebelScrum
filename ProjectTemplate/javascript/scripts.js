function clearScreen(id){
	document.getElementById(id).innerHTML = "";
}

function resetForm(id){
	id.reset();
}

function happyForm(id){
	clearScreen(id);
	var label = document.createElement('label');
	label.innerHTML = "Provide your Feedback!";

	var div = document.getElementById(id);
	div.append(label);

}

function madForm(id){
	clearScreen(id);
	var label = document.createElement('label');
	label.innerHTML = "Provide your Feedback!";

	var div = document.getElementById(id);
	div.append(label);

}

function suggestForm(id){
	clearScreen(id);
	var label = document.createElement('label');
	label.innerHTML = "Provide your Feedback!";

	var div = document.getElementById(id);
	div.append(label);

}

