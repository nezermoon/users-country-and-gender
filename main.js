const UI = {
	NAME_TEXT: document.querySelector('.input_name'),
	BUTTON: document.querySelector('.input_submit'),
	FORM: document.querySelector('form'),
}

const URL = {
	GENDER: 'https://api.genderize.io',
	COUNTRY: 'https://api.nationalize.io',
}

UI.BUTTON.addEventListener('click', function(){
	const firstName = UI.NAME_TEXT.value;
	const genderUrl = `${URL.GENDER}?name=${firstName}`;
	const countryUrl = `${URL.COUNTRY}?name=${firstName}`;

	fetch(genderUrl)
	.then(response => response.json())
	.then(user => alert(user.gender));

	fetch(countryUrl)
	.then(response => response.json())
	.then(livePlace => {
		livePlace.country.forEach(country => {
				alert(`${country.country_id}`);
		});
	});

	UI.FORM.reset();
});