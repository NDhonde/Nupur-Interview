function initializeContactTable() {
	var contactTable = document.createElement('table');
	contactTable.style.color = "white";
	for (var i = 65; i <= 90; i++) {
		var newTableBody = document.createElement('tbody');
		newTableBody.id = String.fromCharCode(i) + "ContactsSectionId";
		var newRow = document.createElement('tr');
		newRow.style.height = "20px";
		newRow.style.color = "white";
		var newHeading = document.createElement('th');
		newHeading.style.color = "white";
		var newTextNode = document.createTextNode(String.fromCharCode(i));
		console.log(String.fromCharCode(i));
		newHeading.appendChild(newTextNode);
		newRow.appendChild(newHeading);
		newTableBody.appendChild(newRow);
		contactTable.appendChild(newTableBody);
	}
	document.querySelector("#allContactsDivId").appendChild(contactTable);
}

function displayContact(contactObj) {
	var contactDiv = document.createElement('div');
	contactDiv.style.width = "600px";
	contactDiv.style.height = "400px";
	contactDiv.style.backgroundColor = "white";
	contactDiv.style.fontSize = "20px";
	contactDiv.style.zIndex = 3;
	contactDiv.style.position = "absolute";
	contactDiv.style.top = "100px";
	contactDiv.style.left = "40px";
	
	var contactImage = document.createElement('img');
	contactImage.src = contactObj.imageSrc;
	contactImage.style.width = "100px";
	contactImage.style.position = "relative";
	contactImage.style.top = "20px";
	contactImage.style.left = "470px";
	/*contactImage.onclick = function {
		document.body.style.opacity = "0.5";
	}
	*/
	contactDiv.appendChild(contactImage);
	
	var contactNameHeading = document.createElement('h3');
	var contactNameText = document.createTextNode(contactObj.firstName + " " + contactObj.lastName);
	contactNameHeading.style.position = "relative";
	contactNameHeading.style.top = "-100px";
	contactNameHeading.style.left = "20px";
	contactNameHeading.appendChild(contactNameText);
	contactDiv.appendChild(contactNameHeading);
	
	var phoneNumberHeading = document.createElement('p');
	var phoneNumberText = document.createTextNode(contactObj.phoneNumber);
	phoneNumberHeading.appendChild(phoneNumberText);
	phoneNumberHeading.style.position = "relative";
	phoneNumberHeading.style.top = "-110px";
	phoneNumberHeading.style.left = "20px";
	phoneNumberHeading.appendChild(phoneNumberText);
	contactDiv.appendChild(phoneNumberHeading);
	
	var emailHeading = document.createElement('p');
	var emailText = document.createTextNode(contactObj.email);
	emailHeading.appendChild(emailText);
	emailHeading.style.position = "relative";
	emailHeading.style.top = "-120px";
	emailHeading.style.left = "20px";
	contactDiv.appendChild(emailHeading);
	
	var deleteButton = document.createElement('button');
	var deleteButtonText = document.createTextNode("Delete Contact");
	deleteButton.appendChild(deleteButtonText);
	deleteButton.style.position = "relative";
	deleteButton.style.top = "-130px";
	deleteButton.style.left = "150px";
	deleteButton.style.height = "20px";
	deleteButton.style.width = "100px";
	deleteButton.onclick = function() {
		var contactRowId = contactObj.firstName + contactObj.lastName + "Id";
		document.querySelector("#" + contactRowId).remove();
		contactList.splice(contactList.indexOf(contactObj),1);
		contactDiv.remove();
	}
	contactDiv.appendChild(deleteButton);
	
	var closeButton = document.createElement('button');
	var closeButtonText = document.createTextNode("Close");
	closeButton.appendChild(closeButtonText);
	closeButton.style.position = "relative";
	closeButton.style.top = "-130px";
	closeButton.style.left = "150px";
	closeButton.style.height = "50px";
	closeButton.style.width = "100px";
	closeButton.onclick = function() {
		contactDiv.remove();
	}
	contactDiv.appendChild(closeButton);
	
	document.body.appendChild(contactDiv);
}
			