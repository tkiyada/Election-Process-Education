import React, { useState } from 'react';
import { MessageSquare, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export default function FAQ({ faqs, t }) {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(id);
    }
  };

  return (
    <div className="faq-container glass-panel">
      <div className="faq-header">
        <div className="faq-icon-wrapper">
          <MessageSquare size={28} color="var(--navy)" />
        </div>
        <div>
          <h2 className="heading-gradient">{t('faqTitle')}</h2>
          <p>{t('faqDesc')}</p>
        </div>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div 
              key={faq.id} 
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <div 
                className="faq-question-container"
                onClick={() => toggleFaq(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="faq-q-icon" aria-hidden="true">
                  <HelpCircle size={20} color={isOpen ? 'var(--navy)' : 'var(--text-secondary)'} />
                </div>
                <h4 className="faq-question">{faq.question}</h4>
                <div className="faq-toggle" aria-hidden="true">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              <div 
                id={`faq-answer-${faq.id}`}
                className="faq-answer-wrapper smooth-transition"
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
