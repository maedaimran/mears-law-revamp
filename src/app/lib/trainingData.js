// Training data for Mears Law AI assistant
export const mearsLawTrainingData = {
  systemPrompt: `You are an AI assistant for Mears Law, a Canadian law firm specializing in Artificial Intelligence Law, Commercial Law, Privacy Law, Real Estate Law, Immigration Law, Notary Services, and Litigation. 

Your role is to help visitors understand our services, book consultations, and get general information about our firm. You should be helpful, professional, and concise. Keep all responses brief and to-the-point.

Key points about Mears Law:
- We offer free 30-minute Initial Consultations (by phone)
- We provide Strategic Consultations (paid, 30 minutes, available virtually or by phone)
- We serve clients both in Canada and internationally
- We have offices in Toronto, Canada and Kingston, Jamaica
- We focus on emerging areas like AI law and data privacy
- Our office hours are 9:00 AM – 5:00 PM (Eastern Time), Monday to Friday
- We can be reached at mearslaw.ca
- Toronto Office: 437-888-2974 (dial 0 for representative, ext. 1 for booking)
- Jamaican Office: 876-299-7746 (phone or WhatsApp)
- General inquiries: info@mearslaw.ca
- Current clients: clientservices@mearslaw.ca

Always be polite, professional, and helpful. 

IMPORTANT: If a user asks a question that you cannot answer based on the information provided above (about booking, office hours, services, or general firm information), you MUST decline to answer and suggest they contact us directly or book a consultation for specific legal advice. Do NOT provide general legal information or advice. For example, if asked about legal procedures, specific laws, or case outcomes, respond with: "I'm not able to provide specific legal information or advice. For detailed legal guidance, please contact us at 437-888-2974 or book a consultation with one of our qualified lawyers."`,

  qaData: [
    {
      question: "How do I book a Consultation?",
      answer: "Click \"Book Now.\" Choose between an Initial Consultation (free 30-minute meeting) or Strategic Consultation (paid 30-minute session with legal advice). Select your preferred date and time.",
      keywords: ["book", "appointment", "consultation", "schedule", "meeting", "initial", "strategic"]
    },
    {
      question: "What should I prepare for the consultation?",
      answer: "Bring a summary of your legal issue with key dates and documents, any relevant contracts or correspondence, a list of questions and goals, and a valid photo ID. Contact us in advance if you need guidance.",
      keywords: ["prepare", "what to bring", "documents", "ID", "identification", "ready", "before"]
    },
    {
      question: "Do I need an appointment to speak with a lawyer?",
      answer: "Yes, consultations are by appointment only. Click \"Book Now\" or call 437-888-2974 ext. 1 to schedule.",
      keywords: ["appointment", "speak", "lawyer", "call", "visit", "required", "necessary"]
    },
    {
      question: "What if I have an urgent legal issue?",
      answer: "Call our office directly at 437-888-2974 ext. 0. We'll assess your situation and may offer expedited consultations based on availability.",
      keywords: ["urgent", "emergency", "immediate", "time-sensitive", "quick", "asap"]
    },
    {
      question: "What qualifies as an urgent legal issue?",
      answer: "An urgent legal issue requires immediate attention to prevent serious harm, protect rights, or avoid significant consequences. Call 437-888-2974 ext. 0 for assessment.",
      keywords: ["urgent", "qualify", "emergency", "immediate", "serious", "harm"]
    },
    {
      question: "Are urgent consultations an extra cost?",
      answer: "Urgent consultations may involve an additional fee depending on the issue and lawyer availability. We'll inform you of any fees before booking. Call 437-888-2974 ext. 0.",
      keywords: ["urgent", "cost", "fee", "extra", "additional", "charge", "price"]
    },
    {
      question: "How do I contact your office?",
      answer: "Toronto Office: 437-888-2974 (dial 0). Jamaican Office: 876-299-7746 (phone or WhatsApp). Email: info@mearslaw.ca (general inquiries) or clientservices@mearslaw.ca (current clients).",
      keywords: ["contact", "phone", "email", "office", "address", "toronto", "jamaica", "whatsapp"]
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes. Book a virtual consultation through mearslaw.ca by selecting \"Book Now\" and choosing either Initial or Strategic Consultation. Select the virtual option when booking. Let us know in advance if you have technology or accessibility needs.",
      keywords: ["virtual", "online", "video", "remote", "zoom", "teams", "webinar"]
    },
    {
      question: "Which platforms do you use for virtual consultations?",
      answer: "We use Microsoft Teams (secure document sharing), WhatsApp (Jamaican office), or telephone. Indicate your preference when booking, and we'll send connection details.",
      keywords: ["platform", "microsoft teams", "whatsapp", "telephone", "phone", "video call", "zoom"]
    },
    {
      question: "Do you offer free Consultations",
      answer: "Yes. We offer a free 30-minute Initial Consultation to discuss your situation, identify issues, and explain options. This is informational only and doesn't include legal advice. For legal advice, book a Strategic Consultation.",
      keywords: ["free", "consultation", "no cost", "complimentary", "initial"]
    },
    {
      question: "What are your office hours?",
      answer: "Monday to Friday, 9:00 AM – 5:00 PM (Eastern Time). For after-hours inquiries, leave a voicemail or email info@mearslaw.ca. We'll respond during business hours.",
      keywords: ["hours", "office", "time", "open", "available", "monday", "friday", "business"]
    },
    {
      question: "What is an Initial Consultation?",
      answer: "A free 30-minute phone appointment to review your situation, identify issues, explain options, and provide a service estimate. It's informational only and doesn't include legal advice. For legal advice, book a paid Strategic Consultation.",
      keywords: ["initial", "consultation", "first", "meeting", "review", "free", "30 minute"]
    },
    {
      question: "Is the free consultation in person?",
      answer: "No, our free Initial Consultation is conducted by phone for quick and convenient connection regardless of location.",
      keywords: ["free", "consultation", "in person", "phone", "virtual", "location"]
    },
    {
      question: "What is Strategic Consultation?",
      answer: "A paid 30-minute appointment providing tailored legal advice, strategic guidance, and answers to your questions (including document review if needed). Available virtually or by phone.",
      keywords: ["strategic", "consultation", "paid", "strategy", "advice", "legal advice"]
    },
    {
      question: "What areas of law does your firm practice?",
      answer: "We practice Artificial Intelligence Law, Privacy Law, Commercial Law, Real Estate Law, and Immigration Law.",
      keywords: ["practice", "areas", "law", "services", "specialties", "focus", "AI", "privacy", "commercial", "real estate", "immigration"]
    },
    {
      question: "What are your fees for real estate transactions?",
      answer: "Fees vary by transaction type and complexity. We offer competitive flat rates with transparent billing. Contact info@mearslaw.ca or book an Initial Consultation for a personalized quote.",
      keywords: ["fees", "real estate", "cost", "pricing", "rates", "transaction", "flat rate"]
    },
    {
      question: "What are your general fees?",
      answer: "Fees depend on your legal matter. We offer flat rates for some services and hourly billing for others. Your Initial Consultation includes a fee structure explanation and personalized estimate.",
      keywords: ["fees", "cost", "billing", "pricing", "rates", "payment", "hourly", "flat rate"]
    },
    {
      question: "Can I sign documents electronically?",
      answer: "Yes. Mears Law uses secure digital tools to facilitate electronic signatures and document sharing. This allows us to serve clients efficiently across Canada and internationally.",
      keywords: ["electronic", "sign", "documents", "digital", "e-signature", "paperless"]
    },
    {
      question: "Is my information confidential?",
      answer: "Yes. All communications are confidential and protected by solicitor-client privilege once a formal relationship is established. We follow strict privacy protocols.",
      keywords: ["confidential", "privacy", "secure", "protected", "data", "information", "safe"]
    },
    {
      question: "How does your AI Chatbot work?",
      answer: "Our AI Chatbot provides 24/7 support to help you learn about our services, navigate the website, and schedule consultations. It provides general information only—not legal advice. Don't share confidential information. For legal advice, book a consultation with one of our lawyers.",
      keywords: ["chatbot", "AI", "how", "works", "guidance", "24/7", "assistant"]
    },
    {
      question: "What makes Mears Law different from other law firms?",
      answer: "We combine deep legal expertise, personalized service, and forward-thinking innovation in AI, technology, and data privacy. We anticipate legal challenges rather than just responding to them, delivering practical, business-oriented results.",
      keywords: ["different", "unique", "special", "innovation", "expertise", "forward-thinking", "stand out"]
    },
    {
      question: "Do you represent clients outside of Canada?",
      answer: "Yes. We assist with cross-border transactions, regulatory compliance, immigration, and international business. We have offices in Toronto and Kingston, Jamaica. Virtual consultations are available worldwide via Microsoft Teams, WhatsApp, or phone.",
      keywords: ["international", "outside", "Canada", "cross-border", "foreign", "global", "jamaica", "worldwide"]
    },
    {
      question: "How do I apply for a position or internship at your firm?",
      answer: "Visit our Careers page at mearslaw.ca. We welcome applications from law students, law clerk students, experienced legal professionals, and administrative staff for positions in Toronto or Kingston, Jamaica. Send your resume and cover letter to carissa.mears@mearslaw.ca.",
      keywords: ["apply", "job", "career", "internship", "position", "employment", "lawyer", "student"]
    },
    {
      question: "How can I contact your firm",
      answer: "Toronto: 437-888-2974 (dial 0). Jamaica: 876-299-7746 (phone or WhatsApp). Email: info@mearslaw.ca (general) or clientservices@mearslaw.ca (clients). Visit mearslaw.ca for our Contact Us page or submit an online inquiry form.",
      keywords: ["contact", "reach", "phone", "email", "address", "get in touch", "call"]
    },
    {
      question: "What are your fees and billing practices?",
      answer: "Fees vary by legal matter. We offer flat rates for some services and hourly billing for others. We provide competitive rates with transparent billing. Your Initial Consultation includes a fee structure explanation. For specific fees, contact info@mearslaw.ca or book an Initial Consultation.",
      keywords: ["fees", "cost", "billing", "pricing", "rates", "payment", "practices"]
    },
    {
      question: "Can I speak with a Jamaican lawyer on WhatsApp?",
      answer: "Yes, you can contact us on WhatsApp at 876-299-7746",
      keywords: ["whatsapp", "jamaican", "jamaica", "lawyer", "contact", "876-299-7746"]
    },
    {
      question: "What if I am not located near your office?",
      answer: "Our firm serves clients across Canada and internationally. We handle meetings, document signings, and case updates virtually, using secure digital tools. Location will never be a barrier to receiving top-quality legal services.",
      keywords: ["location", "distance", "remote", "far", "virtual", "not near", "outside"]
    },
    {
      question: "Why should I choose Mears Law as my legal partner?",
      answer: "Because we combine legal excellence, business insight, and innovation. Whether you are a multinational corporation, government body, or individual, we offer the clarity and confidence you expect from a trusted legal advisor.",
      keywords: ["why", "choose", "select", "partner", "different", "best", "excellence"]
    }
  ]
};

// Function to find the best matching answer based on user query
export function findBestAnswer(userQuery, qaData = mearsLawTrainingData.qaData) {
  const query = userQuery.toLowerCase();
  
  // Calculate similarity score for each Q&A pair
  const scoredAnswers = qaData.map(item => {
    let score = 0;
    
    // Check for exact keyword matches
    item.keywords.forEach(keyword => {
      if (query.includes(keyword.toLowerCase())) {
        score += 2;
      }
    });
    
    // Check for partial keyword matches
    item.keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    
    // Check for question similarity
    if (item.question.toLowerCase().includes(query) || query.includes(item.question.toLowerCase())) {
      score += 3;
    }
    
    return { ...item, score };
  });
  
  // Sort by score and return the best match
  scoredAnswers.sort((a, b) => b.score - a.score);
  
  return scoredAnswers[0];
}