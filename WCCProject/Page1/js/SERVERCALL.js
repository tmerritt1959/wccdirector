alert("This is a check for access to the Javascript source file referred to below");
fetch("http://localhost:5000")
  .then(response => response.text()) // Read the response as text
  .then(txt => alert(txt)); // Alert the retrieved HTML content 
   

 /* fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */