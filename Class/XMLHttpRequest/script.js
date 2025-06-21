// Base request function using XMLHttpRequest
let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(obj.method || "GET", obj.url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(obj.body);
  });
};

let result = [];

// Example GET request
let getObject = {
  url: "https://jsonplaceholder.typicode.com/todos",
  method: "GET",
  body: null
};

// Making the GET request and storing the result
request(getObject)
  .then(result => results = result)
  .catch(error => console.log(`Error: ${error}`));

// ~~~~~~~~~~~~
// POST Request Section
// ~~~~~~~~~~~~
let postObject = {
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),
}

// Making the POST request and logging the result
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);
  console.log("Form Data", formData);
  let postObject = {
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json"
    }
  };

  request(postObject)
    .then(result => console.log(`Post Result: ${result}`))
    .catch(error => console.log(`Error: ${error}`));
});


// ~~~~~~~~~~~~
// FETCH Request Section
// ~~~~~~~~~~~~
let fetchResult = fetch("https://jsonplaceholder.typicode.com/posts?limit=10", {
  method: "POST",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1
  }),
  headers: {
    "Content-Type": "application/json"
  }
}).then(response => response.json()).then(response => console.log(response)
);

let fetchObject = {
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "POST",
  body: JSON.stringify
}

