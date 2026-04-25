// Router + mounts + motion glue
const { useEffect, useState } = React;

function App() {
  const [route, setRoute] = useState(() => (location.hash.replace('#','') || 'home'));

  const go = (r) => {
    if (!r) return;
    setRoute(r);
    history.replaceState(null, '', '#' + r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const h = () => setRoute((location.hash.replace('#','') || 'home'));
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);

  // Delegate clicks on data-link anchors + homepage product rows
  useEffect(() => {
    const fn = (e) => {
      const a = e.target.closest('a[data-link]');
      if (a) {
        e.preventDefault();
        const href = a.getAttribute('href') || '';
        go(href.replace('#',''));
        return;
      }
      const row = e.target.closest('.product-row[data-go]');
      if (row) { go(row.dataset.go); }
    };
    document.addEventListener('click', fn);
    return () => document.removeEventListener('click', fn);
  }, []);

  // Toggle home screen via classList
  useEffect(() => {
    const home = document.getElementById('screen-home');
    if (home) home.classList.toggle('active', route === 'home');
    // active nav
    document.querySelectorAll('#topnav a').forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href') === '#' + route);
    });
  }, [route]);

  // IntersectionObserver for .fade
  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if (en.isIntersecting) en.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade').forEach(el=>io.observe(el));
    return () => io.disconnect();
  }, [route]);

  // Spotlight follow
  useEffect(() => {
    const spot = document.getElementById('spot');
    if (!spot) return;
    const move = (e) => {
      spot.style.left = e.clientX + 'px';
      spot.style.top = (e.clientY + window.scrollY) + 'px';
      spot.style.opacity = 1;
    };
    const leave = () => spot.style.opacity = 0;
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave); };
  }, []);

  if (route === 'home') return null;

  let content;
  if (route === 'experience') content = <Experience />;
  else if (route === 'products') content = <ProductsIndex go={go} />;
  else if (route === 'strategies') content = <Strategies />;
  else if (route === 'photography') content = <Photography />;
  else if (route === 'contact') content = <Contact />;
  else if (CASES[route]) content = <CaseStudy c={CASES[route]} go={go} />;
  else content = <Experience />;

  return <div className="screen active" key={route}>{content}</div>;
}

const mount = document.getElementById('screen-mount');
ReactDOM.createRoot(mount).render(<App />);
