import React, { useState, Suspense, lazy } from 'react';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import DatesBoard from './components/DatesBoard';
import LiveUpdates from './components/LiveUpdates';

const LiveResults = lazy(() => import('./components/LiveResults'));
import { 
  getElectionData, 
  getImportantDates,
  checkIsLive, 
  uiStrings, 
  languages, 
  electionTypes,
  statesList
} from './data';
import { Globe, BookOpen, MapPin } from 'lucide-react';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const [electionType, setElectionType] = useState('lokSabha');
  const [selectedState, setSelectedState] = useState('MH');

  // Helper to fallback to english UI strings if translation missing
  const t = (key) => uiStrings[lang]?.[key] || uiStrings['en'][key];
  
  const currentData = getElectionData(electionType, lang);
  const currentDates = getImportantDates(electionType, selectedState);
  const isResultsLive = checkIsLive(electionType, selectedState);

  return (
    <div className="app-container">
      {/* Top Control Bar */}
      <div className="control-bar glass-panel">
        <div className="control-group">
           <BookOpen size={20} color="var(--navy)" aria-hidden="true" />
           <select 
             value={electionType} 
             onChange={(e) => setElectionType(e.target.value)}
             className="dropdown-select"
             aria-label="Select Election Type"
           >
             {Object.entries(electionTypes).map(([key, value]) => (
               <option key={key} value={key}>{value}</option>
             ))}
           </select>
        </div>

        {/* State Selection Dropdown - Only visible for State Assembly */}
        {electionType === 'stateAssembly' && (
          <div className="control-group fade-in">
            <MapPin size={20} color="var(--saffron)" aria-hidden="true" />
            <select 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
              className="dropdown-select"
              aria-label="Select Specific State"
            >
              {Object.entries(statesList).filter(([key]) => key !== 'general').map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
         </div>
        )}
        
        <div className="control-group">
           <Globe size={20} color="var(--green)" aria-hidden="true" />
           <select 
             value={lang} 
             onChange={(e) => setLang(e.target.value)}
             className="dropdown-select"
             aria-label="Select Language"
           >
             {Object.entries(languages).map(([key, value]) => (
               <option key={key} value={key}>{value}</option>
             ))}
           </select>
        </div>
      </div>

      <header className="app-header glass-panel">
        <div>
          <h1 className="heading-gradient">{t('appTitle')}</h1>
          <p className="subtitle">{t('appSubtitle')}</p>
        </div>
      </header>

      <main className="app-main">
        {/* Render Live Results Dashboard conditionally using Lazy Loading for efficiency */}
        {isResultsLive && (
           <section className="live-results-section fade-in">
             <Suspense fallback={<div className="glass-panel" style={{padding: '2rem', textAlign: 'center'}}>Loading Live Data...</div>}>
               <LiveResults t={t} stateName={statesList[selectedState]} />
             </Suspense>
           </section>
        )}

        <section className="timeline-section">
          <Timeline steps={currentData.timeline} t={t} />
        </section>

        <section className="live-news-section">
           <LiveUpdates t={t} />
        </section>

        <section className="bottom-section">
          <div className="faq-wrapper">
            <FAQ faqs={currentData.faqs} t={t} />
          </div>
          <div className="dates-wrapper">
            <DatesBoard dates={currentDates} t={t} />
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <p>Educational tool representing the Indian Election Process. For official info, visit <a href="https://eci.gov.in" target="_blank" rel="noreferrer">eci.gov.in</a></p>
      </footer>
    </div>
  );
}

export default App;
