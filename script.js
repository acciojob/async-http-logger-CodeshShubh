//your JS code here. If required.
let url = "https://jsonplaceholder.typicode.com/todos/1"
async function fetchApi() {
	let response = await fetch(url);
	let data = await response.json();
	return data
	
}

fetchApi().then(data => console.log(data))
