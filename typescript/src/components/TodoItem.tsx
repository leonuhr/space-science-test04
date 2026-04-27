import { Task } from '../types';

interface TodoItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input 
          type="checkbox" 
          className="todo-checkbox" 
          // TypeScript knows task.done is a boolean
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        {/* TypeScript knows task.text is a string */}
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
