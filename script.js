const cvData = {
  en: {
    navWork: "Projects",
    navSkills: "Stack",
    navTimeline: "Path",
    navContact: "Contact",
    heroEyebrow: "Software developer in progress",
    heroTitle: "I build clean interfaces, data tools, and <span>AI-powered prototypes.</span>",
    heroLead:
      "IT student focused on turning ideas into usable software: responsive web apps, Python automation, ML experiments, desktop apps and polished product interfaces.",
    downloadPdf: "Download PDF",
    emailMe: "Email me",
    printCv: "Print",
    statGraduation: "expected BSc finish",
    statProjects: "recent software projects",
    statEnglish: "English proficiency",
    statusText: "Open to internship and junior developer opportunities",
    focusOneKicker: "Current focus",
    focusOneTitle: "Practical product building",
    focusOneText:
      "I like projects where the interface, logic, and data flow all matter. Recent work spans predictive football analytics, email verification, file-sharing UX, and AI UI concepts.",
    focusTwoKicker: "Working style",
    focusTwoTitle: "Curious, precise, persistent",
    focusTwoText:
      "I learn quickly, debug patiently, and prefer code that is readable enough for the next person to trust. I am looking for real-world experience where I can keep growing fast.",
    projectsKicker: "Selected work",
    projectsTitle: "Recent projects with real implementation depth",
    projectsLead:
      "A tighter snapshot of what my last months' work looked like.",
    filterAll: "All",
    filterAI: "AI & data",
    filterUI: "UI",
    filterSystems: "Systems",
    skillsKicker: "Stack",
    skillsTitle: "A broad toolkit",
    skillsLead:
      "Grouped by usage of the tools: application logic, interfaces, data, and day-to-day engineering habits.",
    timelineKicker: "Path",
    timelineTitle: "Education and work experience",
    timelineEducationTitle: "Education",
    timelineEducationLead: "Formal study and technical foundation.",
    timelineWorkTitle: "Work experience",
    timelineWorkLead: "Roles where I built reliability, communication, and operational discipline.",
    contactKicker: "Contact",
    contactTitle: "Let’s build something useful.",
    contactLead:
      "I am especially interested in student work, internships, and junior roles where I can contribute to web apps, automation, data-heavy tools, or product-facing software.",
    copyEmail: "Copy email",
    openPdf: "Open PDF",
    footerText: "Designed as an interactive CV and developer portfolio.",
    copied: "Email copied to clipboard.",
    copyFallback: "Email: lbatai626@gmail.com",
  },
  hu: {
    navWork: "Projektek",
    navSkills: "Stack",
    navTimeline: "Út",
    navContact: "Kapcsolat",
    heroEyebrow: "Fejlődő szoftverfejlesztő",
    heroTitle: "Letisztult felületeket, adat-eszközöket és <span>AI-alapú prototípusokat</span> építek.",
    heroLead:
      "Programtervező informatikus hallgató vagyok, aki használható szoftverré alakítja az ötleteket: reszponzív webappok, Python automatizáció, ML kísérletek, asztali alkalmazások és igényes termékfelületek.",
    downloadPdf: "PDF letöltése",
    emailMe: "Email",
    printCv: "Nyomtatás",
    statGraduation: "várható BSc befejezés",
    statProjects: "friss szoftverprojekt",
    statEnglish: "angol nyelvtudás",
    statusText: "Nyitott vagyok gyakornoki és junior fejlesztői lehetőségekre",
    focusOneKicker: "Fókusz",
    focusOneTitle: "Gyakorlati terméképítés",
    focusOneText:
      "Azokat a projekteket szeretem, ahol a felület, a logika és az adatáramlás együtt számít. Friss munkáimban prediktív futballelemzés, email-ellenőrzés, fájlmegosztási UX és AI UI koncepciók is vannak.",
    focusTwoKicker: "Munkastílus",
    focusTwoTitle: "Kíváncsi, precíz, kitartó",
    focusTwoText:
      "Gyorsan tanulok, türelmesen debuggolok, és olyan kódot szeretek írni, amelyet a következő ember is bizalommal olvas. Valódi szakmai tapasztalatot keresek, ahol gyorsan fejlődhetek tovább.",
    projectsKicker: "Válogatott munkák",
    projectsTitle: "Friss projektek valódi implementációs mélységgel",
    projectsLead:
      "Egy gyors összefoglaló az elmúlt hónapjaim munkájáról.",
    filterAll: "Mind",
    filterAI: "AI és adat",
    filterUI: "UI",
    filterSystems: "Rendszerek",
    skillsKicker: "Stack",
    skillsTitle: "Széles eszköztár",
    skillsLead:
      "Csoportosítva aszerint, hogy hogyan használtam őket: alkalmazáslogika, felületek, adat és automatizáció és a fejlesztői workflow.",
    timelineKicker: "Szakmai út",
    timelineTitle: "Tanulmányok és munkatapasztalat",
    timelineEducationTitle: "Tanulmányok",
    timelineEducationLead: "Formális képzés és szakmai alapok.",
    timelineWorkTitle: "Munkatapasztalat",
    timelineWorkLead: "Pozíciók, ahol megbízhatóságot, kommunikációt és munkafegyelmet építettem.",
    contactKicker: "Kapcsolat",
    contactTitle: "Építsünk valami hasznosat.",
    contactLead:
      "Leginkább diákmunkák, gyakornoki és junior pozíciók érdekelnek, ahol webappokhoz, automatizációhoz, adatközpontú eszközökhöz vagy termékfelületekhez tudok hozzájárulni.",
    copyEmail: "Email másolása",
    openPdf: "PDF megnyitása",
    footerText: "2026",
    copied: "Email cím másolva.",
    copyFallback: "Email: lbatai626@gmail.com",
  },
};

