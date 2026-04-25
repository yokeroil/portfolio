// Experience / Products index / Strategies / Photography / Contact

function Experience() {
  return (
    <section className="page">
      <div className="section-label fade">(—) — Professional Experience</div>
      <div className="exp-head" style={{marginTop:18}}>
        <h2 className="fade">Six years <em>in the trenches.</em></h2>
        <p className="fade">25+ internal products and 80+ features at UBS, then a seed-stage PropTech bet. $10M+ in combined annual savings through automation, fine avoidance, and operational efficiency. Certified PMP. UNC — MSc Information Science, 4.0 GPA.</p>
      </div>

      <div className="exp-item fade">
        <div className="yr">01/2026 — Present<b>New York, NY</b></div>
        <div>
          <h4>HouSmart</h4>
          <div className="role">Co-Founder & CTO</div>
          <p style={{color:'var(--ink-soft)',fontSize:15,lineHeight:1.55,maxWidth:520}}>Production-grade AI PropTech platform targeting the $3.5T US residential market. Live MVP shipped end-to-end with an 8-person cross-functional team. Full-stack ownership — architecture, LLM lifecycle, pricing, and fundraising.</p>
          <div className="chips">
            {['0→1 Launch','LLM Lifecycle','Prompt Eval','Seed Funding','P&L','OKRs'].map(x=><div className="chip" key={x}>{x}</div>)}
          </div>
        </div>
        <ul>
          <li>Built Deterministic-First AI engine — prompt engineering pipelines plus a post-output validation layer that eliminates hallucination risk in high-stakes investment decisions.</li>
          <li>Drove seed funding strategy, P&L ownership, and three-tier pricing architecture; roadmap targets AI chatbot with persona analysis, multi-model reasoning, and smart-offer strategy via harness engineering.</li>
          <li>Lead executive stakeholder communications with investors and advisors — translating complex AI architecture into investor-grade narrative for VC pitches and accelerator applications.</li>
          <li>Continuous customer discovery with real estate investors; pain points feed directly into architecture decisions and roadmap priorities.</li>
        </ul>
      </div>

      <div className="exp-item fade">
        <div className="yr">09/2024 — Present<b>UBS Group</b></div>
        <div>
          <h4>US Regulatory</h4>
          <div className="role">Product Manager</div>
          <p style={{color:'var(--ink-soft)',fontSize:15,lineHeight:1.55,maxWidth:520}}>0-to-1 internal AI regulatory agent automating FINRA CAT exception reconciliation, classification, and correction. Deterministic-first, LLM-augmented multi-agent pipeline — Planner / Executor / Evaluator.</p>
          <div className="chips">
            {['FINRA CAT','Multi-Agent','LLM','Tableau','Stakeholder Mgmt','Agile'].map(x=><div className="chip" key={x}>{x}</div>)}
          </div>
        </div>
        <ul>
          <li>80% reduction in manual exception-handling; regulatory error rate held within 1% steady-state and 3% on peak-volume days — well below acceptance thresholds.</li>
          <li>40–60% FTE efficiency gain; collapsed exception MTTR from 4–12 hours to under 60 minutes; estimated $3–4M annual savings through fine avoidance and operational efficiency.</li>
          <li>Integrated 8+ data sources into scalable reporting workflows; launched real-time CCO-grade governance dashboards (Tableau/Power BI) for 300+ internal stakeholders.</li>
          <li>Conducted 50+ stakeholder interviews and user-research sessions to translate pain points into actionable requirements.</li>
        </ul>
      </div>

      <div className="exp-item fade">
        <div className="yr">08/2021 — 09/2024<b>UBS Group</b></div>
        <div>
          <h4>Risk Governance</h4>
          <div className="role">Product Manager</div>
          <p style={{color:'var(--ink-soft)',fontSize:15,lineHeight:1.55,maxWidth:520}}>Data platform enablement across the operational risk function. 23 internal data assets serving 4,000+ enterprise users. Estimated $7–8M annual savings.</p>
          <div className="chips">
            {['Cloud Adoption','Data Pipelines','Self-Service','SQL','Python','ITIL 4'].map(x=><div className="chip" key={x}>{x}</div>)}
          </div>
        </div>
        <ul>
          <li>Launched 23 internal data assets — reporting pipelines, analytics dashboards, and self-service data products — collaborating with engineering and IT service teams.</li>
          <li>Designed the cloud adoption product roadmap; service management automation framework adopted by 60+ product owners across multiple sectors — 35% reduction in technical debt.</li>
          <li>Drove an estimated $7–8M in annual savings through reporting automation, procurement spend optimization, and governance & compliance streamlining.</li>
        </ul>
      </div>

      <div className="exp-item fade">
        <div className="yr">2014 — 2020<b>UNC Chapel Hill</b></div>
        <div>
          <h4>Education</h4>
          <div className="role">MSc + BSc, Information Science</div>
          <p style={{color:'var(--ink-soft)',fontSize:15,lineHeight:1.55,maxWidth:520}}>MS in Information Science (GPA 4.0/4.0), 2018–2020. BS in Information Science & Economics (GPA 3.7/4.0), 2014–2018.</p>
          <div className="chips">
            {['Information Science','Economics','Data Systems','UX Research'].map(x=><div className="chip" key={x}>{x}</div>)}
          </div>
        </div>
        <ul>
          <li>Certifications: PMP · Tableau Certified Associate · ITIL 4 Foundation · IBM Data Science Professional.</li>
        </ul>
      </div>
    </section>
  );
}

