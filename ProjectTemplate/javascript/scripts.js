function clearScreen(id){
	document.getElementById(id).innerHTML = "";
}

function resetForm(id){
	id.reset();
}

function happyForm(id){
	clearScreen(id);

	// header
	var header = document.createElement('h5')
	header.innerHTML = "Give us your feedback!"
	header.setAttribute('style', 'font-weight: bold; text-align: center;')

	// message
	var happyText = document.createElement('p')
	happyText.innerHTML = "We're glad you're enjoying the site!"
	happyText.setAttribute('id', 'happyText')
	happyText.setAttribute('style', 'font-size: 15px; font-weight: bold; padding: 5px; text-align: center;')

	//option list
	var listLabel = document.createElement('label')
	var list = document.createElement('select')
	var option1 = document.createElement('option')
	var option2 = document.createElement('option')
	var option3 = document.createElement('option')
	
	list.name = 'choices'
	list.id = 'choices'
	option1.id = 'pricing'
	option2.id = 'contact'
	option3.id = 'other'

	option1.innerHTML = 'Pricing'
	option2.innerHTML = 'Contact'
	option3.innerHTML = 'Other'

	list.appendChild(option1)
	list.appendChild(option2)
	list.appendChild(option3)

	listLabel.innerHTML = "What part of TinDog would you like to provide feedback on?"
	listLabel.style.marginLeft = "10px"
	list.setAttribute('style', 'margin-left: 10px; margin-bottom: 10px; width: 275px;')
	

	// text box label
	var textLabel = document.createElement('label')
	textLabel.innerHTML = "What did you love most about your experience?"
	textLabel.setAttribute('id', 'happyTextLabel')
	textLabel.setAttribute('style', 'margin-left: 10px;')

	// text box
	var happyBox = document.createElement('input')
	happyBox.setAttribute('type', 'text')
	happyBox.setAttribute('id', 'happyTextBox')
	happyBox.setAttribute('style', 'width: 275px; height: 100px; margin-left:10px;')

	// anon label
	var anonLabel = document.createElement('label')
	anonLabel.innerHTML = "Click the checkbox to remain anonymous"
	anonLabel.setAttribute('id', 'happyAnonLabel')
	anonLabel.setAttribute('style', 'font-size: .8rem; margin-top: 10px; margin-bottom: -20px; margin-left: 10px')

	// email
	var emailBox = document.createElement('input')
	emailBox.setAttribute('type', 'text')
	emailBox.setAttribute('id', 'happyEmailBox')
	emailBox.setAttribute('style', 'width: 250px; margin-left: 10px; margin-right: 10px')
	emailBox.placeholder = 'Enter your email address'

	// check box
	var checkBox = document.createElement('input')
	checkBox.setAttribute('type', 'checkbox')

	checkBox.addEventListener('change', function(e) {

		if (checkBox.checked) {
			emailBox.disabled = true
			emailBox.placeholder = 'Anonymous'
		} else {
			emailBox.disabled = false
			emailBox.placeholder = 'Enter your email address'
		}
	})

	// submit button
	var submit 				= document.createElement('input')
	submit.type				= 'button'
	submit.name				= 'madSubmit'
	submit.value			= "Submit"
	submit.className		= 'btn btn-primary'
	submit.style.width		= '275px'
	submit.style.marginTop 	= '10px'
	submit.style.marginLeft = '10px'
	submit.id 				= 'submitButton'
	submit.onclick			= hapForm

	// append everything
	var div = document.getElementById(id)
	// div.append(header)
	div.append(happyText)
	div.append(listLabel)
	div.append(list)
	div.append(textLabel)
	div.append(happyBox)
	div.append(anonLabel)
	div.append(emailBox)
	div.append(checkBox)
	div.append(submit)

	

	/* //header
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

	var anon = document.createElement('input');
	anon.setAttribute('id', 'anonCheckbox');
	anon.setAttribute('type', 'checkbox');

	var submit 				= document.createElement('input')
	submit.type				= 'button'
	submit.name				= 'madSubmit'
	submit.value			= "Submit"
	submit.className		= 'btn btn-primary'
	submit.style.width		= '275px'
	submit.style.marginTop 	= '10px'
	submit.style.marginLeft = '10px'

	var div = document.getElementById(id);
	div.append(header);
	div.append(happyText);
	div.append(textLabel);
	div.append(happyBox); */
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

	//option list
	var listLabel = document.createElement('label')
	var list = document.createElement('select')
	var option1 = document.createElement('option')
	var option2 = document.createElement('option')
	var option3 = document.createElement('option')
		
	list.name = 'choices'
	list.id = 'choices'
	option1.id = 'pricing'
	option2.id = 'contact'
	option3.id = 'other'
	
	option1.innerHTML = 'Pricing'
	option2.innerHTML = 'Contact'
	option3.innerHTML = 'Other'
	
	list.appendChild(option1)
	list.appendChild(option2)
	list.appendChild(option3)
	
	listLabel.innerHTML = "What part of TinDog would you like to provide feedback on?"
	listLabel.style.marginLeft = "10px"
	list.setAttribute('style', 'margin-left: 10px; margin-bottom: 10px; width: 275px;')

	// anon label
	var anonLabel = document.createElement('label')
	anonLabel.innerHTML = "Click the checkbox to remain anonymous"
	anonLabel.setAttribute('id', 'madAnonLabel')
	anonLabel.setAttribute('style', 'font-size: .8rem; margin-top: 10px; margin-bottom: -20px; margin-left: 10px')

	// email
	var emailBox = document.createElement('input')
	emailBox.setAttribute('type', 'text')
	emailBox.setAttribute('id', 'madEmailBox')
	emailBox.setAttribute('style', 'width: 250px; margin-left: 10px; margin-right: 10px')
	emailBox.placeholder = 'Enter your email address'

	// check box
	var checkBox = document.createElement('input')
	checkBox.setAttribute('type', 'checkbox')

	checkBox.addEventListener('change', function(e) {

		if (checkBox.checked) {
			emailBox.disabled = true
			emailBox.placeholder = 'Anonymous'
		} else {
			emailBox.disabled = false
			emailBox.placeholder = 'Enter your email address'
		}
	})

	// submit button
	var submit 				= document.createElement('input')
	submit.type				= 'button'
	submit.name				= 'madSubmit'
	submit.value			= "Submit"
	submit.className		= 'btn btn-primary'
	submit.style.width		= '275px'
	submit.style.marginTop 	= '10px'
	submit.style.marginLeft = '10px'
	submit.id 				= 'submitButton'
	submit.onclick			= angryForm
	//submit.onclick = function() { alert("it worked");}

	// append everything
	var div = document.getElementById(id)
	// div.append(header)
	div.append(madText)
	div.append(listLabel)
	div.append(list)
	div.append(textLabel)
	div.append(madBox)
	div.append(anonLabel)
	div.append(emailBox)
	div.append(checkBox)
	div.append(submit)
}

