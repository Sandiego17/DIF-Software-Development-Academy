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

const fetchTodos = async () => {
  const loading = document.getElementById("loading");
  const ul = document.getElementById("todo-list");

  try {
    const response = await request(object);
    const todos = JSON.parse(response);

    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = `${todo.title} ${todo.completed ? "(✔️)" : "(❌)"}`;
      ul.appendChild(li);
    });

    loading.style.display = "none";
  } catch (error) {
    loading.textContent = `Failed to load todos: ${error}`;
    loading.style.color = "red";
  }
};

fetchTodos();