const projects = [
  {
    title: "FootyAI",
    image: "assets/footyiq.png",
    filters: ["ML", "systems"],
    tech: ["Random Forest", "Machine Learning", "Flask", "scikit-learn", "pandas", "JavaScript",],
    en: {
      subtitle: "Premier League prediction platform",
      description:
        "A football predictions site with match predictions and full-season simulation backed by historical season data built on machine learning.",
      points: [
        "Random Forest model with recency-weighted training data.",
        "API endpoints for teams, match prediction, and season simulation.",
        "Cached season data pipeline to reduce startup and API cost.",
      ],
    },
    hu: {
      subtitle: "Premier League predikciós platform",
      description:
        "Futball predikciós app meccseredmény-predikcióval és teljes szezon szimulációval, historikus adatokra és machine learningre alapozva.",
      points: [
        "Random Forest modell frissesség szerint súlyozott tanító adatokkal.",
        "API végpontok csapatokhoz, predikcióhoz és szezon szimulációhoz.",
        "Cache-elt szezonadat pipeline a gyorsabb indulásért.",
      ],
    },
  },
  {
    title: "VeriClean",
    image: "assets/vericlean.png",
    filters: ["systems", "ai"],
    tech: ["Python", "PyQt6", "asyncio", "DNS", "SMTP", "SQLite"],
    en: {
      subtitle: "Email hygiene desktop tool",
      description:
        "A PyQt desktop app for importing large email lists and verifying them through syntax, DNS/MX lookup, and SMTP-level checks.",
      points: [
        "Async verification engine with concurrency control.",
        "CSV import flow connected to a local database.",
        "UI progress and log feedback for long-running checks.",
      ],
    },
    hu: {
      subtitle: "Email lista tisztító desktop eszköz",
      description:
        "PyQt desktop app nagy email listák importálására és ellenőrzésére szintaxis, DNS/MX és SMTP szintű vizsgálatokkal.",
      points: [
        "Aszinkron ellenőrző motor konkurencia-kezeléssel.",
        "CSV import folyamat lokális adatbázissal összekötve.",
        "UI progress és naplózás hosszabb futásokhoz.",
      ],
    },
  },
  {
    title: "Shards",
    image: "assets/shards.png",
    filters: ["ui", "systems"],
    tech: ["HTML", "CSS", "JavaScript", "UX"],
    en: {
      subtitle: "Ephemeral file sharing prototype",
      description:
        "A minimal file-sharing interface with drag-and-drop upload, expiry modes, password state, generated links, and live storage feedback.",
      points: [
        "Interactive upload state and file-type preview icons.",
        "Password and expiry controls with live shard list updates.",
        "Clean product UI with responsive layout and microinteractions.",
      ],
    },
    hu: {
      subtitle: "Időkorlátos fájlmegosztó prototípus",
      description:
        "Minimalista fájlmegosztó felület drag-and-drop feltöltéssel, lejárati módokkal, jelszó állapottal, generált linkekkel és tárhely-visszajelzéssel.",
      points: [
        "Interaktív feltöltési állapot és fájltípus előnézet.",
        "Jelszó és lejárati vezérlők élő lista frissítéssel.",
        "Letisztult, reszponzív product UI finom mikrointerakciókkal.",
      ],
    },
  },
  {
    title: "Sentient Design Studio",
    image: "assets/sentient.png",
    filters: ["ui", "ai"],
    tech: ["React", "Tailwind", "TypeScript", "Vite", "UI systems"],
    en: {
      subtitle: "AI interface generation concept",
      description:
        "A React/Tailwind product experience around generating modern responsive interfaces from natural-language prompts.",
      points: [
        "Component-based landing experience with reusable UI primitives.",
        "Animated prompt surface and polished visual hierarchy.",
        "Built around modern frontend tooling and design-system patterns.",
      ],
    },
    hu: {
      subtitle: "AI felületgeneráló koncepció",
      description:
        "React/Tailwind termékélmény modern, reszponzív felületek természetes nyelvű promptokból történő generálására.",
      points: [
        "Komponensalapú landing felület újrahasználható UI elemekkel.",
        "Animált prompt felület és rendezett vizuális hierarchia.",
        "Modern frontend toolingra és design-system mintákra építve.",
      ],
    },
  },
];

