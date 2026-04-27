import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { Task } from './types';

export default function App() {
  // TypeScript enforces that this array ONLY contains Task objects
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Learn HTML structure', done: true },
    { id: 2, text: 'Add CSS styling', done: true },
    { id: 3, text: 'Build React components', done: true },
    { id: 4, text: 'Add TypeScript safety', done: false }
  ]);
  
  const [inputValue, setInputValue] = useState<string>('');

  const completedCount = tasks.filter(t => t.done).length;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // ERROR PREVENTED: If we tried to push { id: 5, text: inputValue } missing "done", TS would fail to compile!
    const newTask: Task = {
      id: Date.now(),
      text: inputValue,
      done: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-app">
      <div className="todo-header">
        <h1 className="todo-title">My Tasks</h1>
        <span className="todo-counter">
          {completedCount} of {tasks.length} tasks completed
        </span>
      </div>

      <form className="todo-form" onSubmit={handleAddTask}>
        <input 
          type="text" 
          className="todo-input" 
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
        ))}
      </ul>
    </div>
  );
}
