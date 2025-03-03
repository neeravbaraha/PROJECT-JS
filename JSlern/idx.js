// JavaScript for the Learning Website

// Function to display practice problems
function showProblem(topic) {
    let problemDiv = document.getElementById(`${topic}-problem`);
    let problem = "";
  
    switch (topic) {
      case "fundamentals":
        problem = `<p><strong>Problem:</strong> Declare a variable <code>name</code> and assign it your name. Then, log it to the console.</p>`;
        break;
      case "data-types":
        problem = `<p><strong>Problem:</strong> Create a variable <code>age</code> with a number value and a variable <code>isStudent</code> with a boolean value. Log both to the console.</p>`;
        break;
      case "objects-arrays":
        problem = `<p><strong>Problem:</strong> Create an object <code>person</code> with properties <code>name</code> and <code>age</code>. Log the object to the console.</p>`;
        break;
      case "dom":
        problem = `<p><strong>Problem:</strong> Change the text of the <code>h1</code> element to "Welcome to JavaScript!".</p>`;
        break;
      case "promises":
        problem = `<p><strong>Problem:</strong> Use the Fetch API to get data from <code>https://jsonplaceholder.typicode.com/posts</code> and log the first post's title to the console.</p>`;
        break;
      default:
        problem = `<p>No problem available for this topic.</p>`;
    }
  
    problemDiv.innerHTML = problem;
  }