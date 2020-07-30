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

	// header
	var header = document.createElement('h5')
	header.innerHTML = "Give us your feedback!"
	header.setAttribute('style', 'font-weight: bold; text-align: center;')

	// message
	var madText = document.createElement('p')
	madText.innerHTML = "How can we improve?"
	madText.setAttribute('id', 'madText')
	madText.setAttribute('style', 'font-size: 15px; font-weight: bold; padding: 5px; text-align: center;')

	// text box label
	var textLabel = document.createElement('label')
	textLabel.innerHTML = "What did you hate most about your experience?"
	textLabel.setAttribute('id', 'madTextLabel')
	textLabel.setAttribute('style', 'margin-left: 10px;')

	// text box
	var madBox = document.createElement('input')
	madBox.setAttribute('type', 'text')
	madBox.setAttribute('id', 'madTextBox')
	madBox.setAttribute('style', 'width: 275px; height: 100px; margin-left:10px;')

	// email
	var emailBox = document.createElement('input')
	emailBox.setAttribute('type', 'text')
	emailBox.setAttribute('id', 'madEmailBox')
	emailBox.setAttribute('style', 'width: 250px; margin-top: 10px; margin-left: 10px; margin-right: 10px')
	emailBox.placeholder = 'Check the box to leave your email'
	emailBox.disabled = true

	// check box
	var checkBox = document.createElement('input')
	checkBox.setAttribute('type', 'checkbox')

	checkBox.addEventListener('change', function(e) {

		if (checkBox.checked) {
			emailBox.disabled = false
		} else {
			emailBox.disabled = true
		}
	})

	// submit button
	var submit 				= document.createElement('input')
	submit.type				= 'button'
	submit.name				= 'madSubmit'
	submit.value			= "Submit"
	submit.className		= 'btn btn-light'
	submit.style.width		= '275px'
	submit.style.marginTop 	= '10px'
	submit.style.marginLeft = '10px'

	// append everything
	var div = document.getElementById(id)
	// div.append(header)
	div.append(madText)
	div.append(textLabel)
	div.append(madBox)
	div.append(emailBox)
	div.append(checkBox)
	div.append(submit)

	// var label = document.createElement('label');
	// label.innerHTML = "Provide your Feedback!";

	// var div = document.getElementById(id);
	// div.append(label);
}

function suggestForm(id){
	clearScreen(id);
	var label = document.createElement('label');
	label.innerHTML = "Provide your Feedback!";

	var div = document.getElementById(id);
	div.append(label);

}

