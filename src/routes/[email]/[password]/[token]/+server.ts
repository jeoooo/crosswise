export async function GET({ params }) {
	return new Response('API ENDPOINT');
}

async function getCsrfToken(api: string) {
	const response = await fetch(api);

	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.status}`);
	}

	const html = await response.text();
	const csrfTokenRegex = /<meta name="csrf-token" content="([^"]+)">/;
	const csrfTokenMatch = html.match(csrfTokenRegex);
	const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : null;

	return csrfToken;
}

async function findEmailInput(api: string) {
	const response = await fetch(api);

	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.status}`);
	}

	const html = await response.text();
	const emailInputRegex =
		/<input id="email" type="email" class="form-control" name="email" value="" required="" autofocus="">/;
	const emailInputMatch = html.match(emailInputRegex);
	const emailInput = emailInputMatch ? emailInputMatch[0] : '';

	return emailInput;
}

async function setEmailInput(api: string, email: string) {
	const response = await fetch(api);

	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.status}`);
	}

	const html = await response.text();
	const emailInputRegex =
		/<input id="email" type="email" class="form-control" name="email" value="" required="" autofocus="">/;
	const emailInputMatch = html.match(emailInputRegex);
	const emailInput = emailInputMatch ? emailInputMatch[0] : '';

	// Set the email input value
	const emailInputElem = document.querySelector('#email') as HTMLInputElement;
	emailInputElem.value = email;

	return emailInput;
}

async function findPasswordInput(api: string) {
	const response = await fetch(api);

	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.status}`);
	}

	const html = await response.text();
	const passwordInputRegex =
		/<input id="password" type="password" class="form-control" name="password" required="">/;
	const passwordInputMatch = html.match(passwordInputRegex);
	const passwordInput = passwordInputMatch ? passwordInputMatch[0] : '';

	return passwordInput;
}

async function setPasswordInput(api: string, password: string) {
	const response = await fetch(api);

	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.status}`);
	}

	const html = await response.text();
	const passwordInputRegex =
		/<input id="password" type="password" class="form-control" name="password" required="">/;
	const passwordInputMatch = html.match(passwordInputRegex);
	const passwordInput = passwordInputMatch ? passwordInputMatch[0] : '';

	// Set the password input value
	const passwordInputElem = document.querySelector('#password') as HTMLInputElement;
	passwordInputElem.value = password;

	return passwordInput;
}

function executeSubmit() {
	const submitButton = document.querySelector('.btn-container button') as HTMLButtonElement;
	submitButton.click();
}

async function login(api: string, email: string, password: string) {
	const csrfToken = await getCsrfToken(api);
	const emailInput = await setEmailInput(api, email);
	const passwordInput = await setPasswordInput(api, password);

	console.log(csrfToken);
	console.log(`email: ${emailInput}`);
	console.log(`password: ${passwordInput}`);

	executeSubmit();
}
login(
	'https://corsproxy.io/?https://studentportal.hcdc.edu.ph/login',
	'example[email]',
	'example[password]'
);
// Usage:
const csrfToken = await getCsrfToken(
	'https://corsproxy.io/?https://studentportal.hcdc.edu.ph/login'
);
const email = await findEmailInput('https://corsproxy.io/?https://studentportal.hcdc.edu.ph/login');
const password = await findPasswordInput(
	'https://corsproxy.io/?https://studentportal.hcdc.edu.ph/login'
);

console.log(csrfToken);
console.log(`email: ${email}`);
console.log(`password: ${password}`);
