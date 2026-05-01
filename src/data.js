/**
 * Core data management file for the Election Process Education application.
 * Contains translation dictionaries, timeline definitions, and dynamic getter functions.
 * @module data
 */

export const electionTypes = {
  lokSabha: "Lok Sabha (National)",
  stateAssembly: "State Assembly",
  localBody: "Local Bodies (Panchayat/Municipal)"
};

// Supported states
export const statesList = {
  general: "Not Applicable",
  MH: "Maharashtra",
  WB: "West Bengal",
  UP: "Uttar Pradesh"
};

/**
 * UI Localization dictionary
 * @type {Object.<string, Object.<string, string>>}
 */
export const uiStrings = {
  en: {
    appTitle: "Indian Election Process Explorer",
    appSubtitle: "Understand how the world's largest democracy votes",
    faqTitle: "Voter Assistant",
    faqDesc: "Common questions about the election process.",
    datesTitle: "Important Dates",
    liveNewsTitle: "Live Election Updates",
    liveResultsTitle: "Live Counting Dashboard",
    liveResultsDesc: "Simulated live seat tracking for active counting.",
    btnPrev: "Previous",
    btnNext: "Next",
    of: "of"
  },
  hi: {
    appTitle: "भारतीय चुनाव प्रक्रिया एक्सप्लोरर",
    appSubtitle: "समझें कि दुनिया का सबसे बड़ा लोकतंत्र कैसे मतदान करता है",
    faqTitle: "मतदाता सहायक",
    faqDesc: "चुनाव प्रक्रिया के बारे में सामान्य प्रश्न।",
    datesTitle: "महत्वपूर्ण तिथियाँ",
    liveNewsTitle: "लाइव चुनाव अपडेट",
    liveResultsTitle: "लाइव गणना डैशबोर्ड",
    liveResultsDesc: "सक्रिय मतगणना के लिए सिम्युलेटेड लाइव सीट ट्रैकिंग।",
    btnPrev: "पिछला",
    btnNext: "अगला",
    of: "का"
  }
};

export const languages = {
  en: "English",
  hi: "हिन्दी",
  bn: "বাংলা",
  mr: "मराठी",
  ta: "தமிழ்"
};

/**
 * Election content dictionary containing timelines and FAQs segmented by type and language.
 */
