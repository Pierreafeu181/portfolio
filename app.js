const C = window.CONTENT;
const app = document.getElementById("app");

/* ---------- Helpers ---------- */
const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
};
const social = (k, label) => `<a class="soc" href="${C[k]}" target="_blank" rel="noopener" aria-label="${label}">${ICONS[k]}<span>${label}</span></a>`;
const socials = () => social("linkedin", "LinkedIn") + social("github", "GitHub");
const ext = (u) => (u ? ` target="_blank" rel="noopener"` : "");
const chips = (tags, red) => `<div class="chips">${tags.map((t, i) => `<span class="chip${red && i === 0 ? " red" : ""}">${t}</span>`).join("")}</div>`;
const num = (i) => String(i + 1).padStart(2, "0");
const footer = `<footer>© 2026 · vibecodé par Baptiste Puiferrat</footer>`;

/* ---------- Pages ---------- */
const pages = {
  "/": () => `
    <section class="hero">
      <div class="eyebrow">${C.hero.eyebrow}</div>
      <h1 class="name" aria-label="Baptiste">Bapt<span class="i">ı<span class="dot"></span></span>ste</h1>
      <div class="place">${C.hero.place}</div>
      <p class="role-wrap" style="margin:22px 0 0"><span class="role">${C.hero.role}</span></p>
      <p>${C.hero.intro}</p>
      <div class="btns">
        <a class="btn solid" href="#/cv">Voir mon CV</a>
        <a class="btn" href="#/contact">Me contacter</a>
      </div>
      <div class="logos">
        <small>Passé par</small>
        ${C.experiences.map((e) => (e.url ? `<a href="${e.url}"${ext(e.url)}>${e.company}</a>` : `<span>${e.company}</span>`)).join("")}
      </div>
    </section>`,

  "/about": () => {
    const a = C.about;
    // 5 vues : le regard suit la souris (voir initAvatar). La 1re image sert de repli si les vues manquent.
    const avatar = `<div class="stack" id="av">${AV_VIEWS.map((v, i) => `<img src="assets/views/${v}.png" alt="${i === 2 ? "Avatar de Baptiste" : ""}" class="${v === "front" ? "on" : ""}" onerror="this.closest('.avatar').innerHTML=window.__ph">`).join("")}</div>`;
    return `
    <section>
      <div class="about-top">
        <div>
          <div class="eyebrow">À propos</div>
          <h1 class="title">${a.title}</h1>
          ${a.paragraphs.map((p) => `<p class="lead">${p}</p>`).join("")}
        </div>
        <div class="avatar">${avatar}</div>
      </div>
      <h2 class="h2">Ce que je fais bien</h2>
      <div class="grid3">
        ${a.strengths.map((s, i) => `<div class="card"><div class="n">${num(i)}</div><h3>${s.t}</h3><p>${s.d}</p></div>`).join("")}
      </div>
      <h2 class="h2">Principes</h2>
      <ul class="principles">${a.principles.map((p) => `<li>${p}</li>`).join("")}</ul>
      <h2 class="h2">${a.beyond.title}</h2>
      <p class="lead">${a.beyond.text}</p>
    </section>${footer}`;
  },

  "/cv": () => `
    <section>
      <div class="cv-head">
        <div><div class="eyebrow">Curriculum vitae</div><h1 class="title" style="margin-bottom:0">${C.name}</h1></div>
        <a class="btn solid" href="${C.cvPdf}" download>↓ Télécharger le PDF</a>
      </div>
      <h2 class="h2">Formation</h2>
      <div class="timeline">
        ${C.education.map((e) => `
          <div class="tl"><div class="when">${e.dates}<small>${e.place}</small></div>
          <div><h3><a href="${e.url}"${ext(e.url)}>${e.school}</a></h3>
          <div class="sub">${e.degree}</div><div class="sub">${e.detail}</div></div></div>`).join("")}
      </div>
      <h2 class="h2">Expériences</h2>
      <div class="exp">
        ${C.experiences.map((e, i) => `
          <article class="exp-card">
            <div class="num">${num(i)}</div>
            <div class="body">
              <div class="meta"><span>${e.dates}</span><span>${e.place}</span></div>
              <h3>${e.url ? `<a href="${e.url}"${ext(e.url)}>${e.company} ↗</a>` : e.company}</h3>
              <div class="role">${e.role} · ${e.type}</div>
              <div class="kind">${e.kind}</div>
              <span class="hl">${e.highlight}</span>
              <ul>${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
            </div>
          </article>`).join("")}
      </div>
      <h2 class="h2">Compétences, langues et intérêts</h2>
      <div class="skills">
        <div><h4>Langues</h4>${chips(C.skills.langues)}</div>
        <div><h4>Outils</h4>${chips(C.skills.outils)}</div>
        <div><h4>Intérêts</h4>${chips(C.skills.interets)}</div>
      </div>
    </section>${footer}`,

  "/projects": () => `
    <section>
      <div class="eyebrow">Projets</div>
      <h1 class="title">Ce que je construis à côté</h1>
      <p class="lead">Une plateforme que je fais grandir, et les hackathons où je m'inscris pour apprendre vite.</p>
      <div class="proj" style="margin-top:44px">
        ${C.projects.map((p) => `
          <div class="card">
            <span class="status">${p.status}</span>
            <h3>${p.name}</h3>
            <div class="sub" style="color:var(--yellow);font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin:6px 0 14px">${p.role}</div>
            <div class="pitch">${p.pitch}</div>
            <p>${p.body}</p>
            <div class="stats">${p.stats.map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join("")}</div>
            ${chips(p.tags, true)}
            ${p.url ? `<a class="visit" href="${p.url}"${ext(p.url)}>Visiter ↗</a>` : ""}
          </div>`).join("")}
      </div>
    </section>${footer}`,

  "/contact": () => `
    <section>
      <div class="eyebrow">Contact</div>
      <h1 class="title">Un message ?</h1>
      <p class="lead">Pour un stage, un projet ou simplement échanger : écrivez-moi, je réponds à tout le monde.</p>
      <form id="mail">
        <label>Nom<input name="n" required autocomplete="name" /></label>
        <label>Email<input name="e" type="email" required autocomplete="email" /></label>
        <label>Message<textarea name="m" required></textarea></label>
        <div><button class="btn solid" type="submit">Envoyer →</button></div>
      </form>
      <div class="alt">
        <a class="visit" href="mailto:${C.email}">${C.email}</a>
        <div class="socials big">${socials()}</div>
      </div>
    </section>${footer}`,
};

const navItems = [["/", "Accueil"], ["/about", "À propos"], ["/cv", "CV"], ["/projects", "Projets"], ["/contact", "Contact"]];

window.__ph = `<div class="ph">Ton avatar ici<br>assets/avatar.png</div>`;

// De gauche à droite : plus la souris s'éloigne du centre de l'avatar, plus il se tourne vers elle.
const AV_VIEWS = ["side-left", "three-left", "front", "three-right", "side-right"];
let avFrame = 0;
function initAvatar() {
  const box = document.getElementById("av");
  if (!box) return;
  const imgs = [...box.children];
  const show = (i) => imgs.forEach((im, k) => im.classList.toggle("on", k === i));
  const pick = (x) => {
    const r = box.getBoundingClientRect();
    const dx = (x - (r.left + r.width / 2)) / (innerWidth / 2);
    const a = Math.abs(dx);
    const lvl = a < 0.12 ? 0 : a < 0.4 ? 1 : 2;
    show(2 + Math.sign(dx) * lvl);
  };
  box.onmouseenter = null;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.__avMove = (e) => { cancelAnimationFrame(avFrame); avFrame = requestAnimationFrame(() => pick(e.clientX)); };
}
addEventListener("mousemove", (e) => window.__avMove && document.getElementById("av") && window.__avMove(e));
document.getElementById("socials").innerHTML = socials();

function render() {
  const path = location.hash.replace(/^#/, "") || "/";
  const page = pages[path] ? path : "/";
  document.body.dataset.page = page;
  document.getElementById("nav").innerHTML = navItems
    .map(([p, l]) => `<a href="#${p}" class="${p === page ? "active" : ""}">${l}</a>`).join("");
  app.style.animation = "none"; app.offsetHeight; app.style.animation = "";
  app.innerHTML = pages[page]();
  scrollTo(0, 0);
  initAvatar();
  const f =document.getElementById("mail");
  if (f) f.onsubmit = (ev) => {
    ev.preventDefault();
    const d = new FormData(f);
    const body = `${d.get("m")}\n\n— ${d.get("n")} (${d.get("e")})`;
    location.href = `mailto:${C.email}?subject=${encodeURIComponent("Contact depuis ton portfolio")}&body=${encodeURIComponent(body)}`;
  };
}
addEventListener("hashchange", render);
render();
