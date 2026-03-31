import React, { useState, useEffect } from 'react';
import { BookOpen, Award, TrendingUp, Calendar } from 'lucide-react';

const StudyTracker = () => {
  const [studyData, setStudyData] = useState(JSON.parse(localStorage.getItem('trackify-study')) || {
    hours: 0,
    questions: 0,
    lastActive: new Date().toLocaleDateString(),
    streak: 0
  });

  useEffect(() => {
    localStorage.setItem('trackify-study', JSON.stringify(studyData));
  }, [studyData]);

  const updateHours = (val) => {
    setStudyData(prev => ({ ...prev, hours: Math.max(0, prev.hours + val) }));
  };

  const updateQuestions = (val) => {
    setStudyData(prev => ({ ...prev, questions: Math.max(0, prev.questions + val) }));
  };

  const completeDay = () => {
    const today = new Date().toLocaleDateString();
    if (studyData.lastActive !== today) {
      setStudyData(prev => ({
        ...prev,
        streak: prev.streak + 1,
        lastActive: today
      }));
      alert("Streak Updated! Keep it up! 🔥");
    } else {
      alert("You've already checked in for today!");
    }
  };

  return (
    <div style={{ maxWidth: '900px' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Study Progress</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {/* Hours Card */}
        <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
          <BookOpen size={40} color="var(--teal-500)" style={{ marginBottom: '15px' }} />
          <h3>Study Hours</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '15px 0' }}>{studyData.hours}h</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button onClick={() => updateHours(-1)} className="btn-teal" style={{ background: 'var(--border-color)', color: 'var(--text-primary)' }}>-1</button>
            <button onClick={() => updateHours(1)} className="btn-teal">+1 Hour</button>
          </div>
        </div>

        {/* Questions Card */}
        <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
          <TrendingUp size={40} color="var(--teal-500)" style={{ marginBottom: '15px' }} />
          <h3>DSA Questions</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '15px 0' }}>{studyData.questions}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button onClick={() => updateQuestions(-1)} className="btn-teal" style={{ background: 'var(--border-color)', color: 'var(--text-primary)' }}>-1</button>
            <button onClick={() => updateQuestions(5)} className="btn-teal">+5 Questions</button>
          </div>
        </div>

        {/* Streak Card */}
        <div className="glass-card" style={{ padding: '30px', textAlign: 'center', background: 'var(--teal-100)', border: '1px solid var(--teal-300)' }}>
          <Award size={40} color="var(--teal-600)" style={{ marginBottom: '15px' }} />
          <h3 style={{ color: 'var(--teal-600)' }}>Current Streak</h3>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--teal-600)', margin: '10px 0' }}>{studyData.streak}</div>
          <p style={{ color: 'var(--teal-600)', fontWeight: '600', marginBottom: '20px' }}>Days Consistent</p>
          <button onClick={completeDay} className="btn-teal" style={{ width: '100%', background: 'var(--teal-600)' }}>
            Check In Today
          </button>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(0,0,0,0.05)' }}>
        <Calendar color="var(--text-secondary)" />
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Last check-in: <strong>{studyData.lastActive}</strong>. Your goal is to reach a 30-day streak!
        </p>
      </div>
    </div>
  );
};

export default StudyTracker;
