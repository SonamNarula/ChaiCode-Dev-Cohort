import React, { useState, useEffect } from 'react';
import { Building2, Briefcase, Tag, Trash2, Send } from 'lucide-react';

const PlacementTracker = () => {
  const [applications, setApplications] = useState(JSON.parse(localStorage.getItem('trackify-apps')) || []);
  const [formData, setFormData] = useState({ company: '', role: '', status: 'Applied' });

  useEffect(() => {
    localStorage.setItem('trackify-apps', JSON.stringify(applications));
  }, [applications]);

  const addApp = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role) return;
    setApplications([{ ...formData, id: Date.now() }, ...applications]);
    setFormData({ company: '', role: '', status: 'Applied' });
  };

  const deleteApp = (id) => {
    setApplications(applications.filter(a => a.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selected': return '#10b981';
      case 'Rejected': return '#ef4444';
      default: return 'var(--teal-500)';
    }
  };

  return (
    <div style={{ maxWidth: '1000px' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Placement Tracker</h2>

      {/* Form */}
      <form className="glass-card" onSubmit={addApp} style={{ padding: '25px', display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Company Name</label>
          <input 
            type="text" 
            placeholder="e.g. Google"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          />
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Role</label>
          <input 
            type="text" 
            placeholder="e.g. SDE Intern"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          />
        </div>
        <div style={{ minWidth: '150px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Status</label>
          <select 
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Selected</option>
            <option>Rejected</option>
          </select>
        </div>
        <button type="submit" className="btn-teal" style={{ height: '45px', padding: '0 30px' }}>Add Application</button>
      </form>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {applications.map(app => (
          <div key={app.id} className="glass-card" style={{ padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ padding: '12px', borderRadius: '12px', background: 'var(--teal-50)', color: 'var(--teal-600)' }}>
                <Building2 />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{app.company}</h4>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Briefcase size={14} /> {app.role}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: getStatusColor(app.status), fontWeight: '700' }}><Tag size={14} /> {app.status}</span>
                </div>
              </div>
            </div>
            <button onClick={() => deleteApp(app.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-secondary)' }}>
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        {applications.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '50px' }}>No applications yet. Go for it! <Send size={16} /></p>}
      </div>
    </div>
  );
};

export default PlacementTracker;
