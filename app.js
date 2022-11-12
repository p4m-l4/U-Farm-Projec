const firstName = document.getElementsByName('firstName');
const lastName = document.getElementsByName("lastName");
const gender = document.getElementsByName("gender");
const birthDate = document.getElementsByName("birthDate");
const phoneNumber = document.getElementsByName("phoneNumber");
const NIN = document.getElementsByName("NIN");
const userID = document.getElementsByName("userID");
const registrationDate = document.getElementsByName("registrationDate");
const activities = document.getElementsByName("activities");
const ward = document.getElementsByName("ward");
const wardDuration = document.getElementsByName("wardDuration");
const residence = document.getElementsByName("residence");
const password = document.getElementsByName("password");
const confirmpassword = document.getElementsByName("confirmpassword");
const directionsHome = document.getElementsByName("directionsHome");
const min = 3;
const max = 25;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const alpha = /^[A-Za-z]+$/
const num = /^[0-9]+$/
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validateInputs = () => {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const genderValue = gender.value.trim();
	const birthDateValue = birthDate.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();
	const NINValue = NIN.value.trim();
	const userIDValue = userID.value.trim();
	const registrationDateValue = registrationDate.value.trim();
	const activitiesValue = activities.value.trim();
	const wardValue = ward.value.trim();
	const wardDurationValue = wardDuration.value.trim();
	const residenceValue = residence.value.trim();
	const passwordValue = password.value.trim();
	const confirmpasswordValue = confirmpassword.value.trim();
	const directionsHomeValue = directionsHome.value.trim();

if (firstName === "") {
		alert("First Name is required");
		firstName.style.border = "3px solid red";
		return false;
	}

	if (firstName.length < min || firstName.length > max) {
		alert("Name characters not in range");
		firstName.style.border = "3px solid red";
		return false;
	}

	if (firstName.match(alpha)) {
		lastName.focus();
		return true;
	} else {
		firstName.style.border = "3px solid red";
		alert("User name cannot contain special characters");
	}
};
// 	if (firstNameValue === "") {
// 		setError(firstName, "First name is required");
// 		firstName.style.border = "3px solid red";
// 	} else {
// 		setSuccess(firstName);
// 		lastName.focus()
// 	}
// 	if (lastNameValue === "") {
// 		setError(lastName, "Last name is required");
// 	} else {
// 		setSuccess(lastName);
// 	}
// 	if (genderValue === "") {
// 		setError(gender, "Gender is required");
// 		gender.style.border = "3px solid red";
// 	} else {
// 		setSuccess(gender);
// 	}
// 	if (birthDateValue === "") {
// 		setError(birthDate, "Date of birth name is required");
// 	} else {
// 		setSuccess(birthDate);
// 	}
// 	if (phoneNumberValue === "") {
// 		setError(phoneNumber, "Phone number is required");
// 	} else {
// 		setSuccess(phoneNumber);
// 	}
//     if (NINValue === "") {
// 		setError(NIN, "National ID number is required");
// 	} else {
// 		setSuccess(NIN);
// 	}
//     if (userIDValue === "") {
// 		setError(userID, "Unique farmer ID is required");
// 	} else {
// 		setSuccess(userID);
// 	}
//     if (registrationDateValue === "") {
// 		setError(registrationDate, "Registration date is required");
// 	} else {
// 		setSuccess(registrationDate);
// 	}
//     if (activitiesValue === "") {
// 		setError(activities, "Activities involved in are required");
// 	} else {
// 		setSuccess(activities);
// 	}
//     if (wardValue === "") {
// 		setError(ward, "Ward of residence is required");
// 	} else {
// 		setSuccess(ward);
// 	}
//     if (wardDurationValue === "") {
// 		setError(wardDuration, "Duration of stay in ward is required");
// 	} else {
// 		setSuccess(wardDuration);
// 	}
//     if (residenceValue === "") {
// 		setError(residence, "Type of residence is required");
// 	} else {
// 		setSuccess(residence);
// 	}
//     if (passwordValue === "") {
// 		setError(password, "Please input password");
// 	} else if (passwordValue.length < 8) {
//         setError(password, 'Password must have at-least 8 characters.')
//     } else {
// 		setSuccess(password);
// 	}
//     if (confirmpasswordValue === "") {
// 		setError(confirmpassword, "Please confirm your password");
// 	} else if (confirmpasswordValue !== passwordValue){
//         setError(confirmpassword, "Password does not match");
//     }else {
// 		setSuccess(confirmpassword);
// 	}
//     if (directionsHomeValue === "") {
// 		setError(directionsHome, "Please input the directions to your home of residence");
// 	} else {
// 		setSuccess(directionsHome);
// 	}
// };