export const electionData = {
  lokSabha: {
    en: {
      timeline: [
        {
          id: 1,
          title: "Voter Roll Update",
          description: "The Election Commission of India (ECI) updates the electoral rolls. Citizens check their names and apply for new Voter ID cards.",
          icon: "users"
        },
        {
          id: 2,
          title: "Election Schedule Announcement",
          description: "The ECI announces the poll dates. The Model Code of Conduct (MCC) comes into effect immediately.",
          icon: "calendar"
        },
        {
          id: 3,
          title: "Filing of Nominations",
          description: "Candidates file their nomination papers with the Returning Officer. Scrutiny of nominations follows.",
          icon: "file-text"
        },
        {
          id: 4,
          title: "Campaigning",
          description: "Political parties and candidates hold rallies, distribute manifestos, and canvass for votes. Ends 48 hours before polling.",
          icon: "megaphone"
        },
        {
          id: 5,
          title: "Polling Day(s)",
          description: "Voters cast their votes using Electronic Voting Machines (EVMs) and VVPATs. Lok Sabha elections are usually held in multiple phases.",
          icon: "check-square"
        },
        {
          id: 6,
          title: "Counting & Results",
          description: "EVMs are opened and votes are counted in the presence of candidates. The candidate with the highest votes in a constituency wins.",
          icon: "bar-chart"
        }
      ],
      faqs: [
         { id: 1, question: "Who is eligible to vote?", answer: "Any Indian citizen who is 18 years of age or older as of the qualifying date (usually Jan 1 of the year) can vote, provided their name is on the electoral roll." },
         { id: 2, question: "What is an EVM?", answer: "An Electronic Voting Machine (EVM) is used to record votes electronically, replacing paper ballots. It is standalone and not connected to any network." },
         { id: 3, question: "What is the Model Code of Conduct?", answer: "The MCC is a set of guidelines issued by the ECI to regulate political parties and candidates prior to elections, ensuring free and fair polling." },
         { id: 4, question: "What is VVPAT?", answer: "Voter Verifiable Paper Audit Trail (VVPAT) allows voters to verify that their vote was cast correctly. It prints a slip with the candidate's name and symbol." }
      ]
    },
    hi: {
      timeline: [
        {
           id: 1,
           title: "मतदाता सूची अपडेट",
           description: "भारत निर्वाचन आयोग (ECI) मतदाता सूची को अपडेट करता है। नागरिक अपने नाम जांचते हैं और नए वोटर आईडी कार्ड के लिए आवेदन करते हैं।",
           icon: "users"
        },
        {
           id: 2,
           title: "चुनाव कार्यक्रम की घोषणा",
           description: "ECI चुनाव की तारीखों की घोषणा करता है। आदर्श आचार संहिता (MCC) तुरंत प्रभाव में आ जाती है।",
           icon: "calendar"
        },
        {
           id: 3,
           title: "नामांकन दाखिल करना",
           description: "उम्मीदवार रिटर्निंग ऑफिसर के पास अपना नामांकन पत्र दाखिल करते हैं। इसके बाद नामांकनों की जांच होती है।",
           icon: "file-text"
        },
        {
           id: 4,
           title: "चुनाव प्रचार",
           description: "राजनीतिक दल और उम्मीदवार रैलियां करते हैं, घोषणापत्र बांटते हैं और वोट मांगते हैं। मतदान से 48 घंटे पहले समाप्त होता है।",
           icon: "megaphone"
        },
        {
           id: 5,
           title: "मतदान का दिन",
           description: "मतदाता इलेक्ट्रॉनिक वोटिंग मशीन (EVM) और VVPAT का उपयोग करके अपना वोट डालते हैं। लोकसभा चुनाव आमतौर पर कई चरणों में होते हैं।",
           icon: "check-square"
        },
        {
           id: 6,
           title: "मतगणना और परिणाम",
           description: "EVM खोले जाते हैं और उम्मीदवारों की उपस्थिति में वोटों की गिनती की जाती है। सबसे अधिक वोट पाने वाला उम्मीदवार जीतता है।",
           icon: "bar-chart"
        }
      ],
      faqs: [
         { id: 1, question: "मतदान करने के लिए कौन पात्र है?", answer: "कोई भी भारतीय नागरिक जो योग्यता तिथि (आमतौर पर वर्ष का 1 जनवरी) को 18 वर्ष या उससे अधिक आयु का है, वह मतदान कर सकता है, बशर्ते उसका नाम मतदाता सूची में हो।" },
         { id: 2, question: "EVM क्या है?", answer: "इलेक्ट्रॉनिक वोटिंग मशीन (EVM) का उपयोग इलेक्ट्रॉनिक रूप से वोटों को रिकॉर्ड करने के लिए किया जाता है, जो पेपर बैलेट की जगह लेता है। यह स्टैंडअलोन है और किसी नेटवर्क से जुड़ा नहीं है।" },
         { id: 3, question: "आदर्श आचार संहिता क्या है?", answer: "आदर्श आचार संहिता ECI द्वारा जारी दिशा-निर्देशों का एक सेट है, जो चुनाव से पहले राजनीतिक दलों और उम्मीदवारों को विनियमित करता है, जिससे स्वतंत्र और निष्पक्ष मतदान सुनिश्चित होता है।" },
         { id: 4, question: "VVPAT क्या है?", answer: "वोटर वेरीफिएबल पेपर ऑडिट ट्रेल (VVPAT) मतदाताओं को यह सत्यापित करने की अनुमति देता है कि उनका वोट सही तरीके से डाला गया था। यह उम्मीदवार के नाम और चुनाव चिह्न के साथ एक पर्ची प्रिंट करता है।" }
      ]
    }
  },
  stateAssembly: {
    en: {
      timeline: [
        {
          id: 1,
          title: "State Roll Validation",
          description: "The State Election Commission reviews demographic changes.",
          icon: "users"
        },
        {
          id: 2,
          title: "Single/Multi-Phase Declaration",
          description: "Depending on state size and security requirements, phases are declared.",
          icon: "calendar"
        },
        {
          id: 3,
          title: "State Specific Polling",
          description: "Voters elect Members of Legislative Assembly (MLAs).",
          icon: "check-square"
        }
      ],
      faqs: [
        { id: 1, question: "Who do I vote for in State Elections?", answer: "You vote for Members of Legislative Assembly (MLAs) who form the state government." }
      ]
    },
    hi: {
      timeline: [
        {
           id: 1,
           title: "राज्य सूची सत्यापन",
           description: "राज्य चुनाव आयोग जनसांख्यिकीय परिवर्तनों की समीक्षा करता है।",
           icon: "users"
        },
        {
           id: 2,
           title: "एकल/बहु-चरण घोषणा",
           description: "राज्य के आकार और सुरक्षा आवश्यकताओं के आधार पर, चरणों की घोषणा की जाती है।",
           icon: "calendar"
        },
        {
           id: 3,
           title: "राज्य विशिष्ट मतदान",
           description: "मतदाता विधानसभा सदस्यों (विधायकों) का चुनाव करते हैं।",
           icon: "check-square"
        }
      ],
      faqs: [
        { id: 1, question: "राज्य चुनाव में मैं किसे वोट देता हूँ?", answer: "आप विधानसभा सदस्यों (विधायकों) के लिए वोट करते हैं जो राज्य सरकार बनाते हैं।" }
      ]
    }
  },
  localBody: {
    en: {
      timeline: [
        {
          id: 1,
          title: "Ward Delimitation",
          description: "Redrawing of ward boundaries based on recent census.",
          icon: "users"
        },
        {
          id: 2,
          title: "Local Polling",
          description: "Voting for Sarpanch, Corporators, or Ward Members.",
          icon: "check-square"
        }
      ],
      faqs: [
        { id: 1, question: "Are EVMs used in local elections?", answer: "It depends on the state. Some use EVMs, while others still use traditional paper ballots." }
      ]
    },
    hi: {
       timeline: [
         {
           id: 1,
           title: "वार्ड परिसीमन",
           description: "हाल की जनगणना के आधार पर वार्ड सीमाओं का पुनर्निर्धारण।",
           icon: "users"
         },
         {
           id: 2,
           title: "स्थानीय मतदान",
           description: "सरपंच, पार्षदों या वार्ड सदस्यों के लिए मतदान।",
           icon: "check-square"
         }
       ],
       faqs: [
         { id: 1, question: "क्या स्थानीय चुनावों में EVM का उपयोग किया जाता है?", answer: "यह राज्य पर निर्भर करता है। कुछ EVM का उपयोग करते हैं, जबकि अन्य अभी भी पारंपरिक पेपर बैलेट का उपयोग करते हैं।" }
       ]
    }
  }
};

