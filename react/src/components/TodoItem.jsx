export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input 
          type="checkbox" 
          className="todo-checkbox" 
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className="todo-text">{task.text}</span>
      </label>
      <button 
        className="btn btn-icon btn-delete" 
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  );
}
