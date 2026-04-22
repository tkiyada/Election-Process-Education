// Supported languages mapping
export const languages = {
  en: "English",
  hi: "हिंदी (Hindi)",
  bn: "বাংলা (Bengali)",
  mr: "मराठी (Marathi)",
  ta: "தமிழ் (Tamil)"
};

// Supported election types mapping
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

// UI Localization dictionary
export const uiStrings = {
  en: {
    appTitle: "Indian Election Process Explorer",
    appSubtitle: "Interactive guide to understanding the world's largest democratic process",
    timelineTitle: "Election Process Timeline",
    timelineDesc: "Follow the chronological phases of the electoral process.",
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
    appSubtitle: "दुनिया की सबसे बड़ी लोकतांत्रिक प्रक्रिया को समझने के लिए इंटरैक्टिव गाइड",
    timelineTitle: "चुनाव प्रक्रिया समयरेखा",
    timelineDesc: "चुनावी प्रक्रिया के कालानुक्रमिक चरणों का पालन करें।",
    faqTitle: "मतदाता सहायक",
    faqDesc: "चुनाव प्रक्रिया के बारे में सामान्य प्रश्न।",
    datesTitle: "महत्वपूर्ण तिथियाँ",
    liveNewsTitle: "लाइव चुनाव अपडेट",
    liveResultsTitle: "लाइव गणना डैशबोर्ड",
    liveResultsDesc: "सक्रिय मतगणना के लिए सिम्युलेटेड लाइव सीट ट्रैकिंग।",
    btnPrev: "पिछला",
    btnNext: "अगला",
    of: "का"
  },
  // Placeholders for other languages (falling back to English for now to save space, but scalable)
  bn: {
    appTitle: "ভারতীয় নির্বাচন প্রক্রিয়া এক্সপ্লোরার",
    appSubtitle: "বিশ্বের বৃহত্তম গণতান্ত্রিক প্রক্রিয়া বোঝার জন্য ইন্টারেক্টিভ গাইড",
    timelineTitle: "নির্বাচন প্রক্রিয়ার টাইমলাইন",
    timelineDesc: "নির্বাচনী প্রক্রিয়ার কালানুক্রমিক ধাপগুলি অনুসরণ করুন।",
    faqTitle: "ভোটার সহকারী",
    faqDesc: "নির্বাচন প্রক্রিয়া সম্পর্কে সাধারণ প্রশ্ন।",
    datesTitle: "গুরুত্বপূর্ণ তারিখ",
    btnPrev: "পূর্ববর্তী",
    btnNext: "পরবর্তী",
    of: "এর"
  },
  mr: {
    appTitle: "भारतीय निवडणूक प्रक्रिया एक्सप्लोरर",
    appSubtitle: "जगातील सर्वात मोठी लोकशाही प्रक्रिया समजून घेण्यासाठी संवादात्मक मार्गदर्शक",
    timelineTitle: "निवडणूक प्रक्रिया टाइमलाइन",
    timelineDesc: "निवडणूक प्रक्रियेच्या कालक्रमानुसार टप्प्यांचे अनुसरण करा.",
    faqTitle: "मतदार सहाय्यक",
    faqDesc: "निवडणूक प्रक्रियेबद्दल सामान्य प्रश्न.",
    datesTitle: "महत्वाच्या तारखा",
    btnPrev: "मागे",
    btnNext: "पुढे",
    of: "पैकी"
  },
  ta: {
    appTitle: "இந்திய தேர்தல் செயல்முறை எக்ஸ்ப்ளோரர்",
    appSubtitle: "உலகின் மிகப்பெரிய ஜனநாயக செயல்முறையை புரிந்து கொள்வதற்கான ஊடாடும் வழிகாட்டி",
    timelineTitle: "தேர்தல் செயல்முறை காலவரிசை",
    timelineDesc: "தேர்தல் செயல்முறையின் காலவரிசை கட்டங்களைப் பின்பற்றவும்.",
    faqTitle: "வாக்காளர் உதவியாளர்",
    faqDesc: "தேர்தல் செயல்முறை பற்றிய பொதுவான கேள்விகள்.",
    datesTitle: "முக்கியமான தேதிகள்",
    btnPrev: "முந்தைய",
    btnNext: "அடுத்தது",
    of: "இல்"
  }
};

