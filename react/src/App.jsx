import { useState } from 'react';
import TodoItem from './components/TodoItem';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn HTML structure', done: true },
    { id: 2, text: 'Add CSS styling', done: true },
    { id: 3, text: 'Build React components', done: false }
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const completedCount = tasks.filter(t => t.done).length;

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setTasks([
      ...tasks, 
      { id: Date.now(), text: inputValue, done: false }
    ]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
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
