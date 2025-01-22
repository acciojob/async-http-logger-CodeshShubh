//your JS code here. If required.
let url = "https://jsonplaceholder.typicode.com/todos/1"
async function fetchApi() {
	let response = await fetch(url);
	let data = await response.json();
	console.log(data);
	return data
	
}


console.log(fetchApi());