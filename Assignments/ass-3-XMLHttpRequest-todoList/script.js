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

    for (const userId in usersMap) {
      const userDiv = document.createElement("div");
      userDiv.className = "user";

      const userHeader = document.createElement("div");
      userHeader.className = "user-header";
      userHeader.textContent = `User ${userId}`;
      userDiv.appendChild(userHeader);

      const table = document.createElement("table");
      table.className = "todo-table";

      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Todo Item</th>
          <th>Status</th>
        </tr>
      `;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");

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

      table.appendChild(tbody);
      table.style.display = "none";
      userDiv.appendChild(table);

      container.appendChild(userDiv);

      userHeader.addEventListener("click", () => {
        table.style.display = table.style.display === "none" ? "table" : "none";
      });
    }

    loading.style.display = "none";
  } catch (error) {
    loading.textContent = `Failed to load todos: ${error}`;
    loading.style.color = "red";
  }
};

fetchTodos();