const skills = [
  {
    en: { title: "Application logic", text: "Languages and patterns used to turn requirements into working flows." },
    hu: { title: "Alkalmazáslogika", text: "Nyelvek és minták működő folyamatok felépítéséhez." },
    items: ["Python", "Java", "C++", "JavaScript", "OOP", "debugging", "testing mindset"],
  },
  {
    en: { title: "Interfaces", text: "Frontend and desktop UI work with attention to responsive, readable experiences." },
    hu: { title: "Felületek", text: "Frontend és desktop UI munka reszponzív, jól olvasható élményekkel." },
    items: ["HTML", "CSS", "React", "Tailwind", "PyQt6", "Photoshop", "UX polish"],
  },
  {
    en: { title: "Data and automation", text: "Working with datasets, persistence, and practical automation scripts." },
    hu: { title: "Adat és automatizáció", text: "Adathalmazok, perzisztencia és gyakorlati automatizációs scriptek." },
    items: ["SQL", "MySQL", "SQLite", "pandas", "scikit-learn", "CSV pipelines", "Office"],
  },
  {
    en: { title: "Developer workflow", text: "Tools and habits that support maintainable collaboration." },
    hu: { title: "Fejlesztői workflow", text: "Eszközök és szokások, amelyek támogatják a fenntartható közös munkát." },
    items: ["Git", "GitHub", "VS Code", "Windows", "Linux", "agile basics", "code quality"],
  },
];