function suggestForm(id){
	clearScreen(id);

	// header
	// var header = document.createElement('h5')
	// header.innerHTML = "Give us your feedback!"
	// header.setAttribute('style', 'font-weight: bold; text-align: center;')

	// message
	var suggestText = document.createElement('p')
	suggestText.innerHTML = "Have a suggestion? Leave it below!"
	suggestText.setAttribute('id', 'suggestText')
	suggestText.setAttribute('style', 'font-size: 15px; font-weight: bold; padding: 5px; text-align: center;')

	// text box label
	var textLabel = document.createElement('label')
	textLabel.innerHTML = "What did you hate most about your experience?"
	textLabel.setAttribute('id', 'suggestTextLabel')
	textLabel.setAttribute('style', 'margin-left: 10px;')

	// text box
	var suggestBox = document.createElement('input')
	suggestBox.setAttribute('type', 'text')
	suggestBox.setAttribute('id', 'suggestTextBox')
	suggestBox.setAttribute('style', 'width: 275px; height: 100px; margin-left:10px;')

	// anon label
	var anonLabel = document.createElement('label')
	anonLabel.innerHTML = "Click the checkbox to remain anonymous"
	anonLabel.setAttribute('id', 'suggestAnonLabel')
	anonLabel.setAttribute('style', 'font-size: .8rem; margin-top: 10px; margin-bottom: -20px; margin-left: 10px')

	// email
	var emailBox = document.createElement('input')
	emailBox.setAttribute('type', 'text')
	emailBox.setAttribute('id', 'suggestEmailBox')
	emailBox.setAttribute('style', 'width: 250px; margin-left: 10px; margin-right: 10px')
	emailBox.placeholder = 'Enter your email address'

	// check box
	var checkBox = document.createElement('input')
	checkBox.setAttribute('type', 'checkbox')

	checkBox.addEventListener('change', function(e) {

		if (checkBox.checked) {
			emailBox.disabled = true
			emailBox.placeholder = 'Anonymous'
		} else {
			emailBox.disabled = false
			emailBox.placeholder = 'Enter your email address'
		}
	})

	// submit button
	var submit 				= document.createElement('input')
	submit.type				= 'button'
	submit.name				= 'suggestSubmit'
	submit.value			= "Submit"
	submit.className		= 'btn btn-primary'
	submit.style.width		= '275px'
	submit.style.marginTop 	= '10px'
	submit.style.marginLeft = '10px'
	submit.id 				= 'submitButton'
	submit.onclick			= sugForm

	// append everything
	var div = document.getElementById(id)
	// div.append(header)
	div.append(suggestText)
	// div.append(textLabel)
	div.append(suggestBox)
	div.append(anonLabel)
	div.append(emailBox)
	div.append(checkBox)
	div.append(submit)
}


