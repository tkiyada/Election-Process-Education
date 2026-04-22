import React, { useState, useEffect } from 'react';
import { Radio, RefreshCw, ExternalLink } from 'lucide-react';
import './LiveUpdates.css';

export default function LiveUpdates({ t }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const fetchNews = async () => {
    setLoading(true);
    try {
      // Fetching from a free public RSS-to-JSON service targeting Google News (India Elections)
      const rssUrl = encodeURIComponent('https://news.google.com/rss/search?q=india+elections&hl=en-IN&gl=IN&ceid=IN:en');
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.status === 'ok') {
        // Only keep the top 4 recent news items to fit the UI nicely
        setNews(data.items.slice(0, 4));
        setLastRefreshed(new Date());
      }
    } catch (error) {
      console.error("Failed to fetch live updates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    
    // Auto-refresh every 5 minutes (300000 ms) for "instant" breaking updates
    const intervalId = setInterval(fetchNews, 300000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="live-updates-container glass-panel">
      <div className="live-updates-header">
        <div className="header-left">
          <div className="pulse-icon">
             <Radio size={24} color="#ef4444" />
          </div>
          <h3 className="heading-gradient">{t('liveNewsTitle') || "Live Updates"}</h3>
        </div>
        <button 
          className="refresh-btn smooth-transition" 
          onClick={fetchNews}
          disabled={loading}
          title="Refresh Now"
          aria-label="Refresh live news feed"
        >
          <RefreshCw size={18} className={loading ? 'spinning' : ''} aria-hidden="true" />
        </button>
      </div>

      <div className="last-updated">
         Last updated: {lastRefreshed.toLocaleTimeString()}
      </div>

      <div className="news-feed">
        {loading && news.length === 0 ? (
          <div className="loading-state">Fetching latest data...</div>
        ) : (
          news.map((item, index) => {
            // Strip out the generic publisher name from titles often appended by Google (e.g. "- Times of India")
            const cleanTitle = item.title.split(' - ')[0];
            const publisher = item.title.split(' - ')[1] || "News Source";
            
            return (
              <a 
                key={index} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="news-card"
                aria-label={`Read article: ${cleanTitle}`}
              >
                <div className="news-content">
                  <h4 className="news-title">{cleanTitle}</h4>
                  <div className="news-meta">
                    <span className="publisher">{publisher}</span>
                    <span className="time">{new Date(item.pubDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="news-action">
                  <ExternalLink size={16} color="var(--text-secondary)" />
                </div>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}