export const importantDatesData = {
   lokSabha: [
    { id: 1, event: "Expected Schedule Announcement", date: "Mar 15, 2029", status: "upcoming" },
    { id: 2, event: "Expected Phase 1 Polling", date: "Apr 2029", status: "upcoming" }
  ],
  stateAssembly: {
     general: [
       { id: 1, event: "Select a Specific State", date: "--", status: "upcoming" }
     ],
     MH: [
       { id: 1, event: "Schedule Announcement", date: "Oct 15, 2024", status: "past" },
       { id: 2, event: "Single Phase Polling", date: "Nov 20, 2024", status: "past" },
       { id: 3, event: "Counting Day", date: "Nov 23, 2024", status: "live" } // Maharashtra set as LIVE
     ],
     WB: [
        { id: 1, event: "Expected Schedule", date: "Feb 2026", status: "upcoming" },
        { id: 2, event: "Multi-Phase Polling Begins", date: "Mar 2026", status: "upcoming" }
     ],
     UP: [
        { id: 1, event: "Last State Election", date: "Mar 2022", status: "past" },
        { id: 2, event: "Expected Next Election", date: "Feb 2027", status: "upcoming" }
     ]
  },
  localBody: [
     { id: 1, event: "Varies significantly by state and district", date: "Ongoing", status: "upcoming" }
  ]
};

/**
 * Retrieves timeline and FAQ data based on selected election type and language.
 * Provides fallback to English if language is not supported.
 * @param {string} type - The election type (lokSabha, stateAssembly, localBody)
 * @param {string} lang - The requested language code (en, hi, etc.)
 * @returns {Object} Data object containing timeline array and faqs array
 */
export const getElectionData = (type, lang) => {
  const typeData = electionData[type] || electionData["lokSabha"];
  return typeData[lang] || typeData["en"];
};

/**
 * Retrieves important dates. Supports hierarchical state-level selection for stateAssembly.
 * @param {string} type - The election type
 * @param {string} [stateCode='general'] - The two-letter state code if stateAssembly is selected
 * @returns {Array} Array of date objects
 */
export const getImportantDates = (type, stateCode = 'general') => {
  if (type === 'stateAssembly') {
    return importantDatesData.stateAssembly[stateCode] || importantDatesData.stateAssembly['general'];
  }
  return importantDatesData[type] || importantDatesData["lokSabha"];
};

/**
 * Checks if a specific election type/state is currently in Live counting mode based on Dates array.
 * @param {string} type - The election type
 * @param {string} stateCode - The state code
 * @returns {boolean} True if any associated date event has status 'live'
 */
export const checkIsLive = (type, stateCode) => {
   const dates = getImportantDates(type, stateCode);
   return dates.some(d => d.status === 'live');
};
