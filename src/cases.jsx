// Case study data + components
const CASES = {
  'trade-regulatory': {
    idx: '01 / 03',
    title: ['Trade', <em key="e">Regulatory</em>],
    tag: 'AI-powered compliance at institutional scale',
    provenance: <>FinComply is a <strong>public reference architecture</strong> authored as a portfolio artifact. It is firm-agnostic, draws on publicly available FINRA Rule 6830/6893 documentation and AWC enforcement actions, and contains no proprietary code, data, or confidential logic from any past or present employer.</>,
    meta: [
      ['Role', 'Product Manager'],
      ['Company', 'UBS Group · US Regulatory'],
      ['Timeframe', '2024 — Present'],
      ['Stack', 'ML · LLM · NLP · Python'],
    ],
    vision: {
      label: '(01) — Vision',
      h: 'Make regulatory reporting a feature, not a cost center.',
      body: [
        "Before this product, the US Regulatory desk was drowning in manual reconciliations between eight fragmented data sources. Analysts were copying trade blotters into spreadsheets to meet SEC/FINRA Consolidated Audit Trail deadlines — slow, error-prone, and a real legal risk.",
        "My thesis: if we could treat compliance as a streaming data problem with a thin ML layer on top, we could turn a 48-hour scramble into a dashboard that settles itself. The north star was zero-touch CAT submission with full auditability.",
      ],
    },
    metrics: [
      ['25', '%', 'Manual workflow reduced'],
      ['16', '%', 'Reporting errors eliminated'],
      ['100', '%', 'CAT compliance coverage'],
    ],
    launch: {
      label: '(02) — Launch',
      h: 'From hypothesis to 300+ daily users.',
      body: [
        "I authored the product vision, wrote the initial PRD, and sequenced a 0→1 roadmap across three quarters. Ran 50+ stakeholder interviews with compliance officers, operations leads, and senior technology partners — translating pain points into prioritized user stories.",
        "MVP shipped in Q1, integrating 8+ upstream data sources. Rolled out analytics dashboards (Tableau/Power BI) through a paired training campaign that reached 300+ stakeholders. Boosted real-time decision-making by 20%.",
      ],
    },
    tl: [
      ['Discovery', 'Discovery & framing', 'Mapped the 11-step legacy workflow across 3 desks. Identified 4 automation chokepoints. Wrote the vision one-pager.'],
      ['MVP', 'MVP in 9 weeks', 'Shipped a narrow slice — one asset class, one report type — with engineering. Validated the data contract with real production volumes.'],
      ['Scale', 'Scale to CAT', 'Integrated 8+ sources. Added ML anomaly flagging. Trained 300+ stakeholders. Hit 100% CAT coverage.'],
      ['Now', 'Ongoing optimization', 'OKR-tracked enhancements; 25% workflow reduction sustained quarter-over-quarter.'],
    ],
    chips: ['SEC/FINRA CAT', 'Agile', 'Tableau', 'Python', 'LLM', 'NLP', 'MLOps'],
    next: { id: 'housmart', label: 'Next: HouSmart', title: ['The ', <em key="e">PropTech</em>, ' Bet'] },
  },
  'housmart': {
    idx: '02 / 03',
    title: [<em key="e">HouSmart</em>],
    tag: 'Deterministic-first AI for high-stakes real estate decisions',
    meta: [
      ['Role', 'Co-Founder & CTO'],
      ['Company', 'HouSmart (Seed stage)'],
      ['Timeframe', '2026 — Present'],
      ['Stack', 'LLM · RAG · Python · Next.js'],
    ],
    vision: {
      label: '(01) — Vision',
      h: 'The $3.5T residential market still runs on gut feel. Fix that.',
      body: [
        "US residential real estate is the largest asset class in the country, yet most investment decisions lean on outdated comps and personal intuition. Generative AI has the horsepower — but hallucinations in a $500K decision are career-ending.",
        "HouSmart's product wedge: a Deterministic-First AI engine that pairs LLM narrative generation with a post-output validation layer. Every claim is cross-checked against a structured truth set before it reaches the investor.",
      ],
    },
    metrics: [
      ['8', '', 'Cross-functional crew'],
      ['0', '', 'Hallucinations in eval set'],
      ['3', '', 'Pricing tiers defined'],
    ],
    launch: {
      label: '(02) — Launch',
      h: 'From hypothesis to live MVP across an 8-person team.',
      body: [
        "I own full product and technology leadership — system architecture, AI pipeline development, sprint planning, backlog prioritization, and OKR-driven milestone tracking. We shipped a production-grade live MVP end-to-end.",
        "Drove the seed funding strategy, P&L ownership, and a three-tier pricing architecture. Phase 2 roadmap is defined and sequenced: AI document analysis, portfolio monitoring, and a browser-extension distribution play.",
      ],
    },
    tl: [
      ['Thesis', 'Thesis & co-founding', 'Partnered with 2 co-founders. Wrote the Deterministic-First spec. Ran 30+ investor-discovery interviews.'],
      ['Build', 'Build in the open', 'Architected the validation layer. Shipped the first working prompt pipeline in 6 weeks with a 4-engineer pod.'],
      ['MVP', 'Live MVP', 'Public MVP with early customers. Pricing tiers live. Seed conversations open.'],
      ['Next', 'Phase 2 roadmap', 'Document analysis + portfolio monitoring + browser extension distribution.'],
    ],
    chips: ['0→1', 'LLM', 'Prompt Eval', 'VC Pitch', 'P&L', 'Roadmap', 'OKR'],
    next: { id: 'visionweave', label: 'Next: VisionWeave', title: ['The ', <em key="e">Vision</em>, ' Concept'] },
  },
  'visionweave': {
    idx: '03 / 03',
    title: [<em key="e">Vision</em>, 'Weave'],
    tag: 'An AI photography coach that lives in your camera.',
    meta: [
      ['Role', 'Founder'],
      ['Company', 'Side exploration'],
      ['Timeframe', '2025'],
      ['Stack', 'CV · Edge IoT · Vue · PyTorch'],
    ],
    vision: {
      label: '(01) — Vision',
      h: 'Close the gap between "this could be a photo" and "this should be a photo."',
      body: [
        "Photography has never been more accessible — yet the gap between taking a photo and taking a great photo keeps widening. Amateurs know their shots could be better, but the knowledge, the light, and the location all live in separate apps. VisionWeave stitches them together.",
        "An AI-native coaching layer that knows where you are, understands what you love, and tells you exactly how to capture it — real-time composition overlays, personalized style profiling, and location-aware shoot alerts. A 24/7 photography coach in the camera.",
      ],
    },
    metrics: [
      ['12', '', 'Event types captured'],
      ['0', '', 'PII leaves device'],
      ['1', '', 'Camera = full telemetry'],
    ],
    launch: {
      label: '(02) — Concept',
      h: 'From a style quiz to a paywalled shoot alert.',
      body: [
        "Authored the PRD and defined the freemium wedge between passive tutorials (YouTube, 500px) and technical camera apps (Halide, VSCO). Target: 100K downloads across 6 launch markets, 20% D30 retention, 4–6% Pro conversion.",
        "Designed the full onboarding flow — style quiz, taste profiling, and the paywalled notification that converts free users: *\u201CFog rolling in at 7am — perfect for your moody style.\u201D* Prototype and specs ready; shipping pending founder bandwidth.",
      ],
    },
    tl: [
      ['Landscape', 'Landscape map', 'Evaluated 7 adjacent products. Drew a 2×2 on privacy vs. depth of signal.'],
      ['Proto', 'Clickable prototype', '14-screen Figma deck. Validated with 4 boutique-retail operators.'],
      ['Backlog', 'In strategic backlog', 'Held pending edge-model commoditization curve.'],
    ],
    chips: ['Consumer AI', 'Mobile AI', 'Creator Tools', 'Photography', 'Figma'],
    next: { id: 'trade-regulatory', label: 'Back to start', title: ['The ', <em key="e">Regulatory</em>, ' Launch'] },
  },
};

