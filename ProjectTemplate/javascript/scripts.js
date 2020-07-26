function clearScreen(id){
	document.getElementById(id).innerHTML = "";
}

function resetForm(id){
	id.reset();
}

function happyForm(id){
	clearScreen(id);
	//header
	var header = document.createElement('h5');
	header.innerHTML = "Give us your Feedback!";
	header.setAttribute('style', 'font-weight:bold; text-align: center;')

	//creating label for text box
	var textLabel = document.createElement('label');
	textLabel.innerHTML = 'What did you most enjoy about your experience?'
	textLabel.setAttribute('id', 'happyTextLabel');
	textLabel.setAttribute('style', 'margin-left:10px;')

	//paragraph explaining form to user
	var happyText = document.createElement('p');
	happyText.setAttribute('id', 'happyText');
	happyText.innerHTML = "We're glad you're enjoying the site! Please provide more details on your experience for our team to look over below.";
	happyText.setAttribute("style", "font-size: 15px; font-weight: bold; padding: 5px; text-align: center;");

	//text form for user to provide details
	var happyBox = document.createElement('input');
	happyBox.setAttribute('type', 'text');
	happyBox.setAttribute('id', 'happyTextBox');
	happyBox.setAttribute('style', 'width: 275px; height: 100px; margin-left:10px;');

	// var anon = document.createElement('input');
	// anon.setAttribute('id', 'anonCheckbox');
	// anon.setAttribute('type', 'checkbox');

	var div = document.getElementById(id);
	div.append(header);
	div.append(happyText);
	div.append(textLabel);
	div.append(happyBox);

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

