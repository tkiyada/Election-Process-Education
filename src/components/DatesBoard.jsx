import React from 'react';
import { Calendar } from 'lucide-react';
import './DatesBoard.css';

export default function DatesBoard({ dates, t }) {
  return (
    <div className="dates-board glass-panel">
      <div className="dates-header">
        <Calendar size={24} color="var(--saffron)" />
        <h3 className="heading-gradient">{t('datesTitle')}</h3>
      </div>
      
      <div className="dates-list">
        {dates.map((dateItem) => (
          <div key={dateItem.id} className={`date-card ${dateItem.status}`}>
            <div className="date-status-indicator"></div>
            <div className="date-info">
              <div className="date-text">{dateItem.date}</div>
              <div className="event-text">{dateItem.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
