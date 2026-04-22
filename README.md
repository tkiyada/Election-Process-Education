# Indian Election Process Explorer

This project is an interactive, educational civic-tech assistant designed to help voters and citizens understand the complex mechanics of the Indian world-class democratic process. 

## Your Chosen Vertical
**Education & Civic Technology**
The project sits squarely within the civic engagement vertical. It aims to demystify complex electoral procedures across different government strata (National, State, Local) by visualizing dates, rules, and breaking news into a single, accessible, multi-lingual "Smart Assistant" dashboard. 

## Approach and Logic
We approached this problem by asking: *How do we make dry electoral data dynamic and easy to understand?*
1. **Dynamic State Management:** Election rules and dates change drastically depending on what tier of government is being voted on. Our logic relies on centralized state bindings wherein toggling a dropdown (e.g., Lok Sabha vs State Assembly) cascades conditional renders throughout the entire application—changing the timeline bounds, filtering the important dates specifically for user-selected states like Maharashtra, and triggering new components entirely.
2. **Contextual Translation:** Civic tools must be accessible. The underlying data logic is completely disjointed from the hard-coded UI, mapped into a JSON dictionary string framework. This logic detects the language selection (e.g., transitioning from English to Hindi) and instantly pipes translated arrays into the UI without page reloads.
3. **Handling Live Polling Constraints:** Official government bodies do not generally provide open JSON streams for secure data like live ballot counting. Our logical approach was to build out the front-end architecture to *support* live data handling using intervals and asynchronous states, creating a simulated but fully functional environment that can be instantly hooked to API keys later.

## How the Solution Works
The application is a Single Page Application (SPA) built using React and Vite, utilizing a Vanilla CSS premium glassmorphic design system.

The core mechanics are split across four "Smart" modules reacting to the overarching application state:
*   **The Hierarchical Timeline (`Timeline.jsx`):** A visual stepper rendering the chronological rules of an election, which alters its definitions whether you are looking at National ECI rules or State Election Commission (SEC) guidelines.
*   **The Live News Poller (`LiveUpdates.jsx`):** Emulating "instant web pulling", this component uses a `useEffect` and `setInterval` loop to asynchronously poll a public RSS-to-JSON API (targeting Google News India Election alerts). When breaking news hits the web, it instantly materializes into the UI cards.
*   **The Live Results Dashboard (`LiveResults.jsx`):** A conditional tracking UI that *only* appears if the system detects an "isLive" flag for a specific region's election day in the dataset. It features an animated progress bar mechanism tracking alliance leads against majority markers. 
*   **The Interactive FAQ (`FAQ.jsx`):** An accordion system sorting through data localized to both language and tier contexts.

## Any Assumptions Made
1. **Assumption of Unavailable APIs:** We assumed (based on current standards) that the Election Commission of India (ECI) does not provide a CORS-accessible public JSON endpoint for real-time seat counting. Therefore, the **Live Results Seat Dashboard** is driven by an internal simulation script incrementing numbers randomly every 4 seconds. This proves the UI functions cleanly, under the assumption that a developer would replace the mock URL with a private API Key service later.
2. **Third-Party Integrations:** It is assumed that the `rss2json` free tier service and Google News RSS endpoints will remain unauthenticated and active to power the "Live Web Fetch" component.
3. **Locale Constraints:** The translated mock-data is relatively robust for the MVP testing in Hindi and English; it is assumed more extensive translations would be provided by a translation vendor for production deployments.