// Generic icon mapping to keep things DRY
const stepConfig = [
  { id: 1, icon: "ClipboardEdit", color: "var(--navy)", bgColor: "var(--navy-light)" },
  { id: 2, icon: "CalendarDays", color: "var(--saffron)", bgColor: "var(--saffron-light)" },
  { id: 3, icon: "FileSpreadsheet", color: "var(--green)", bgColor: "var(--green-light)" },
  { id: 4, icon: "Search", color: "var(--navy)", bgColor: "var(--navy-light)" },
  { id: 5, icon: "Megaphone", color: "var(--saffron)", bgColor: "var(--saffron-light)" },
  { id: 6, icon: "VolumeX", color: "var(--text-secondary)", bgColor: "#f3f4f6" },
  { id: 7, icon: "Vote", color: "var(--navy)", bgColor: "var(--navy-light)" },
  { id: 8, icon: "BarChart3", color: "var(--green)", bgColor: "var(--green-light)" }
];

// Content structured by [electionType][language]
export const electionData = {
  lokSabha: {
    en: {
      timeline: [
        { ...stepConfig[0], title: "Electoral Roll Update", shortTitle: "Registration", description: "The Election Commission of India (ECI) updates the national voter list." },
        { ...stepConfig[1], title: "Schedule Announcement", shortTitle: "Schedule", description: "The ECI announces polling dates. MCC comes into effect national wide." },
        { ...stepConfig[2], title: "Filing Nominations", shortTitle: "Nomination", description: "MP Candidates submit nomination papers indicating their constituencies." },
        { ...stepConfig[3], title: "Scrutiny", shortTitle: "Scrutiny", description: "Returning officers examine nominations for Lok Sabha candidates." },
        { ...stepConfig[4], title: "Election Campaign", shortTitle: "Campaign", description: "Parties campaign to form the central government." },
        { ...stepConfig[5], title: "Silence Period", shortTitle: "Silence", description: "Campaigning stops 48 hours before polling." },
        { ...stepConfig[6], title: "Polling Day", shortTitle: "Polling", description: "Voting for Members of Parliament (MPs) across the country." },
        { ...stepConfig[7], title: "Results", shortTitle: "Results", description: "Votes are counted and ECI declares the national results." }
      ],
      faqs: [
        { id: 1, question: "Who runs the Lok Sabha elections?", answer: "The Election Commission of India (ECI) is constitutionally mandated to conduct general elections." },
        { id: 2, question: "How many members are elected to the Lok Sabha?", answer: "Currently, 543 members are elected from individual constituencies." }
      ]
    },
    hi: {
       timeline: [
        { ...stepConfig[0], title: "मतदाता सूची अपडेट", shortTitle: "पंजीकरण", description: "भारत निर्वाचन आयोग (ECI) राष्ट्रीय मतदाता सूची को अपडेट करता है।" },
        { ...stepConfig[1], title: "अनुसूची की घोषणा", shortTitle: "अनुसूची", description: "ECI मतदान की तारीखों की घोषणा करता है। एमसीसी लागू होता है।" },
        { ...stepConfig[2], title: "नामांकन दाखिल करना", shortTitle: "नामांकन", description: "सांसद उम्मीदवार अपने नामांकन पत्र जमा करते हैं।" },
        { ...stepConfig[3], title: "जांच", shortTitle: "जांच", description: "रिटर्निंग ऑफिसर लोकसभा उम्मीदवारों के नामांकन की जांच करते हैं।" },
        { ...stepConfig[4], title: "चुनाव अभियान", shortTitle: "अभियान", description: "पार्टियां केंद्र सरकार बनाने के लिए प्रचार करती हैं।" },
        { ...stepConfig[5], title: "मौन अवधि", shortTitle: "मौन", description: "मतदान से 48 घंटे पहले प्रचार बंद हो जाता है।" },
        { ...stepConfig[6], title: "मतदान का दिन", shortTitle: "मतदान", description: "पूरे देश में संसद सदस्यों (सांसदों) के लिए मतदान।" },
        { ...stepConfig[7], title: "परिणाम", shortTitle: "परिणाम", description: "वोट गिने जाते हैं और ECI राष्ट्रीय परिणाम घोषित करता है।" }
      ],
      faqs: [
        { id: 1, question: "लोकसभा चुनाव कौन करवाता है?", answer: "भारत निर्वाचन आयोग (ईसीआई) को आम चुनाव कराने का संवैधानिक जनादेश है।" },
        { id: 2, question: "लोकसभा के लिए कितने सदस्य चुने जाते हैं?", answer: "वर्तमान में, 543 सदस्य अलग-अलग निर्वाचन क्षेत्रों से चुने जाते हैं।" }
      ]
    }
  },
  stateAssembly: {
    en: {
      timeline: [
        { ...stepConfig[0], title: "State Roll Update", shortTitle: "Registration", description: "The electoral roll for the specific state assembly is updated." },
        { ...stepConfig[1], title: "State Schedule", shortTitle: "Schedule", description: "ECI announces polling dates for the state. MCC is applied at the state level." },
        { ...stepConfig[2], title: "Filing Nominations", shortTitle: "Nomination", description: "MLA Candidates submit nomination papers for state constituencies." },
        { ...stepConfig[3], title: "Scrutiny", shortTitle: "Scrutiny", description: "Returning officers examine nominations for Vidhan Sabha candidates." },
        { ...stepConfig[4], title: "State Campaign", shortTitle: "Campaign", description: "Parties campaign to form the state government." },
        { ...stepConfig[5], title: "Silence Period", shortTitle: "Silence", description: "State-wide campaigning stops 48 hours before polling." },
        { ...stepConfig[6], title: "Polling Day", shortTitle: "Polling", description: "Voting for Members of Legislative Assembly (MLAs)." },
        { ...stepConfig[7], title: "Results", shortTitle: "Results", description: "Votes are counted to determine the state government." }
      ],
      faqs: [
        { id: 1, question: "Who governs State Assembly elections?", answer: "While it is for the state government, the Election Commission of India (ECI) still conducts Vidhan Sabha elections." },
        { id: 2, question: "Who am I voting for in a State Election?", answer: "You are voting for a Member of Legislative Assembly (MLA) to represent your constituency in the Vidhan Sabha." }
      ]
    },
    hi: {
       timeline: [
        { ...stepConfig[0], title: "राज्य मतदाता सूची अपडेट", shortTitle: "पंजीकरण", description: "विशिष्ट राज्य विधानसभा के लिए मतदाता सूची अपडेट की जाती है।" },
        { ...stepConfig[1], title: "राज्य अनुसूची", shortTitle: "अनुसूची", description: "ECI राज्य के लिए मतदान की तारीखों की घोषणा करता है। एमसीसी राज्य स्तर पर लागू होता है।" },
        { ...stepConfig[2], title: "नामांकन", shortTitle: "नामांकन", description: "विधायक उम्मीदवार राज्य निर्वाचन क्षेत्रों के लिए नामांकन पत्र जमा करते हैं।" },
        { ...stepConfig[3], title: "जांच", shortTitle: "जांच", description: "रिटर्निंग ऑफिसर विधानसभा उम्मीदवारों के नामांकन की जांच करते हैं।" },
        { ...stepConfig[4], title: "राज्य अभियान", shortTitle: "अभियान", description: "पार्टियां राज्य सरकार बनाने के लिए प्रचार करती हैं।" },
        { ...stepConfig[5], title: "मौन अवधि", shortTitle: "मौन", description: "मतदान से 48 घंटे पहले राज्यव्यापी प्रचार बंद हो जाता है।" },
        { ...stepConfig[6], title: "मतदान का दिन", shortTitle: "मतदान", description: "विधान सभा सदस्यों (विधायकों) के लिए मतदान।" },
        { ...stepConfig[7], title: "परिणाम", shortTitle: "परिणाम", description: "राज्य सरकार का निर्धारण करने के लिए वोट गिने जाते हैं।" }
      ],
      faqs: [
        { id: 1, question: "राज्य विधानसभा चुनाव कौन करवाता है?", answer: "हालांकि यह राज्य सरकार के लिए है, भारत निर्वाचन आयोग (ECI) ही विधानसभा चुनाव कराता है।" },
        { id: 2, question: "राज्य चुनाव में मैं किसे वोट दे रहा हूं?", answer: "आप विधान सभा में अपने निर्वाचन क्षेत्र का प्रतिनिधित्व करने के लिए विधान सभा सदस्य (विधायक) को वोट दे रहे हैं।" }
      ]
    }
  },
  localBody: {
    en: {
      timeline: [
        { ...stepConfig[0], title: "Ward List Update", shortTitle: "Registration", description: "State Election Commissions (SEC) prepare roll for panchayats/municipalities." },
        { ...stepConfig[1], title: "Local Schedule", shortTitle: "Schedule", description: "SEC announces the election schedule for local bodies." },
        { ...stepConfig[2], title: "Filing Nominations", shortTitle: "Nomination", description: "Candidates for sarpanch, ward members or corporators file papers." },
        { ...stepConfig[3], title: "Scrutiny", shortTitle: "Scrutiny", description: "Nominations for local representatives are verified." },
        { ...stepConfig[4], title: "Local Campaign", shortTitle: "Campaign", description: "Grassroots campaigning occurs mostly door-to-door in local wards." },
        { ...stepConfig[5], title: "Silence Period", shortTitle: "Silence", description: "Campaign stops 48 hours prior." },
        { ...stepConfig[6], title: "Polling Day", shortTitle: "Polling", description: "Voting happens often using ballot papers or dedicated EVMs." },
        { ...stepConfig[7], title: "Results", shortTitle: "Results", description: "Counting is usually done quickly for local wards." }
      ],
      faqs: [
        { id: 1, question: "Does the ECI run Panchayat Elections?", answer: "No. Local body elections (Panchayats and Municipalities) are conducted by separate State Election Commissions (SECs)." },
        { id: 2, question: "How is voting different for local bodies?", answer: "Unlike Lok Sabha, local elections sometimes still use traditional ballot boxes/papers in certain states, though EVMs are heavily utilized now." }
      ]
    },
    hi: {
       timeline: [
        { ...stepConfig[0], title: "वार्ड सूची अपडेट", shortTitle: "पंजीकरण", description: "राज्य चुनाव आयोग (SEC) पंचायतों/नगरपालिकाओं के लिए सूची तैयार करते हैं।" },
        { ...stepConfig[1], title: "स्थानीय अनुसूची", shortTitle: "अनुसूची", description: "एसईसी स्थानीय निकायों के लिए चुनाव कार्यक्रम की घोषणा करता है।" },
        { ...stepConfig[2], title: "नामांकन", shortTitle: "नामांकन", description: "सरपंच, वार्ड सदस्य या पार्षद पद के उम्मीदवार पर्चे दाखिल करते हैं।" },
        { ...stepConfig[3], title: "जांच", shortTitle: "जांच", description: "स्थानीय प्रतिनिधियों के नामांकन की जांच की जाती है।" },
        { ...stepConfig[4], title: "स्थानीय अभियान", shortTitle: "अभियान", description: "स्थानीय वार्डों में मुख्य रूप से घर-घर जाकर जमीनी स्तर पर प्रचार होता है।" },
        { ...stepConfig[5], title: "मौन अवधि", shortTitle: "मौन", description: "मतदान से 48 घंटे पहले प्रचार बंद।" },
        { ...stepConfig[6], title: "मतदान का दिन", shortTitle: "मतदान", description: "मतदान अक्सर मतपत्रों या समर्पित ईवीएम का उपयोग करके होता है।" },
        { ...stepConfig[7], title: "परिणाम", shortTitle: "परिणाम", description: "स्थानीय वार्डों के लिए मतगणना आमतौर पर जल्दी हो जाती है।" }
      ],
       faqs: [
        { id: 1, question: "क्या ECI पंचायत चुनाव कराता है?", answer: "नहीं। स्थानीय निकाय चुनाव (पंचायतें और नगर पालिकाएं) अलग-अलग राज्य चुनाव आयोगों (एसईसी) द्वारा कराए जाते हैं।" },
        { id: 2, question: "स्थानीय निकायों के लिए मतदान कैसे अलग है?", answer: "लोकसभा के विपरीत, कुछ राज्यों में स्थानीय चुनाव अभी भी कभी-कभी पारंपरिक मतपेटियों/मतपत्रों का उपयोग करते हैं, हालांकि अब ईवीएम का भारी उपयोग किया जाता है।" }
      ]
    }
  }
};

// Fallback logic for unsupported languages in mock data
export const getElectionData = (type, lang) => {
  if (electionData[type] && electionData[type][lang]) {
    return electionData[type][lang];
  }
  // Default to English if specific translation is missing
  return electionData[type]["en"];
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

export const getImportantDates = (type, stateCode = 'general') => {
  if (type === 'stateAssembly') {
    return importantDatesData.stateAssembly[stateCode] || importantDatesData.stateAssembly['general'];
  }
  return importantDatesData[type] || importantDatesData["lokSabha"];
};

// Check if a specific election type/state is currently in Live counting mode based on Dates
export const checkIsLive = (type, stateCode) => {
   const dates = getImportantDates(type, stateCode);
   return dates.some(d => d.status === 'live');
};

