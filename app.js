let tasksData = [];

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  tasksData = tasks;
  renderTasks();
  updateStats();
}

function updateStats() {
  document.getElementById("totalTasks").innerText = tasksData.length;
  document.getElementById("completedTasks").innerText =
    tasksData.filter(t => t.completed).length;
  document.getElementById("pendingTasks").innerText =
    tasksData.filter(t => !t.completed).length;
}

function renderTasks() {
  const search = document.getElementById("searchBar").value.toLowerCase();

  const tasksList = document.getElementById("tasks");
  const completedList = document.getElementById("completedList");

  tasksList.innerHTML = "";
  completedList.innerHTML = "";

  tasksData
    .filter(t => t.title.toLowerCase().includes(search))
    .forEach(task => {
      const li = document.createElement("li");
      li.className = "task";
      li.setAttribute("draggable", "true");

      li.innerHTML = `
        <div class="left">
          <input type="checkbox" data-id="${task._id}" ${task.completed ? "checked" : ""}>
          <div>
            <div class="title-text ${task.completed ? "completed" : ""}">${task.title}</div>
            <div class="desc-text">${task.description}</div>
            <div class="meta">
              <span class="tag">${task.category || "General"}</span> |
              <span class="priority">Priority: ${task.priority || "Low"}</span>
            </div>
          </div>
        </div>
        <div class="actions">
          <button class="edit-btn" data-edit="${task._id}">Edit</button>
          <button class="delete-btn" data-delete="${task._id}">Delete</button>
        </div>
      `;

      if (task.completed) {
        completedList.appendChild(li);
      } else {
        tasksList.appendChild(li);
      }
    });
}

document.getElementById("taskForm").addEventListener("submit", async e => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, category, priority })
  });

  e.target.reset();
  fetchTasks();
});

document.getElementById("tasks").addEventListener("click", taskActions);
document.getElementById("completedList").addEventListener("click", taskActions);

async function taskActions(e) {
  const editId = e.target.dataset.edit;
  const deleteId = e.target.dataset.delete;
  const checkbox = e.target.type === "checkbox";

  if (deleteId) {
    await fetch(`${API_URL}/${deleteId}`, { method: "DELETE" });
    fetchTasks();
  } else if (editId) {
    const newTitle = prompt("New Title:");
    if (!newTitle) return;
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle })
    });
    fetchTasks();
  } else if (checkbox) {
    const id = e.target.getAttribute("data-id");
    const completed = e.target.checked;

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ completed })
    });

    fetchTasks();
  }
}

// Search bar filter
document.getElementById("searchBar").addEventListener("keyup", renderTasks);

// Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

fetchTasks();
