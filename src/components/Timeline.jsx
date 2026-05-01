import React, { useState, memo } from 'react';
import * as Icons from 'lucide-react';
import './Timeline.css';

const Timeline = memo(function Timeline({ steps, t }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2 className="heading-gradient">{t('timelineTitle')}</h2>
        <p>{t('timelineDesc')}</p>
      </div>
      
      <div className="stepper-wrapper">
        <div className="steps-list">
          {steps.map((step, index) => {
            const IconComponent = Icons[step.icon] || Icons.Circle;
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            
            return (
              <div 
                key={step.id} 
                className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-indicator" style={{ 
                    backgroundColor: isActive || isCompleted ? step.color : '#e2e8f0',
                    borderColor: step.color 
                  }}>
                  {isCompleted ? <Icons.Check size={16} color="#fff" /> : <IconComponent size={16} color={isActive ? '#fff' : '#64748b'} />}
                </div>
                <div className="step-label">
                  {step.shortTitle}
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector" style={{
                    backgroundColor: isCompleted ? step.color : '#e2e8f0'
                  }}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="step-details glass-panel smooth-transition">
        <div className="step-details-header">
          <div className="icon-wrapper" style={{ backgroundColor: steps[activeStep].bgColor, color: steps[activeStep].color }}>
            {React.createElement(Icons[steps[activeStep].icon] || Icons.Circle, { size: 32 })}
          </div>
          <h3>{steps[activeStep].title}</h3>
        </div>
        <p className="step-description">{steps[activeStep].description}</p>
        
        <div className="step-navigation">
          <button 
            disabled={activeStep === 0} 
            onClick={() => setActiveStep(p => p - 1)}
            className="nav-button"
          >
            <Icons.ChevronLeft size={16} /> {t('btnPrev')}
          </button>
          <div className="step-dots">
            {activeStep + 1} {t('of')} {steps.length}
          </div>
          <button 
            disabled={activeStep === steps.length - 1} 
            onClick={() => setActiveStep(p => p + 1)}
            className="nav-button primary"
            style={{ backgroundColor: 'var(--navy)' }}
          >
            {t('btnNext')} <Icons.ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
});

export default Timeline;