function ProductsIndex({ go }) {
  const rows = [
    { id:'trade-regulatory', n:'/ 01', name:'Trade Regulatory', cat:'Financial Compliance · AI', yr:'2024 — Present' },
    { id:'housmart', n:'/ 02', name:'HouSmart', cat:'AI PropTech · 0→1', yr:'2026 — Present' },
    { id:'visionweave', n:'/ 03', name:'VisionWeave', cat:'Consumer AI · Mobile · Creator Tools', yr:'Concept 2025' },
  ];
  return (
    <section className="page">
      <div className="section-label fade">(—) — Product Launches</div>
      <div className="exp-head" style={{marginTop:18}}>
        <h2 className="fade">Three ships. <em>One thesis.</em></h2>
        <p className="fade">Every launch below started the same way — a muddy problem, a sharp hypothesis, and a commitment to ship the smallest thing that could prove it.</p>
      </div>
      <div className="products-preview" style={{padding:0}}>
        {rows.map(r=>(
          <div className="product-row fade" key={r.id} onClick={()=>go(r.id)}>
            <div className="pnum">{r.n}</div>
            <div className="pname">{r.name}</div>
            <div className="pcat">{r.cat}</div>
            <div className="pyear">{r.yr}</div>
            <div className="parrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Strategies() {
  const cards = [
    { n:'01', h:'Deterministic-First AI', p:'LLMs are storytellers. Pair them with a structured validation layer and suddenly they become trustworthy enough for capital-allocation decisions. The novelty is not the model — it is the guardrails.', tag:'Frameworks' },
    { n:'02', h:'Regulate the pipeline, not the feature', p:'In compliance-heavy domains, shipping a feature fast is a liability. Shipping a pipeline fast is a moat. Invest in the data contract before the UI.', tag:'MLOps' },
    { n:'03', h:'Customer discovery as a Tuesday habit', p:'50+ stakeholder interviews is not a phase — it is a rhythm. Roadmap priorities that survive contact with reality come from continuous, low-friction customer conversations.', tag:'Discovery' },
    { n:'04', h:'Price the architecture, not the spreadsheet', p:'Three-tier pricing is not an Excel exercise. It is an architecture decision — what is cheap to serve, what is expensive, what is painful to meter. Build pricing into the stack on day one.', tag:'Commercial' },
    { n:'05', h:'Translate or die', p:'The PM who cannot explain a transformer to a compliance officer, or a CAT submission to a data scientist, is a bottleneck. Translation is the primary job.', tag:'Leadership' },
  ];
  return (
    <section className="page">
      <div className="section-label fade">(—) — Innovative Strategies</div>
      <div className="exp-head" style={{marginTop:18}}>
        <h2 className="fade">Five principles I <em>actually use.</em></h2>
        <p className="fade">Not a LinkedIn post. Not a framework poster. These are the operating heuristics earned from 5+ years of shipping inside a global bank, a seed-stage startup, and everything in between.</p>
      </div>

      <div className="strat-grid">
        {cards.map((c,i)=>(
          <div className="strat-card fade" key={i}>
            <div>
              <div className="st-num">{c.n}</div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
            <div className="st-tag">✦ {c.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Photography() {
  const layout = React.useMemo(() => {
    const ar = {
      'b0003816.jpg': 2000/1500, 'b0004068.jpg': 2000/1499, 'b0004116.jpg': 2000/1499,
      'b0004937.jpg': 1124/2000, 'b0006004.jpg': 2000/1500,
      'b0006710jpg1757640780.jpg': 1500/2000, 'b0006812jpg1759015690.jpg': 1500/2000,
      'b0006838jpg1760162038.jpg': 1499/2000, 'b0006859jpg1760174026.jpg': 1125/2000,
      'b0006867jpg1760174646.jpg': 1125/2000, 'b0007049jpg1760268684.jpg': 1500/2000,
      'b0007171jpg1760284886.jpg': 1600/2000, 'b0007451jpg1760365258.jpg': 1500/2000,
      'b0008153jpg1760525522.jpg': 2000/1125, 'b0008325jpg1760602586.jpg': 1499/2000,
      'b0008737jpg1760695470.jpg': 2000/1499, 'b0008806jpg1760781566.jpg': 1499/2000,
      'b0008893jpg1760786276.jpg': 1428/2000, 'b0009432jpg1760885128.jpg': 1500/2000,
      'b0009440jpg1760885368.jpg': 2000/1599, 'b0009471jpg1760900310.jpg': 2000/1500,
      'b0009565jpg1760959664.jpg': 1500/2000, 'b0009805jpg1773347340.jpg': 1499/2000,
      'b0009833jpg1773353630.jpg': 1428/2000, 'img_1229.jpg': 2000/1499,
    };
    const rows = [
      { cols:[ {p:'img_1229.jpg', w:60, fill:{t:'quote',v:'The city only exhales after midnight.'}}, {p:'b0006710jpg1757640780.jpg', w:40} ]},
      { cols:[ {p:'b0004068.jpg', w:45, fill:{t:'ding',v:'✦ ✦ ✦'}}, {p:'b0003816.jpg', w:55} ]},
      { cols:[ {p:'b0004116.jpg', w:55, fill:{t:'warm',v:'Roaming the cement forest.'}}, {p:'b0006867jpg1760174646.jpg', w:45} ]},
      { cols:[ {p:'b0006859jpg1760174026.jpg', w:45}, {p:'b0008325jpg1760602586.jpg', w:55, fill:{t:'quote',v:'Light is the only material.'}} ]},
      { cols:[ {p:'b0006812jpg1759015690.jpg', w:50}, {p:'b0007049jpg1760268684.jpg', w:50} ]},
      { cols:[ {p:'b0008153jpg1760525522.jpg', w:55, fill:{t:'hook',v:'Up in the sky.'}}, {p:'b0006838jpg1760162038.jpg', w:45} ]},
      { cols:[ {p:'b0007171jpg1760284886.jpg', w:50}, {p:'b0007451jpg1760365258.jpg', w:50} ]},
      { cols:[ {p:'b0008737jpg1760695470.jpg', w:60, fill:{t:'quote',v:'North of the maps.'}}, {p:'b0008806jpg1760781566.jpg', w:40} ]},
      { cols:[ {p:'b0009432jpg1760885128.jpg', w:50}, {p:'b0008893jpg1760786276.jpg', w:50} ]},
      { cols:[ {p:'b0009440jpg1760885368.jpg', w:55}, {p:'b0009471jpg1760900310.jpg', w:45, fill:{t:'hook',v:'Under the aurora.'}} ]},
      { cols:[ {p:'b0009565jpg1760959664.jpg', w:45}, {p:'b0006004.jpg', w:55, fill:{t:'quote',v:'Old roofs, new mornings.'}} ]},
      { cols:[ {p:'b0004937.jpg', w:40, fill:{t:'quote',v:'Skies remember everything.'}}, {p:'b0009805jpg1773347340.jpg', w:60} ]},
      { cols:[ {p:'b0009833jpg1773353630.jpg', w:40}, {w:60, fill:{t:'hook',v:'To be amazed…', solo:true}} ]},
    ];
    return rows.map(row => {
      const heights = row.cols.map(c => c.p ? c.w / ar[c.p] : 0);
      const maxH = Math.max(...heights);
      return {
        cols: row.cols.map((c, i) => {
          let fillerAR = null;
          if (c.fill) {
            const myH = heights[i];
            const gapH = c.fill.solo ? maxH : (maxH - myH);
            fillerAR = c.w / Math.max(gapH, 1);
          }
          return Object.assign({}, c, { ar: c.p ? ar[c.p] : null, fillerAR });
        })
      };
    });
  }, []);

  return (
    <section className="page">
      <div className="section-label fade">(—) — Photography</div>
      <div className="photo-intro" style={{marginTop:18}}>
        <h2 className="fade">Off the <em>clock.</em></h2>
        <p className="fade">I shoot — mostly 35mm, mostly cities, mostly early in the morning. Photography keeps the product muscle honed: it is just composition, timing, and editorial restraint in another medium.</p>
      </div>

      <div className="photo-wall">
        {layout.map((row, i) => (
          <div className="photo-row" key={i}>
            {row.cols.map((c, j) => (
              <div className="photo-col" key={j} style={{flex:`0 0 calc(${c.w}% - 7px)`}}>
                {c.p && (
                  <div className="photo fade" style={{aspectRatio: `${c.ar}`}}>
                    <div className="ph-inner"><img src={`assets/photos/${c.p}`} alt="" loading="lazy"/></div>
                  </div>
                )}
                {c.fill && (
                  <div className={`filler fill-${c.fill.t} fade`} style={{aspectRatio: `${c.fillerAR}`}}>
                    {c.fill.t === 'ding' ? <span>{c.fill.v}</span> : <em>{c.fill.v}</em>}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page contact-hero">
      <div className="section-label fade">(—) — Let’s talk</div>
      <h2 className="fade" style={{marginTop:18}}>
        Say <em>hello</em>.<br/>
        <span className="marquee-word">Let’s</span> build<br/>something <em>that ships.</em>
      </h2>

      <div className="contact-grid">
        <a className="contact-card fade" href="mailto:zihaoli1996@gmail.com">
          <div className="clabel">Email ↗</div>
          <div className="cval">zihaoli1996<br/>@gmail.com</div>
        </a>
        <a className="contact-card fade" href="tel:+19198138052">
          <div className="clabel">Phone ↗</div>
          <div className="cval">+1 (919)<br/>813-8052</div>
        </a>
      </div>

      <div className="socials">
        <a href="#" onClick={e=>e.preventDefault()}><span className="sn">01 / LinkedIn</span><span className="sv">/in/zihaoli</span></a>
        <a href="assets/Zihao_Li_Resume.pdf" target="_blank"><span className="sn">02 / Resume</span><span className="sv">Download PDF</span></a>
        <a href="#" onClick={e=>e.preventDefault()}><span className="sn">03 / GitHub</span><span className="sv">@lannyli</span></a>
        <a href="#" onClick={e=>e.preventDefault()}><span className="sn">04 / Calendly</span><span className="sv">Book 30 min</span></a>
      </div>

      <div style={{marginTop:120,paddingTop:32,borderTop:'1px solid var(--rule)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:20,fontFamily:'JetBrains Mono,monospace',fontSize:11,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)'}} className="fade">
        <div>© 2026 Zihao (Lanny) Li</div>
        <div>Secaucus, NJ · Open to relocate</div>
        <div>Portfolio designed & built by author</div>
      </div>
    </section>
  );
}

Object.assign(window, { Experience, ProductsIndex, Strategies, Photography, Contact });
