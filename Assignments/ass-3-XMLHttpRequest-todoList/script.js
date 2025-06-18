let request = (obj) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.open(obj.method || "GET", obj.url);
    req.onload = () => {
      if (req.status >= 200 && req.status < 300) {
        resolve(req.response);
      } else {
        reject(req.statusText);
      }
    };
    req.onerror = () => reject(req.statusText);
    req.send(obj.body);
  });
};

let object = {
  url: "https://jsonplaceholder.typicode.com/todos",
  method: "GET",
  body: null
};

let result = [];

// Refactor this to use async/await instead
request(object)
  .then(result => results = result)
  .catch(error => console.log(`Error: ${error}`));
