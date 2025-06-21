const request = (obj) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

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

const object = {
  url: "https://jsonplaceholder.typicode.com/todos",
  method: "GET",
  body: null
};

const fetchTodos = async () => {
  const loading = document.getElementById("loading");
  const container = document.getElementById("users-container");
  const userDiv = container.querySelector(".user");

  try {
    const response = await request(object);
    const todos = JSON.parse(response);

    // Group todos by userId
    const usersMap = {};
    todos.forEach(todo => {
      if (!usersMap[todo.userId]) {
        usersMap[todo.userId] = [];
      }
      usersMap[todo.userId].push(todo);
    });

    // Clear placeholder template from DOM
    container.innerHTML = "";

    for (const userId in usersMap) {
      const userClone = userDiv.cloneNode(true);
      const userHeader = userClone.querySelector(".user-header");
      const table = userClone.querySelector(".todo-table");
      const tbody = userClone.querySelector("tbody");

      userHeader.textContent = `User ${userId}`;

      usersMap[userId].forEach(todo => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${todo.id}</td>
          <td>${todo.title}</td>
          <td class="${todo.completed ? "completed" : "not-completed"}">
            ${todo.completed ? "✔️ Completed" : "❌ Not Completed"}
          </td>
        `;
        tbody.appendChild(row);
      });

      table.style.display = "none";

      userHeader.addEventListener("click", () => {
        table.style.display = table.style.display === "none" ? "table" : "none";
      });

      container.appendChild(userClone);
    }

    loading.style.display = "none";
  } catch (error) {
    loading.textContent = `Failed to load todos: ${error}`;
    loading.style.color = "red";
  }
};

fetchTodos();
