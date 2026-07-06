const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
let isMenuOpen = false;

function setMenuState(isOpen) {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav-links]");
  const backdrop = document.querySelector("[data-mobile-backdrop]");

  if (!menuToggle || !nav || !backdrop) {
    return;
  }

  isMenuOpen = isOpen;
  menuToggle.classList.toggle("is-active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  nav.classList.toggle("is-open", isOpen);
  backdrop.classList.toggle("is-visible", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

function closeMenu() {
  setMenuState(false);
}

function initMobileMenu() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav-links]");
  const backdrop = document.querySelector("[data-mobile-backdrop]");

  if (!menuToggle || !nav || !backdrop) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    setMenuState(!isMenuOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("click", (event) => {
    if (!isMenuOpen) {
      return;
    }

    const target = event.target;

    if (!nav.contains(target) && !menuToggle.contains(target) && !backdrop.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

function renderHero() {
  const title = document.getElementById("hero-title");
  const description = document.getElementById("hero-description");
  const resumeLink = document.getElementById("hero-resume");
  const social = document.getElementById("hero-social");
  const photo = document.getElementById("hero-photo");
  const panelTitle = document.getElementById("hero-panel-title");
  const panelText = document.getElementById("hero-panel-text");

  if (!title || !description || !social || !photo || !panelTitle || !panelText) {
    return;
  }

  title.textContent = `${profile.name}`;
  description.textContent = `${profile.title} — ${profile.description}`;

  if (resumeLink) {
    resumeLink.remove();
  }

  photo.setAttribute("src", profile.photo || "assets/images/profile.png");
  photo.alt = `Foto de ${profile.name}`;
  panelTitle.textContent = "Disponível para projetos especiais";
  panelText.textContent = "Criando produtos digitais com alto padrão visual e foco em resultado.";

  social.innerHTML = [
    { label: "GitHub", href: profile.social.github, icon: "Github" },
    { label: "LinkedIn", href: profile.social.linkedin, icon: "Linkedin" },
    { label: "Instagram", href: profile.social.instagram, icon: "Instagram" },
    { label: "Email", href: profile.social.email, icon: "Email" },
    { label: "WhatsApp", href: profile.social.whatsapp, icon: "WhatsApp" }
  ]
    .map((item) => `<a class="social-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.label}">${item.icon}</a>`)
    .join("");
}

function renderAbout() {
  const aboutContent = document.getElementById("about-content");

  if (!aboutContent) {
    return;
  }

  aboutContent.innerHTML = `
    <p>${profile.about}</p>
    <p>Minha abordagem combina estratégia, estética refinada e código limpo para entregar soluções que impressionam e funcionam com excelência.</p>
  `;
}

function createProjectCard(project) {
  return `
    <article class="project-card reveal">
      <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" />
      <div class="project-card__body">
        <div class="card-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="tech-list">${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}</ul>
        <div class="project-card__actions">
          <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
        </div>
      </div>
    </article>
  `;
}

function createSkill(skill) {
  return `
    <article class="skill-card reveal">
      <div class="skill-card__meta">
        <h3>${skill.name}</h3>
        <span>${skill.level}</span>
      </div>
      <div class="skill-bar" aria-label="${skill.name} ${skill.percentage}%">
        <div class="skill-bar__fill" style="--value:${skill.percentage}%"></div>
      </div>
      <p>${skill.percentage}%</p>
    </article>
  `;
}

function createCertificate(certificate) {
  return `
    <article class="certificate-card reveal">
      <img src="${certificate.image}" alt="${certificate.name}" loading="lazy" decoding="async" />
      <div class="certificate-card__body">
        <h3>${certificate.name}</h3>
        <p>${certificate.institution} · ${certificate.date}</p>
        <p>${certificate.description}</p>
      </div>
    </article>
  `;
}

function createTimelineItem(item) {
  return `
    <article class="timeline-item reveal">
      <h3>${item.year} · ${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `;
}

function renderProjects() {
  const container = document.getElementById("projects-grid");

  if (!container) {
    return;
  }

  container.innerHTML = projects.map(createProjectCard).join("");
}

function renderSkills() {
  const container = document.getElementById("skills-list");

  if (!container) {
    return;
  }

  container.innerHTML = skills.map(createSkill).join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");

  if (!container) {
    return;
  }

  container.innerHTML = experiences
    .map(
      (item) => `
        <article class="experience-card reveal">
          <div class="experience-card__top">
            <div>
              <h3>${item.role}</h3>
              <p>${item.company}</p>
            </div>
            <span>${item.period}</span>
          </div>
          <ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderCertificates() {
  const container = document.getElementById("certificates-list");

  if (!container) {
    return;
  }

  container.innerHTML = certificates.map(createCertificate).join("");
  container.querySelectorAll(".certificate-card").forEach((card) => {
    card.addEventListener("click", () => {
      const image = card.querySelector("img");
      const modal = document.querySelector("[data-image-modal]");
      const modalImage = document.querySelector("[data-image-modal-image]");

      if (!modal || !modalImage || !image) {
        return;
      }

      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    });
  });
}

function initImageModal() {
  const modal = document.querySelector("[data-image-modal]");
  const closeButton = document.querySelector("[data-image-modal-close]");

  if (!modal || !closeButton) {
    return;
  }

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");

  if (!container) {
    return;
  }

  container.innerHTML = timeline.map(createTimelineItem).join("");
}

function renderContact() {
  const container = document.getElementById("contact-list");

  if (!container) {
    return;
  }

  container.innerHTML = [
    { title: "GitHub", href: contacts.github },
    { title: "LinkedIn", href: contacts.linkedin },
    { title: "Instagram", href: contacts.instagram },
    { title: "Email", href: `mailto:${contacts.email}` },
    { title: "WhatsApp", href: contacts.whatsapp }
  ]
    .map(
      (item) => `
        <article class="contact-card reveal">
          <h3>${item.title}</h3>
          <a class="btn btn--ghost" href="${item.href}" target="_blank" rel="noreferrer">Acessar</a>
        </article>
      `
    )
    .join("");
}

function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function initNavigation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { threshold: 0.55 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initScrollProgress() {
  const progressBar = document.querySelector("[data-scroll-progress]");
  const backToTop = document.querySelector("[data-back-to-top]");

  if (!progressBar || !backToTop) {
    return;
  }

  const updateScrollState = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? scrollTop / height : 0;

    progressBar.style.transform = `scaleX(${progress})`;
    backToTop.classList.toggle("is-visible", scrollTop > 500);
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initLoader() {
  const loader = document.querySelector(".loader");

  if (!loader) {
    return;
  }

  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 650);
  });
}

function init() {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertificates();
  renderTimeline();
  renderContact();
  initRevealAnimations();
  initNavigation();
  initMobileMenu();
  initImageModal();
  initScrollProgress();
  initLoader();
}

init();