const educationTimeline = [
  {
    date: "2022 - 2026",
    title: {
      en: "University of Pécs, Faculty of Sciences",
      hu: "Pécsi Tudományegyetem, Természettudományi Kar",
    },
    body: {
      en: "BSc in Computer Science. Expected completion: spring semester 2026.",
      hu: "Programtervező informatikus alapképzés. Várható befejezés: 2026 tavaszi szemeszter.",
    },
    link: "https://www.ttk.pte.hu",
  },
  {
    date: "2018 - 2022",
    title: {
      en: "Pécsi Janus Pannonius Gimnázium",
      hu: "Pécsi Janus Pannonius Gimnázium",
    },
    body: {
      en: "Secondary education with advanced informatics focus.",
      hu: "Érettségi, emelt informatika szakirány.",
    },
    link: "https://januspecs.hu",
  },
];

const workTimeline = [
  
  {
    date: "2026 Feb - Now",
    title: {
      en: "Charter Informatika Pécs",
      hu: "Charter Informatika Pécs",
    },
    body: {
      en: "IT support for a local software company, including hardware troubleshooting, website maintenance, software installation, and network maintenance.",
      hu: "IT támogatás egy helyi szoftvercégnél, beleértve hardver hibaelhárítást, webszerkesztést, szoftvertelepítést és hálózat karbantartást.",
    },
  },
  
  {
    date: "2024 Jun - Dec",
    title: {
      en: "Tesco Kalocsa and Pécs",
      hu: "Tesco Kalocsa és Pécs",
    },
    body: {
      en: "Stock replenishment, cashier duties, warehouse tasks, and order assembly.",
      hu: "Árufeltöltés, pénztáros feladatok, raktári munka és rendelések összeállítása.",
    },
  },
  {
    date: "2023 Jul",
    title: {
      en: "Balla Média Kft. - Call Center",
      hu: "Balla Média Kft. - Call Center",
    },
    body: {
      en: "Customer communication, data collection, and information handling.",
      hu: "Ügyfélkezelés, adatbekérés és információkezelés.",
    },
  },
  {
    date: "2020, 2022, 2023",
    title: {
      en: "Pécsváradi Agrover Kft. - Weighbridge administrator",
      hu: "Pécsváradi Agrover Kft. - Mérlegkezelő adminisztrátor",
    },
    body: {
      en: "Spreadsheet work, weighbridge administration, and crop movement documentation.",
      hu: "Táblázatkezelés, mérlegkezelés és terménymozgás dokumentáció.",
    },
  },
];

const state = {
  lang: localStorage.getItem("cv-language") || "en",
  theme: localStorage.getItem("cv-theme") || "dark",
  filter: "all",
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function applyLanguage() {
  const dictionary = cvData[state.lang];
  document.documentElement.lang = state.lang;

  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  $$("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) node.innerHTML = dictionary[key];
  });

  $$(".language-option").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  renderProjects();
  renderSkills();
  renderTimeline();
  localStorage.setItem("cv-language", state.lang);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem("cv-theme", state.theme);
}

