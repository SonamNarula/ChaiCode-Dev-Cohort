import React from 'react';
import { Target, Clock, Star, Flame, BarChart3 } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  
  // Chart Data
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Study Hours',
      data: [4, 6, 5, 8, 3, 10, 7],
      backgroundColor: '#6aa7ab',
      borderRadius: 8,
    }]
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } }
  };

  const stats = [
    { label: 'Study Hours', value: '12.5h', icon: Clock, color: '#6aa7ab' },
    { label: 'Tasks Done', value: '8/12', icon: Target, color: '#86b7bb' },
    { label: 'DSA Drills', value: '45', icon: Star, color: '#9fc4c7' },
    { label: 'Day Streak', value: '5', icon: Flame, color: '#b3cfd1' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <header style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>{greeting}, Sonam</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Welcome back to your productivity hub.</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {stats.map((s, i) => (
          <div key={i} className="glass-card" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <s.icon size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>{s.label}</span>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--teal-600)' }}>{s.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '40px' }}>
        {/* Chart Section */}
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BarChart3 size={20} color="var(--teal-500)" /> Weekly Study Progress
          </h3>
          <Bar data={data} options={options} />
        </div>

        {/* Quote Section */}
        <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(135deg, var(--teal-500), var(--teal-300))', border: 'none', color: 'white' }}>
          <h3 style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '20px' }}>"Success is the sum of small efforts, repeated day in and day out."</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>— Robert Collier</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
