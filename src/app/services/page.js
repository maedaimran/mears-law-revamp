"use client";
import { useEffect, useRef } from "react";

function useBiDirectionalReveal() {
  const lastY = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));

    if (reduce) {
      nodes.forEach((el) => el.classList.add("show"));
      return;
    }

    let scrollDir = "down";
    const onScroll = () => {
      const y = window.scrollY || 0;
      scrollDir = y > lastY.current ? "down" : "up";
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          el.classList.toggle("from-up", scrollDir === "up");
          el.classList.toggle("from-down", scrollDir === "down");

          if (entry.isIntersecting) {
            const delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add("show");
          } else {
            el.classList.remove("show");
            el.style.transitionDelay = "";
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);
}

const CheckIcon = () => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="icon" aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l2.5 2.5L16 9" />
    <style jsx>{`.icon{margin-top:4px;flex:0 0 auto;}`}</style>
  </svg>
);

function ServiceCard({ title, tagline, blurb, keys, clients, id }) {
  return (
    <article className="service" data-reveal id={id}>
      <header className="svc-head">
        <h2 className="h2">{title}</h2>
        {tagline && <p className="tagline">{tagline}</p>}
        <p className="blurb">{blurb}</p>
      </header>

      <div className="bubble">
        <div className="bubble-col">
          <div className="bubble-title">Key Services</div>
          <ul className="list">
            {keys.map((item, i) => (
              <li className="list-item" key={i}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bubble-divider"></div>

        <div className="bubble-col">
          <div className="bubble-title">Representative Clients</div>
          <div className="chips">
            {clients.map((c, i) => (
              <span key={i} className="chip">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .service{ 
          opacity:0; 
          transform:translateY(26px); 
          transition:opacity .6s ease, transform .6s ease;
          scroll-margin-top: 120px;
        }
        .service.show{ opacity:1; transform:none; }
        
        .svc-head{ margin-bottom:20px; }
        .h2{ 
          font-size:32px; 
          line-height:1.2; 
          color:#0A1628; 
          font-weight:600; 
          margin:0 0 8px; 
        }
        .tagline{ 
          color:#1E3A5F; 
          margin:0 0 8px; 
          font-size:18px; 
          font-weight:400; 
        }
        .blurb{ 
          color:#374151; 
          margin:0; 
          line-height:1.7; 
          font-size:16px;
        }
        @media (max-width:720px){ 
          .h2{ font-size:26px; } 
          .tagline{font-size:16px;} 
        }

        .bubble{
          margin-top:20px;
          border-radius:12px;
          border:1px solid #E5E7EB;
          box-shadow:0 2px 8px rgba(10,22,40,.06);
          padding:32px;
          display:grid;
          grid-template-columns:1fr;
          gap:32px;
          background:#FFFFFF;
          position:relative;
        }
        
        @media (min-width:860px){ 
          .bubble{ 
            grid-template-columns:1fr auto 1fr;
            gap:40px;
          } 
        }

        .bubble-divider{
          display:none;
        }
        
        @media (min-width:860px){
          .bubble-divider{
            display:block;
            width:1px;
            background:linear-gradient(
              to bottom,
              transparent 0%,
              #E5E7EB 10%,
              #E5E7EB 90%,
              transparent 100%
            );
          }
        }

        .bubble-title{ 
          font-size:16px; 
          font-weight:700; 
          color:#0A1628; 
          margin-bottom:16px;
          text-transform:uppercase;
          letter-spacing:0.5px;
        }
        
        .list{ 
          list-style:none; 
          padding:0; 
          margin:0; 
          display:grid; 
          gap:12px; 
        }
        
        .list-item{ 
          display:flex; 
          align-items:flex-start; 
          gap:10px; 
          color:#374151;
          font-size:15px;
          line-height:1.6;
        }

        .chips{ 
          display:flex; 
          flex-wrap:wrap; 
          gap:8px; 
        }
        
        .chip{
          display:inline-block; 
          padding:8px 16px; 
          border-radius:6px;
          background:#F0F4F8; 
          color:#1E3A5F; 
          font-weight:600; 
          font-size:14px; 
          border:1px solid #D1DDE6;
          transition:all 0.2s ease;
        }
        
        .chip:hover{
          background:#E8F4F8;
          border-color:#B8D4E3;
        }
      `}</style>
    </article>
  );
}

export default function ServicesPage() {
  useBiDirectionalReveal();

  const sections = [
    {
      id: "ai-adoption",
      title: "AI Adoption",
      blurb:
        "As artificial intelligence transforms industries, we help organizations navigate legal and ethical challenges associated with AI adoption. Our lawyers provide guidance on regulatory compliance, data use, intellectual property, and risk mitigation, helping clients integrate AI responsibly and effectively.",
      keys: [
        "AI Regulatory Readiness",
        "Ethical AI Frameworks",
        "IP & Data Licensing",
        "Compliance & Risk",
        "Vendor Procurement",
        "Product Governance",
      ],
      clients: ["Tech Startups", "Enterprises", "Public Entities"],
    },
    {
      id: "commercial-real-estate",
      title: "Commercial Real Estate",
      blurb:
        "We assist clients in all aspects of commercial property transactions, including acquisition, financing, leasing, and development. Our lawyers ensure that every deal is negotiated strategically, documented precisely, and complies with all applicable commercial and real estate laws.",
      keys: [
        "Acquisitions & Dispositions",
        "Commercial Leasing (Landlord & Tenant)",
        "Real Estate Financing",
        "Zoning & Land Use",
        "Joint Ventures & Co-Ownership",
        "Title & Due Diligence",
      ],
      clients: ["Investors", "Developers", "REITs"],
    },
    {
      id: "corporate-law",
      title: "Corporate Law",
      blurb:
        "We represent businesses of all sizes in matters of incorporation, governance, and compliance. Our corporate lawyers assist with shareholder agreements, corporate restructuring, financing, and general counsel support, ensuring that your organization remains secure and well-structured.",
      keys: [
        "Incorporation & Organization",
        "Shareholder & Partnership Agreements",
        "Corporate Governance",
        "Commercial Contracts",
        "Restructuring & Reorganizations",
        "Equity & Debt Financing",
      ],
      clients: ["Corporations", "Startups", "Family Enterprises"],
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      blurb:
        "We help clients resolve disputes through negotiation, mediation, arbitration, or litigation. Our focus is always on achieving fair, timely, and cost-effective outcomes. Whether it's a commercial conflict or a contractual disagreement, we advocate firmly and strategically on your behalf.",
      keys: [
        "Negotiation & Mediation",
        "Arbitration & Litigation",
        "Commercial Disputes",
        "Contract Disputes",
        "Shareholder Disputes",
        "Appeals",
      ],
      clients: ["Corporations", "Small Businesses", "Entrepreneurs"],
    },
    {
      id: "immigration-law",
      title: "Immigration Law",
      blurb:
        "Our Immigration Law team assists individuals, families, and employers with all aspects of immigration and citizenship. We provide representation for work permits, permanent residency, study permits, and compliance matters, ensuring a smooth and transparent process.",
      keys: [
        "Work Permits",
        "Permanent Residency",
        "Family Sponsorship",
        "Employer Compliance",
        "Citizenship Applications",
        "Appeals",
      ],
      clients: ["Individuals", "Families", "Employers"],
    },
    {
      id: "infrastructure-real-estate",
      title: "Infrastructure Real Estate",
      blurb:
        "Our firm advises developers, contractors, investors, and public authorities on large-scale infrastructure projects across Canada. From project planning and financing to construction and regulatory compliance, we ensure each development is structured efficiently and meets all legal and governmental standards.",
      keys: [
        "Project Planning & Development",
        "Public-Private Partnerships (P3)",
        "Construction Contracts & Risk Allocation",
        "Financing & Security",
        "Permitting & Regulatory Compliance",
        "Procurement & Tendering",
      ],
      clients: ["Developers", "Contractors", "Investors", "Public Authorities"],
    },
    {
      id: "law-and-regulations",
      title: "Law and Regulations",
      blurb:
        "We offer comprehensive legal services in AI governance, training, product development, and acquisition. Our team ensures that your AI initiatives comply with the latest regulations and best practices. We assist clients in understanding and complying with federal, provincial, and municipal regulations. Our team provides guidance on licensing, administrative compliance, and regulatory investigations.",
      keys: [
        "AI Governance",
        "Regulatory Training",
        "Product Development & Acquisition",
        "Federal & Provincial Compliance",
        "Licensing & Investigations",
      ],
      clients: ["Corporations", "Public Entities", "Startups"],
    },
    {
      id: "litigation",
      title: "Litigation",
      blurb:
        "Our litigation lawyer is an experienced advocate in civil, commercial, and administrative proceedings. We represent clients before all levels of court and tribunals, combining rigorous legal analysis with strategic advocacy to achieve favourable results.",
      keys: [
        "Civil Litigation",
        "Commercial Litigation",
        "Administrative Proceedings",
        "Tribunal Advocacy",
        "Appeals",
      ],
      clients: ["Corporations", "Professionals", "Individuals"],
    },
    {
      id: "mergers-and-acquisitions",
      title: "Mergers and Acquisitions",
      blurb:
        "Our M&A team advises on both domestic and cross-border transactions. We handle due diligence, negotiation, and contract drafting with precision, ensuring your business transitions are seamless and legally sound. We work to minimize risk while maximizing value for our clients.",
      keys: [
        "Buy-Side & Sell-Side Transactions",
        "Due Diligence & Disclosure",
        "Transaction Structuring",
        "Asset & Share Purchases",
        "LOIs & Definitive Agreements",
        "Post-Closing Integration",
      ],
      clients: ["Private Equity", "Corporate Buyers", "Founders"],
    },
    {
      id: "notary-services",
      title: "Notary Services",
      blurb:
        "We provide notarial services for a wide range of legal documents, including affidavits, statutory declarations, certified copies, and international documents. Our notaries ensure accuracy, compliance, and professionalism in every certification.",
      keys: [
        "Affidavits & Declarations",
        "Certified True Copies",
        "Consent Letters & Invitations",
        "Apostille & Authentication Support",
      ],
      clients: ["Individuals", "Businesses", "Professionals"],
    },
    {
      id: "privacy-and-data-protection",
      title: "Privacy and Data Protection Law",
      blurb:
        "In a digital-first era, safeguarding information is essential. We assist organizations in developing privacy frameworks that comply with Canadian privacy legislation, including PIPEDA and other sector-specific regulations. Our team also provides counsel on cybersecurity policies, breach response, and data governance.",
      keys: [
        "Privacy Compliance",
        "Cybersecurity Policies",
        "Data Breach Response",
        "Cross-Border Transfers",
        "Vendor Assessments",
        "Governance Programs",
      ],
      clients: ["Tech Companies", "Healthcare", "Financial Services"],
    },
    {
      id: "real-estate-law",
      title: "Real Estate Law",
      blurb:
        "Our Real Estate Law team provides full-spectrum support across commercial, residential, and development projects. We handle transactions, land use, leasing, financing, and title matters with diligence and efficiency. We work closely with developers, lenders, and owners to protect their investments and interests.",
      keys: [
        "Transactions",
        "Leasing",
        "Financing",
        "Title Matters",
        "Land Use",
        "Development Projects",
      ],
      clients: ["Developers", "Lenders", "Owners"],
    },
    {
      id: "residential-real-estate",
      title: "Residential Real Estate",
      blurb:
        "Whether you are buying, selling, or refinancing your property, our lawyers provide experienced guidance through every stage of a residential transaction. We handle title searches, purchase agreements, mortgage documentation, and closing processes with attention to detail and care.",
      keys: [
        "Purchase & Sale Agreements",
        "Title Searches & Insurance",
        "Mortgage & Refinance",
        "Condominium & New-Build",
        "Closing Management",
        "Private Lending",
      ],
      clients: ["Home Buyers", "Sellers", "Lenders", "Builders"],
    },
  ];

  return (
    <main className="page">
      {/* HERO with animated background */}
      <section className="hero">
        <div className="animated-bg">
          <svg className="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#0A1628', stopOpacity: 0.12}} />
                <stop offset="50%" style={{stopColor: '#0A1628', stopOpacity: 0.18}} />
                <stop offset="100%" style={{stopColor: '#0A1628', stopOpacity: 0.12}} />
              </linearGradient>
            </defs>
            
            {/* Animated lines */}
            <g className="line-group">
              <path d="M0,150 Q300,100 600,150 T1200,150" fill="none" stroke="url(#grad1)" strokeWidth="2.5" className="line line-1"/>
              <path d="M0,180 Q300,130 600,180 T1200,180" fill="none" stroke="#0A1628" strokeWidth="2" opacity="0.15" className="line line-2"/>
              <path d="M0,120 Q300,70 600,120 T1200,120" fill="none" stroke="#0A1628" strokeWidth="1.5" opacity="0.12" className="line line-3"/>
              <path d="M0,200 Q300,250 600,200 T1200,200" fill="none" stroke="#0A1628" strokeWidth="2" opacity="0.14" className="line line-4"/>
              <path d="M0,90 Q300,40 600,90 T1200,90" fill="none" stroke="#0A1628" strokeWidth="1.5" opacity="0.10" className="line line-5"/>
            </g>
            
            {/* Subtle dots */}
            <circle cx="200" cy="150" r="4" fill="#0A1628" opacity="0.18" className="dot dot-1"/>
            <circle cx="500" cy="180" r="3" fill="#0A1628" opacity="0.16" className="dot dot-2"/>
            <circle cx="800" cy="120" r="3.5" fill="#0A1628" opacity="0.14" className="dot dot-3"/>
            <circle cx="1000" cy="200" r="3" fill="#0A1628" opacity="0.12" className="dot dot-4"/>
          </svg>
        </div>
        
        <div className="container narrow center hero-content" data-reveal>
          <h1 className="h1">Legal Services</h1>
          <p className="lead">
            We focus on the practice areas where we deliver the most value—so you get senior
            attention, practical advice, and outcomes that matter.
          </p>
        </div>
      </section>

      {/* SERVICES (centered container) */}
      <section className="section">
        <div className="container stack">
          {sections.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>

      <style jsx>{`
        /* base reveal state */
        [data-reveal]{
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .55s ease, transform .55s ease;
          will-change: opacity, transform;
        }
        /* direction-aware offset */
        [data-reveal].from-up   { transform: translateY(-24px); }
        [data-reveal].from-down { transform: translateY(24px);  }

        /* visible */
        [data-reveal].show{
          opacity: 1;
          transform: translateY(0);
        }

        /* Animated background styles */
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          opacity: 0.5;
        }

        .bg-svg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Line animations */
        .line-1 {
          animation: float 20s ease-in-out infinite;
        }

        .line-2 {
          animation: float 25s ease-in-out infinite reverse;
        }

        .line-3 {
          animation: float 18s ease-in-out infinite;
        }

        .line-4 {
          animation: float 22s ease-in-out infinite reverse;
        }

        .line-5 {
          animation: float 28s ease-in-out infinite;
        }

        /* Dot animations */
        .dot-1 {
          animation: pulse 4s ease-in-out infinite;
        }

        .dot-2 {
          animation: pulse 5s ease-in-out infinite 1s;
        }

        .dot-3 {
          animation: pulse 4.5s ease-in-out infinite 2s;
        }

        .dot-4 {
          animation: pulse 6s ease-in-out infinite 0.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(15px);
          }
          50% {
            transform: translateY(5px) translateX(-10px);
          }
          75% {
            transform: translateY(-5px) translateX(20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.12;
            transform: scale(1);
          }
          50% {
            opacity: 0.22;
            transform: scale(1.3);
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .line-1, .line-2, .line-3, .line-4, .line-5,
          .dot-1, .dot-2, .dot-3, .dot-4 {
            animation: none;
          }
        }
      `}</style>

      <style jsx>{`
        :root{
          --ink:#0A1628;
          --body:#374151;
          --accent:#1E3A5F;
        }

        .page{ 
          background:#f3f4f6; 
          color:var(--body); 
          min-height:100vh; 
        }
        
        .container{ 
          width:min(1200px,92%); 
          margin:0 auto; 
        }
        
        .narrow{ 
          width:min(820px,90%); 
        }
        
        .center{ 
          text-align:center; 
        }

        .hero{ 
          padding:64px 0 48px;
          background:#FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }
        
        .h1{ 
          font-size:52px; 
          line-height:1.1; 
          color:#0A1628; 
          font-weight:700; 
          margin:0 0 16px; 
        }
        
        .lead{ 
          font-size:20px; 
          line-height:1.65; 
          margin:0; 
          color:#374151; 
          opacity:.9; 
        }
        
        @media (max-width:720px){ 
          .h1{ font-size:36px; } 
          .lead{ font-size:18px; } 
          .hero{ padding:48px 0 36px; }
        }

        .section{ 
          padding:48px 0 64px;
          background:#f3f4f6;
        }

        .stack{ 
          display:grid; 
          gap:48px; 
        }
        
        @media (max-width:720px){ 
          .stack{ gap:36px; } 
        }
      `}</style>
    </main>
  );
}