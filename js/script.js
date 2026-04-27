// Select elements from the DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const counter = document.getElementById('todo-counter');

// Toggle JS button (for the X-Ray UI)
const disableJsBtn = document.getElementById('disable-js-btn');
let jsEnabled = true;

// Initial state
const defaultTasks = [
  { text: 'Learn HTML structure', done: true },
  { text: 'Add CSS styling', done: false }
];

// Function to render a task
function createTaskElement(text, isDone) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
    <label class="todo-label">
      <input type="checkbox" class="todo-checkbox" ${isDone ? 'checked' : ''}>
      <span class="todo-text">${text}</span>
    </label>
    <button type="button" class="btn btn-icon btn-delete" aria-label="Delete">×</button>
  `;

  // Add event listeners dynamically
  const checkbox = li.querySelector('.todo-checkbox');
  checkbox.addEventListener('change', () => {
    if (jsEnabled) updateCounter();
  });

  const delBtn = li.querySelector('.btn-delete');
  delBtn.addEventListener('click', () => {
    if (!jsEnabled) return;
    li.remove();
    updateCounter();
  });

  return li;
}

// Imperative state syncing: manually read the DOM
function updateCounter() {
  if (!jsEnabled) return;
  const total = list.querySelectorAll('.todo-item').length;
  const done = list.querySelectorAll('.todo-checkbox:checked').length;
  counter.textContent = `${done} of ${total} tasks completed`;
}

// Initialize list
function initList() {
  list.innerHTML = '';
  defaultTasks.forEach(task => {
    list.appendChild(createTaskElement(task.text, task.done));
  });
  updateCounter();
}

// Event Listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh
  if (!jsEnabled) return;
  
  if (!input.value.trim()) return;

  // Imperatively build the DOM element
  const li = createTaskElement(input.value, false);
  list.appendChild(li);
  
  input.value = '';
  updateCounter();
});

// X-Ray UI: Disable JS toggle
disableJsBtn.addEventListener('click', () => {
  jsEnabled = !jsEnabled;
  
  if (jsEnabled) {
    disableJsBtn.textContent = '⏸ Disable JS';
    disableJsBtn.style.color = 'white';
    disableJsBtn.style.borderColor = '#334155';
    // Re-enable form
    form.querySelector('button').style.opacity = '1';
    form.querySelector('button').style.cursor = 'pointer';
    updateCounter();
  } else {
    disableJsBtn.textContent = '▶ Enable JS';
    disableJsBtn.style.color = '#ef4444';
    disableJsBtn.style.borderColor = '#ef4444';
    
    // Simulate what happens without JS: buttons do nothing, form refreshes page
    form.querySelector('button').style.opacity = '0.5';
    form.querySelector('button').style.cursor = 'not-allowed';
  }
});

// Start the app
initList();
