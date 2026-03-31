import React, { useState, useEffect } from 'react';
import { Sun, Moon, LayoutDashboard, CheckSquare, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';
import './styles/variables.css';

// Mock components - We'll implement these next
import Dashboard from './components/Dashboard';
import TaskManager from './components/TaskManager';
import StudyTracker from './components/StudyTracker';
import PlacementTracker from './components/PlacementTracker';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'study', label: 'Study Prep', icon: GraduationCap },
    { id: 'placement', label: 'Placement', icon: Briefcase },
  ];

  return (
    <div className="trackify-app" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="glass-card" style={{ width: '280px', margin: '20px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: 'var(--teal-500)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TrendingUp /> Trackify
        </h1>
        
        <nav style={{ flex: 1 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex', width: '100%', alignItems: 'center', gap: '15px', padding: '12px 20px', borderRadius: '12px', border: 'none', background: activeTab === item.id ? 'var(--teal-100)' : 'transparent',
                color: activeTab === item.id ? 'var(--teal-600)' : 'var(--text-secondary)', fontWeight: '600', cursor: 'pointer', marginBottom: '10px', transition: 'all 0.2s'
              }}
            >
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </nav>

        <button onClick={toggleTheme} className="btn-teal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%' }}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px 40px 20px 20px', overflowY: 'auto' }}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'tasks' && <TaskManager />}
        {activeTab === 'study' && <StudyTracker />}
        {activeTab === 'placement' && <PlacementTracker />}
      </main>
    </div>
  );
}

export default App;