// 1st button's submit handler
function hapForm(){

  let email = document.getElementById("happyEmailBox").value
  let anonBox = document.getElementById("happyEmailBox").placeholder
  let choice = document.getElementById("choices").value
  let feedback = document.getElementById("happyTextBox").value
  var anon

  feedback = choice + " - " + feedback

  if(anonBox == 'Anonymous'){
  	console.log('you is anon')
  	email = null
  	anon = true
  	submitToDb("Love", feedback, anon, email);
  }
  else if (anonBox == "Enter your email address" && email == ''){
  	alert('Please enter your email or click the checkbox')
  }
  else{
  	console.log("you is ", email)
  	anon = false
  	submitToDb("Love", feedback, anon, email);
  }
}


// 2nd button's submit handler
function angryForm(){

  let email = document.getElementById("madEmailBox").value
  let anonBox = document.getElementById("madEmailBox").placeholder
  let choice = document.getElementById("choices").value
  let feedback = document.getElementById("madTextBox").value
  var anon

  feedback = choice + " - " + feedback

  if(anonBox == 'Anonymous'){
  	console.log('you is anon')
  	email = null
  	anon = true
  	submitToDb("Hate", feedback, anon, email);
  }
  else if (anonBox == "Enter your email address" && email == ''){
  	alert('Please enter your email or click the checkbox')
  }
  else{
  	console.log("you is ", email)
  	anon = false
  	submitToDb("Hate", feedback, anon, email);
  }
}



// 3rd button's submit handler
function sugForm(){

  let email = document.getElementById("suggestEmailBox").value
  let anonBox = document.getElementById("suggestEmailBox").placeholder
  let feedback = document.getElementById("suggestTextBox").value
  var anon

  // console.log(anonBox)
  

  if(anonBox == 'Anonymous'){
  	console.log('you is anon')
  	email = null
  	anon = true
  	submitToDb("suggestion", feedback, anon, email);
  }
  else if (anonBox == "Enter your email address" && email == ''){
  	alert('Please enter your email or click the checkbox')
  }
  else{
  	console.log("you is ", email)
  	anon = false
  	submitToDb("suggestion", feedback, anon, email);
  }
}




// submits parameters to database
function submitToDb(selectedMood, feedback, anon, email){

	console.log(selectedMood, feedback, anon, email)

	let queryStr = "insert into surveyResponses(buttonClicked, feedback, anonymous, email) values ('" + selectedMood + "', '" + feedback + "', '" + anon + "', '" + email + "')";

	let testerStr = "SELECT buttonClicked FROM summer2020group2.surveyResponses"

	let insertTest = "INSERT INTO surveyResponses (buttonClicked, feedback, anonymous, email) VALUES ('happy', 'TESTTESTTEST', 1, 'gmail@gmail.com')"

	console.log(queryStr)

	MySql.Execute(
	 	"107.180.1.16",			// mySQL server
        "summer2020group2", 	// login name
        "!!Group2", 			// login password
        "summer2020group2",

        queryStr,

       function(data){
       	console.log(data.Result)
       }
    );

/*

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "107.180.1.16",
    user: "summer2020group2",
    password: "!!Group2",
    database: "summer2020group2"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO surveyResponses (buttonClicked, feedback, anonymous, email) VALUES (" + selectedMood + ", " + feedback + ", " + anon + ", " + email + ")";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

*/

  
}

