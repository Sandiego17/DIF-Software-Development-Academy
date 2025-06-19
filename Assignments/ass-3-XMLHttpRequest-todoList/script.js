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

    // Build UI for each user
    for (const userId in usersMap) {
      const userDiv = document.createElement("div");
      userDiv.className = "user";

      const userHeader = document.createElement("div");
      userHeader.className = "user-header";
      userHeader.textContent = `User ${userId}`;
      userDiv.appendChild(userHeader);

      const todoList = document.createElement("ul");
      todoList.className = "todo-list";

      usersMap[userId].forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
          <strong>#${todo.id}:</strong> ${todo.title}
          <span class="${todo.completed ? "completed" : "not-completed"}">
            ${todo.completed ? "(✔️ Completed)" : "(❌ Not Completed)"}
          </span>
        `;
        todoList.appendChild(li);
      });

      userDiv.appendChild(todoList);
      container.appendChild(userDiv);

      // Toggle functionality
      userHeader.addEventListener("click", () => {
        todoList.style.display = 
          todoList.style.display === "none" ? "block" : "none";
      });
    }

    loading.style.display = "none";
  } catch (error) {
    loading.textContent = `Failed to load todos: ${error}`;
    loading.style.color = "red";
  }
};

fetchTodos();
