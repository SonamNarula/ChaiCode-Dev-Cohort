import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';

const TaskManager = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('trackify-tasks')) || []);
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('trackify-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Daily Tasks</h2>
      
      <form onSubmit={addTask} style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          style={{ flex: 1, padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
        />
        <button type="submit" className="btn-teal" style={{ padding: '0 25px' }}><Plus /></button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tasks.map(task => (
          <div key={task.id} className="glass-card" style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '15px', opacity: task.completed ? 0.6 : 1 }}>
            <button onClick={() => toggleTask(task.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: task.completed ? 'var(--teal-500)' : 'var(--text-secondary)' }}>
              {task.completed ? <CheckCircle /> : <Circle />}
            </button>
            <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#ef4444' }}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        {tasks.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px' }}>No tasks for today. Start small!</p>}
      </div>
    </div>
  );
};

export default TaskManager;