function CaseStudy({ c, go }) {
  return (
    <div className="case">
      <div className="case-hero">
        <a className="case-back" onClick={()=>go('products')}>← All Products</a>
        <div className="case-idx">{c.idx}</div>
        <h1 className="case-title">{c.title}</h1>
        <div style={{marginTop:28,maxWidth:720,fontSize:20,lineHeight:1.45,color:'var(--ink-soft)',fontFamily:'Instrument Serif, serif',fontStyle:'italic'}}>{c.tag}</div>

        <div className="case-meta">
          {c.meta.map(([k,v],i)=>(
            <div key={i}><div className="k">{k}</div><div className="v">{v}</div></div>
          ))}
        </div>
      </div>

      <div className="case-section">
        <div className="slabel">{c.vision.label}</div>
        <div className="sbody">
          <h3>{c.vision.h}</h3>
          {c.vision.body.map((p,i)=><p key={i}>{p}</p>)}
        </div>
      </div>

      <div className="case-visual">
        <div className="cv-inner">
          <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(244,241,235,.5)',marginBottom:24}}>Key outcomes</div>
          <div className="case-metrics">
            {c.metrics.map(([big,sfx,lbl],i)=>(
              <div className="m" key={i} style={{background:'#1C1B1A',color:'#F4F1EB'}}>
                <div className="big">{big}<em>{sfx}</em></div>
                <div className="lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="slabel">{c.launch.label}</div>
        <div className="sbody">
          <h3>{c.launch.h}</h3>
          {c.launch.body.map((p,i)=><p key={i}>{p}</p>)}
          <div className="chips" style={{marginTop:28}}>
            {c.chips.map(x=><div className="chip" key={x}>{x}</div>)}
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="slabel">(03) — Execution</div>
        <div className="sbody">
          <h3>How it shipped.</h3>
          <div className="timeline">
            {c.tl.map(([phase,h,p],i)=>(
              <div className="tl-item" key={i}>
                <div className="tl-phase">{phase}</div>
                <h5>{h}</h5>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="next-case" onClick={()=>go(c.next.id)} style={{cursor:'pointer'}}>
        <div>
          <div className="nc-label">{c.next.label}</div>
          <h3>{c.next.title}</h3>
        </div>
        <div style={{fontFamily:'Instrument Serif,serif',fontSize:80,fontStyle:'italic',color:'var(--orange)'}}>→</div>
      </div>
    </div>
  );
}

Object.assign(window, { CASES, CaseStudy });
