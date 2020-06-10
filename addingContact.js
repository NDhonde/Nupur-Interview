function showNewContactDiv() {
	document.querySelector("#addContactBtnId").disabled = true;
	document.querySelector("#allContactsDivId").style.visibility = "hidden";
	document.querySelector("#searchButtonId").style.visibility = "hidden";
	document.querySelector("#searchedResultsId").style.visibility = "hidden";
	document.querySelector("#searchInputId").style.visibility = "hidden";
	
	var newContactDiv = document.createElement('div');
	newContactDiv.style.width = "600px";
	newContactDiv.style.height = "400px";
	newContactDiv.style.backgroundColor = "white";
	newContactDiv.style.fontSize = "20px";
	newContactDiv.style.zIndex = 3;
	newContactDiv.style.position = "absolute";
	newContactDiv.style.top = "100px";
	newContactDiv.style.left = "40px";
	
	var contactImage = document.createElement('img');
	contactImage.src = "https://inspiredenergy.co.uk/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg";
	contactImage.id = "contactImageId";
	contactImage.style.width = "100px";
	contactImage.style.position = "relative";
	contactImage.style.top = "20px";
	contactImage.style.left = "470px";
	/*contactImage.onclick = function {
		document.body.style.opacity = "0.5";
	}
	*/
	newContactDiv.appendChild(contactImage);
	
	var firstNameHeading = document.createElement('h3');
	var firstNameText = document.createTextNode("First Name:");
	firstNameHeading.style.position = "relative";
	firstNameHeading.style.top = "-100px";
	firstNameHeading.style.left = "20px";
	firstNameHeading.appendChild(firstNameText);
	newContactDiv.appendChild(firstNameHeading);
	
	var firstNameInputBox = document.createElement('input');
	firstNameInputBox.setAttribute("type","text");
	firstNameInputBox.setAttribute("value","");
	firstNameInputBox.style.height = "20px";
	firstNameInputBox.style.position = "relative";
	firstNameInputBox.style.top = "-150px";
	firstNameInputBox.style.left = "150px";
	firstNameInputBox.id = "firstNameInputId";
	newContactDiv.appendChild(firstNameInputBox);
	
	var lastNameHeading = document.createElement('h3');
	var lastNameText = document.createTextNode("Last Name:");
	lastNameHeading.appendChild(lastNameText);
	lastNameHeading.style.position = "relative";
	lastNameHeading.style.top = "-130px";
	lastNameHeading.style.left = "20px";
	newContactDiv.appendChild(lastNameHeading);
	
	var lastNameInputBox = document.createElement('input');
	lastNameInputBox.setAttribute("type","text");
	lastNameInputBox.setAttribute("value","");
	lastNameInputBox.style.height = "20px";
	lastNameInputBox.style.position = "relative";
	lastNameInputBox.style.top = "-180px";
	lastNameInputBox.style.left = "150px";
	lastNameInputBox.id = "lastNameInputId";
	newContactDiv.appendChild(lastNameInputBox);
	
	var phoneNumberHeading = document.createElement('h3');
	var phoneNumberText = document.createTextNode("Phone Number:");
	phoneNumberHeading.appendChild(phoneNumberText);
	phoneNumberHeading.style.position = "relative";
	phoneNumberHeading.style.top = "-150px";
	phoneNumberHeading.style.left = "20px";
	phoneNumberHeading.appendChild(phoneNumberText);
	newContactDiv.appendChild(phoneNumberHeading);
	
	var phoneNumberInputBox = document.createElement('input');
	phoneNumberInputBox.setAttribute("type","text");
	phoneNumberInputBox.setAttribute("value","");
	phoneNumberInputBox.style.height = "20px";
	phoneNumberInputBox.style.position = "relative";
	phoneNumberInputBox.style.top = "-200px";
	phoneNumberInputBox.style.left = "190px";
	phoneNumberInputBox.id = "phoneNumInputId";
	newContactDiv.appendChild(phoneNumberInputBox);
	
	
	var emailHeading = document.createElement('h3');
	var emailText = document.createTextNode("Email:");
	emailHeading.appendChild(emailText);
	emailHeading.style.position = "relative";
	emailHeading.style.top = "-150px";
	emailHeading.style.left = "20px";
	newContactDiv.appendChild(emailHeading);
	
	var emailInputBox = document.createElement('input');
	emailInputBox.setAttribute("type","text");
	emailInputBox.setAttribute("value","");
	emailInputBox.style.height = "20px";
	emailInputBox.style.position = "relative";
	emailInputBox.style.top = "-200px";
	emailInputBox.style.left = "150px";
	emailInputBox.id = "emailInputId";
	newContactDiv.appendChild(emailInputBox);
	
	var addButton = document.createElement('button');
	var addButtonText = document.createTextNode("Add Contact");
	addButton.appendChild(addButtonText);
	addButton.style.position = "relative";
	addButton.style.top = "-150px";
	addButton.style.left = "150px";
	addButton.onclick = function() {
		if(checkNewContactInfo()) {
			var newContact = new contactObj();
			updateContact(newContact);
			newContactDiv.remove();
			document.querySelector("#addContactBtnId").disabled = false;	
			document.querySelector("#allContactsDivId").style.visibility = "visible";
			document.querySelector("#searchButtonId").style.visibility = "visible";
			document.querySelector("#searchedResultsId").style.visibility = "visible";
			document.querySelector("#searchInputId").style.visibility = "visible";
		}
		else {
			alert("Information not entered correctly!");
		}
	}
	newContactDiv.appendChild(addButton);
	
	var cancelButton = document.createElement('button');
	var cancelButtonText = document.createTextNode("Cancel");
	cancelButton.appendChild(cancelButtonText);
	cancelButton.style.position = "relative";
	cancelButton.style.top = "-150px";
	cancelButton.style.left = "150px";
	cancelButton.onclick = function() {
		newContactDiv.remove();
		document.querySelector("#addContactBtnId").disabled = false;	
		document.querySelector("#allContactsDivId").style.visibility = "visible";
		document.querySelector("#searchButtonId").style.visibility = "visible";
		document.querySelector("#searchedResultsId").style.visibility = "visible";
		document.querySelector("#searchInputId").style.visibility = "visible";
	}
	newContactDiv.appendChild(cancelButton);
	
	document.body.appendChild(newContactDiv);
}

var contactObj = function () {
	this.imageSrc		= 	document.querySelector("#contactImageId").src;
	this.firstName		= 	document.querySelector("#firstNameInputId").value;
	this.lastName		= 	document.querySelector("#lastNameInputId").value;
	this.phoneNumber	= 	document.querySelector("#phoneNumInputId").value;
	this.email			=	document.querySelector("#emailInputId").value;
}

function checkNewContactInfo() {
	var firstName = document.querySelector("#firstNameInputId").value;
	var lastName = document.querySelector("#lastNameInputId").value;
	var phoneNumber = document.querySelector("#phoneNumInputId").value;
	var email = document.querySelector("#emailInputId").value;
	
	if (phoneNumber.length != 10)
		return false;
	
	for(var i = 0; i < phoneNumber.length; i++) {
		var currCharCode = phoneNumber.charCodeAt(i);
		if( !(currCharCode >= 48 && currCharCode <= 57) )
			return false;
	}
	
	var count = 0;
	for(var i = 0; i < email.length; i++) {
		var currCharCode = email.charCodeAt(i);
		if( currCharCode == 64 || currCharCode == 46)
			count++;
	}
	if (count != 2) 
		return false;
	
	return true;
	
}