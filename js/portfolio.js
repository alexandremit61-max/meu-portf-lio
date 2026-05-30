/* ====== LINKS DE PRODUÇÃO REAIS (.github.io) ====== */
const projects = [
  {
    name: "SmallLink-Pro",
    desc: "Encurtador de URLs profissional com suporte a slugs personalizados e arquitetura pronta para análise de dados analíticos.",
    lang: "JavaScript",
    url: "https://alexandremit61-max.github.io/SmallLink-Pro/"
  },
  {
    name: "opera-es-el-trica",
    desc: "Ferramenta operacional otimizada para fluxos de trabalho e gerenciamento de redes elétricas — desenvolvida para suporte em campo.",
    lang: "HTML/CSS",
    url: "https://alexandremit61-max.github.io/opera-es-el-trica/"
  },
  {
    name: "Operacoes-de-Redes",
    desc: "Interface de monitoramento de infraestruturas críticas e conceitos aplicados a operações de rede de alta disponibilidade.",
    lang: "HTML/CSS",
    url: "https://alexandremit61-max.github.io/Operacoes-de-Redes/"
  },
  {
    name: "publi-brisa",
    desc: "Utilitário interno de publicação e automação operacional customizado para demandas de comunicação em telecomunicações.",
    lang: "JavaScript",
    url: "https://alexandremit61-max.github.io/publi-brisa/"
  },
  {
    name: "imoc-v2-brisanet",
    desc: "Segunda iteração da plataforma operacional IMOC focada no acompanhamento analítico e monitoramento técnico.",
    lang: "JavaScript",
    url: "https://alexandremit61-max.github.io/imoc-v2-brisanet/"
  },
  {
    name: "PLANO-DE-TREINO",
    desc: "Aplicação web estruturada para gerenciamento de planos de treino com uma interface limpa, moderna e responsiva.",
    lang: "HTML/CSS",
    url: "https://alexandremit61-max.github.io/PLANO-DE-TREINO/"
  }
];

/* ====== RENDERIZAÇÃO DOS PROJETOS ====== */
const grid = document.getElementById("projectsGrid");
if (grid) {
  grid.innerHTML = projects.map(p => {
    const isJs = p.lang === "JavaScript";
    return `
      <article class="project-card reveal">
        <div class="project-head">
          <div class="project-icon">${p.name.charAt(0).toUpperCase()}</div>
          <span class="lang-badge ${isJs ? "js" : ""}">${p.lang}</span>
        </div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a class="project-link" href="${p.url}" target="_blank" rel="noopener">
          Ir para o Site
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M7 17L17 7M9 7h8v8"/>
          </svg>
        </a>
      </article>
    `;
  }).join("");
}

/* ====== EFEITO DE BRILHO MOUSE (GLOW EFFECT) ====== */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", (e.clientX - r.left) + "px");
    card.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
});

/* ====== ESTADO DO NAVBAR NO SCROLL ====== */
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });
}

/* ====== MENU MOBILE ====== */
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ====== ANIMAÇÃO DE REVELAR AO ROLAR A TELA (REVEAL ON SCROLL) ====== */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

// Ativando a observação para todos os elementos com a classe .reveal
document.querySelectorAll(".reveal").forEach(el => io.observe(el));