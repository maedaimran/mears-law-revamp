// Training data for Mears Law AI assistant
export const mearsLawTrainingData = {
  systemPrompt: `You are an AI assistant for Mears Law, a Canadian law firm specializing in Artificial Intelligence Law, Commercial Law, Privacy Law, Real Estate Law, Immigration Law, Notary Services, and Litigation. 

Your role is to help visitors understand our services, book consultations, and get general information about our firm. You should be helpful, professional, and always remind users that for formal legal advice, they need to consult with our qualified lawyers.

Key points about Mears Law:
- We offer free 30-minute Initial Consultations
- We provide Strategic Consultations (paid)
- We serve clients both in Canada and internationally
- We focus on emerging areas like AI law and data privacy
- Our office hours are 9:00 AM – 4:30 PM
- We can be reached at mearslaw.ca

Always be polite, professional, and helpful. If you cannot answer a question based on the provided information, suggest they contact us directly or book a consultation.`,

  qaData: [
    {
      question: "How do I book a Consultation?",
      answer: "To book an appointment, visit our website at mearslaw.ca and click \"Book Now.\" You will see two options: Initial Consultation and Strategic Consultation. Select the option you need, then click \"Book an Appointment\" to view and choose from the available dates and times.",
      keywords: ["book", "appointment", "consultation", "schedule", "meeting"]
    },
    {
      question: "Do I need an appointment to speak with a lawyer?",
      answer: "Yes, consultations are by appointment. Please call or go to our website mearslaw.ca",
      keywords: ["appointment", "speak", "lawyer", "call", "visit"]
    },
    {
      question: "Do you offer free Consultations",
      answer: "Yes. We offer a free 30-minute Initial Consultation to discuss your legal situation, identify the issues, and explain your options.",
      keywords: ["free", "consultation", "no cost", "complimentary"]
    },
    {
      question: "What are your office hours?",
      answer: "9:00 AM – 4:30 PM",
      keywords: ["hours", "office", "time", "open", "available"]
    },
    {
      question: "What is Initial Consultation?",
      answer: "An Initial Consultation is a 30-minute meeting to review your legal situation, explain your options, and provide an estimate of our services.",
      keywords: ["initial", "consultation", "first", "meeting", "review"]
    },
    {
      question: "What is Strategic Consultation?",
      answer: "A Strategic Consultation is a 30-minute paid appointment where we provide you with the strategy and legal advice you need for your situation.",
      keywords: ["strategic", "consultation", "paid", "strategy", "advice"]
    },
    {
      question: "What areas of law does your firm practice?",
      answer: "Our firm focuses on: Artificial Intelligence Law, Commercial Law, Privacy Law, Consulting Services: Global Regulatory Compliance (AI & Privacy), Real Estate Law, Immigration Law, Notary Services, Litigation",
      keywords: ["practice", "areas", "law", "services", "specialties", "focus"]
    },
    {
      question: "How does your AI Chatbot work?",
      answer: "Our AI Chatbot provides instant, confidential guidance 24/7. It helps visitors find the right legal services, learn about our firm, or schedule a consultation. While the chatbot provides general legal information, it does not offer formal legal advice — that comes directly from our qualified lawyers.",
      keywords: ["chatbot", "AI", "how", "works", "guidance", "24/7"]
    },
    {
      question: "What makes Mears Law different from other law firms?",
      answer: "Our firm combines deep legal expertise, personalized client service, and forward-thinking innovation. We not only handle complex legal matters but also anticipate legal challenges in emerging areas such as AI, technology, and data privacy. Our goal is to deliver practical, business-oriented solutions that align with our clients' objectives.",
      keywords: ["different", "unique", "special", "innovation", "expertise", "forward-thinking"]
    },
    {
      question: "Do you represent clients outside of Canada?",
      answer: "Yes. While our firm is based in Canada, we regularly assist clients with cross-border transactions, regulatory compliance, and immigration matters. We also advise foreign entities seeking to establish or expand operations within Canada.",
      keywords: ["international", "outside", "Canada", "cross-border", "foreign", "global"]
    },
    {
      question: "How do I apply for a position or internship at your firm?",
      answer: "Visit our Careers page for information on current opportunities. We welcome applications from talented law students, articling students, and experienced professionals who share our commitment to excellence and integrity.",
      keywords: ["apply", "job", "career", "internship", "position", "employment"]
    },
    {
      question: "How can I contact your firm?",
      answer: "You can reach us through the Contact Us page, where you'll find our phone number, email, and office address. You can also submit an online inquiry form or use our chatbot for immediate assistance. Our team will respond promptly to schedule a consultation or provide the information you need.",
      keywords: ["contact", "reach", "phone", "email", "address", "get in touch"]
    },
    {
      question: "What are your fees and billing practices?",
      answer: "Our fees vary depending on the nature and complexity of the legal matter. We offer transparent billing practices and discuss fee structures with clients before commencing work. You can discuss the queries related to the fees in the initial consultation.",
      keywords: ["fees", "cost", "billing", "pricing", "rates", "payment"]
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
