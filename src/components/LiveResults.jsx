import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import './LiveResults.css';

// Initial dummy state for the simulated counter
const initialData = [
  { id: 'ind', name: 'IND Alliance', seats: 85, color: '#0ea5e9' },
  { id: 'nda', name: 'NDA', seats: 92, color: '#f97316' },
  { id: 'oth', name: 'Others', seats: 12, color: '#8b5cf6' }
];

export default function LiveResults({ t, stateName }) {
  const [resultsData, setResultsData] = useState(initialData);

  // Simulated Counting Effect
  useEffect(() => {
    // Every 4 seconds, randomly give 1-3 seats to a random alliance to simulate live counting 
    // This proves the architecture works and can easily be replaced by real WebSocket or JSON fetching
    const interval = setInterval(() => {
      setResultsData(prev => {
        const newData = [...prev];
        const randomAllianceIndex = Math.floor(Math.random() * newData.length);
        const randomSeatIncrement = Math.floor(Math.random() * 3) + 1;
        
        newData[randomAllianceIndex] = {
           ...newData[randomAllianceIndex],
           seats: newData[randomAllianceIndex].seats + randomSeatIncrement
        };
        
        return newData;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const totalDeclared = resultsData.reduce((acc, curr) => acc + curr.seats, 0);

  return (
    <div className="live-results-container glass-panel">
      <div className="live-results-header">
        <div className="header-left">
          <div className="pulse-icon red">
             <Activity size={24} color="#ef4444" />
          </div>
          <div>
            <h3 className="heading-gradient">{t('liveResultsTitle') || "Live Counting Dashboard"}</h3>
            <span className="state-badge">{stateName}</span>
          </div>
        </div>
        <div className="total-declared">
          Seats Declared: <strong>{totalDeclared}</strong> / 288
        </div>
      </div>
      
      <p className="sim-warning">{t('liveResultsDesc')}</p>

      <div className="progress-bars-container">
        {resultsData.map((party) => {
          // calculate width percentage relative to a total target (e.g. 145 for majority)
          const target = 145; 
          const percentage = Math.min((party.seats / target) * 100, 100);

          return (
            <div key={party.id} className="party-row">
              <div className="party-label">
                <span className="party-name">{party.name}</span>
                <span className="party-score" style={{ color: party.color }}>{party.seats}</span>
              </div>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: party.color
                  }}
                ></div>
                {/* Majority marker line drawn across track */}
                <div className="majority-marker" title="Halfway Mark (145)"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
