fetch('www.example.com/submit-form', { method: 'POST', // Specify the HTTP method body: new FormData(document.querySelector('form')) // Collect form data }) .then(response => response.text()) // Read response as text .then(data => alert(data)) // Alert the response 
   


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
  