function askQuestions() {

	var firstName = prompt("What is your first name?");
	var lastName = prompt("What is your last name?");
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt("How old are you?");
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var faveColour = prompt("What is your favourite colour?");
	faveColour = faveColour.toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}

	if (firstName.toLowerCase == 'general' && lastName.toLowerCase != 'assembly') {
		console.log('Greetings, General!');
	}

}

// When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	//Whe the user clicks an h3 element
	$('h3').on('click', function() {

		//Toggle the next section
		$(this).next().slideToggle(1000);

	});

});