function renderProjects() {
  const grid = $("#project-grid");
  grid.innerHTML = projects
    .map((project, index) => {
      const copy = project[state.lang];
      const hidden = state.filter !== "all" && !project.filters.includes(state.filter);
      const tags = [copy.subtitle, ...project.tech.slice(0, 4)];
      return `
        <article class="project-card reveal ${hidden ? "is-hidden" : ""}" data-filters="${project.filters.join(" ")}" style="--reveal-delay:${index * 70}ms">
          <div class="project-visual">
            <img src="${project.image}" alt="${project.title} project screenshot" loading="lazy" />
          </div>
          <div class="project-body">
            <div class="project-meta">
              ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${project.title}</h3>
            <p>${copy.description}</p>
            <ul class="project-points">
              ${copy.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveals();
  bindProjectTilt();
}

function renderSkills() {
  $("#skill-groups").innerHTML = skills
    .map((group, index) => {
      const copy = group[state.lang];
      return `
        <article class="skill-card reveal" style="--reveal-delay:${index * 60}ms">
          <h3>${copy.title}</h3>
          <p>${copy.text}</p>
          <ul class="skill-list">
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");
  observeReveals();
}

function renderTimeline() {
  const dictionary = cvData[state.lang];
  const renderItems = (items) =>
    items
      .map((item, index) => {
        const title = item.title[state.lang];
        const body = item.body[state.lang];
        const titleMarkup = item.link
          ? `<a href="${item.link}" target="_blank" rel="noreferrer">${title}</a>`
          : title;
        return `
          <article class="timeline-item reveal" style="--reveal-delay:${index * 55}ms">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
              <h3>${titleMarkup}</h3>
              <p>${body}</p>
            </div>
          </article>
        `;
      })
      .join("");

  $("#timeline-list").innerHTML = `
    <section class="timeline-group reveal">
      <div class="timeline-group-heading">
        <h3>${dictionary.timelineEducationTitle}</h3>
        <p>${dictionary.timelineEducationLead}</p>
      </div>
      <div class="timeline">${renderItems(educationTimeline)}</div>
    </section>
    <section class="timeline-group reveal" style="--reveal-delay:80ms">
      <div class="timeline-group-heading">
        <h3>${dictionary.timelineWorkTitle}</h3>
        <p>${dictionary.timelineWorkLead}</p>
      </div>
      <div class="timeline">${renderItems(workTimeline)}</div>
    </section>
  `;
  observeReveals();
}

let revealObserver;

function observeReveals() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  $$(".reveal:not(.is-visible)").forEach((node) => revealObserver.observe(node));
  clearTimeout(observeReveals.fallback);
  observeReveals.fallback = setTimeout(() => {
    $$(".reveal:not(.is-visible)").forEach((node) => node.classList.add("is-visible"));
  }, 900);
}

function bindProjectTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  $$(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
      card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function bindControls() {
  $$(".language-option").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      applyLanguage();
    });
  });

  $("#theme-toggle").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  $("#print-cv").addEventListener("click", () => window.print());

  $("#copy-email").addEventListener("click", async () => {
    const dictionary = cvData[state.lang];
    try {
      await navigator.clipboard.writeText("lbatai626@gmail.com");
      showToast(dictionary.copied);
    } catch {
      showToast(dictionary.copyFallback);
    }
  });

  $$(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      $$(".filter-chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
      renderProjects();
    });
  });
}

function bindScrollFeedback() {
  const progress = $("#scroll-progress");
  const navLinks = $$(".site-nav a");
  const sections = navLinks
    .map((link) => ({ link, target: $(link.getAttribute("href")) }))
    .filter((item) => item.target);

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progress.style.width = `${Math.max(0, Math.min(1, ratio)) * 100}%`;

    const active = sections
      .slice()
      .reverse()
      .find((item) => item.target.getBoundingClientRect().top <= 120);

    navLinks.forEach((link) => link.classList.toggle("is-active", active?.link === link));
  };

  update();
  document.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function initSignalField() {
  const canvas = $("#signal-field");
  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  let width = 0;
  let height = 0;
  let particles = [];
  const pointer = { x: -9999, y: -9999 };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(95, Math.max(42, Math.floor((width * height) / 18000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.5,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      const dx = pointer.x - p.x;
      const dy = pointer.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        p.x -= dx * 0.002;
        p.y -= dy * 0.002;
      }
    });

    for (let i = 0; i < particles.length; i += 1) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j += 1) {
        const b = particles[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 116) {
          const alpha = (1 - distance / 116) * 0.18;
          ctx.strokeStyle = `rgba(124, 217, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p, index) => {
      ctx.fillStyle = index % 4 === 0 ? "rgba(255, 204, 110, 0.72)" : "rgba(93, 242, 194, 0.62)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  window.addEventListener("pointerleave", () => {
    pointer.x = -9999;
    pointer.y = -9999;
  });
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  applyTheme();
  applyLanguage();
  bindControls();
  bindScrollFeedback();
  observeReveals();
  initSignalField();
}

init();
