// Smooth scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) {
      return;
    }
    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function handleScroll() {
  const currentScroll = window.pageYOffset;
  if (navbar) {
    if (currentScroll <= 0) {
      navbar.style.top = "0";
    } else if (currentScroll > lastScrollTop) {
      navbar.style.top = "-60px";
    } else {
      navbar.style.top = "0";
    }
  }

  lastScrollTop = currentScroll;
  if (!scrollToTopBtn) {
    return;
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll();

if (scrollToTopBtn) {
  scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// Experience ========================

const experiences = [
  {
    id: "q2",
    company: "Q2",
    role: "Software Engineer",
    dates: "April 2025 - Present",
    logo: "./data/q2.png",
    bullets: [
      "Built AIDevAssistant, an LLM-powered developer assistant that analyzes repository context to determine whether a requested feature already exists.",
      "Designed retrieval and indexing workflows to surface relevant files, APIs, and prior implementations, helping developers avoid duplicate work.",
      "Improved engineering efficiency by delivering quick answers to “is this already done?” queries with evidence-backed references.",
    ],
  },
  {
    id: "ltimindtree",
    company: "LTIMindtree",
    role: "Software Engineer",
    dates: "September 2022 - April 2025",
    logo: "./data/ltimindtree.png",
    bullets: [
      "Built a Data Entity Extraction chatbot with Mistral LLM, reducing manual effort by 70% and cutting costs.",
      "Designed an intuitive frontend with Vue.js for operations engineers to analyze ITSM tickets using insightful charts and AI/ML recommendations. Enhanced operational efficiency with utilization notifications and backend integration via Spring Boot and REST APIs.",
      "Developed a scalable and reliable notification system for a multi-tenant environment, leveraging Spring Boot, Kubernetes, and Docker. Designed a cohesive UI with Vue.js for manual notifications.",
      "Developed a chatbot with document summarization, allowing users to upload images, PDFs, and DOCs for summarization and chat interactions.",
      "Built a document comparator app to detect and highlight differences between two documents using GenAI and Spring Boot.",
    ],
  },
  {
    id: "mindtree",
    company: "Mindtree",
    role: "MERN Stack Intern",
    dates: "March - June 2022",
    logo: "./data/mindtree.jpeg",
    bullets: [
      "Built a scalable e-commerce platform with product catalog, user authentication, and secure payment integration using Stripe API.",
      "Developed a real-time task management app with role-based access control and dynamic dashboards.",
      "Created a social networking app with profiles, posts, comments, media uploads, and real-time chat.",
    ],
  },
];

function renderExperience({ role, company, dates, bullets }) {
  return `
    <div class="header">
      ${role}
      <span class="organization">@ ${company}</span>
    </div>
    <div class="date">${dates}</div>
    <div class="description">
      <ul>
        ${bullets.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

const worklist = document.getElementById("worklist");
const workDescription = document.getElementById("work-description");

function renderWorklist() {
  if (!worklist) {
    return;
  }
  worklist.innerHTML = experiences
    .map(
      (experience) => `
      <div class="company-item" data-company="${experience.id}" role="button" tabindex="0">
        <img
          src="${experience.logo}"
          alt="${experience.company} logo"
          class="company-logo"
          loading="lazy"
        />
        <span>${experience.company}</span>
      </div>
    `
    )
    .join("");
}

function setActiveExperience(companyId) {
  const experience = experiences.find((item) => item.id === companyId);
  if (!experience || !workDescription) {
    return;
  }
  workDescription.innerHTML = renderExperience(experience);
  document.querySelectorAll(".company-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.company === companyId);
  });
}

function initExperienceTabs() {
  if (!worklist) {
    return;
  }
  renderWorklist();
  worklist.addEventListener("click", (event) => {
    const target = event.target.closest(".company-item");
    if (!target) {
      return;
    }
    setActiveExperience(target.dataset.company);
  });
  worklist.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const target = event.target.closest(".company-item");
    if (!target) {
      return;
    }
    event.preventDefault();
    setActiveExperience(target.dataset.company);
  });
  setActiveExperience("q2");
}

function initReveal() {
  document.body.classList.add("has-reveal");
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, observing) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observing.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

function initIconButtons() {
  document.querySelectorAll(".icon[role='button']").forEach((icon) => {
    icon.addEventListener("click", () => {
      openExternalLink(icon.dataset.url);
    });
    icon.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      openExternalLink(icon.dataset.url);
    });
  });
}

function initNavHandlers() {
  const navLinks = document.querySelectorAll("#nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavbar();
    });
  });

  const openButton = document.querySelector("#view i");
  const closeButton = document.querySelector("#cancel i");

  if (openButton) {
    openButton.addEventListener("click", handleViewClick);
    openButton.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      handleViewClick();
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", handleCancelClick);
    closeButton.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      handleCancelClick();
    });
  }
}

function initProjectCards() {
  document.querySelectorAll(".js-card-link").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".icon")) {
        return;
      }
      openExternalLink(card.dataset.primaryUrl);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      if (event.target.closest(".icon")) {
        return;
      }
      event.preventDefault();
      openExternalLink(card.dataset.primaryUrl);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initExperienceTabs();
  initReveal();
  initIconButtons();
  initNavHandlers();
  initProjectCards();
});


function handleViewClick(){
  const nav = document.getElementById("nav");
  const view = document.getElementById("view")
  const cancel = document.getElementById("cancel")

  if (!nav || !view || !cancel) {
    return;
  }

  nav.style.display = "contents";
  view.style.display = "none";
  cancel.style.display = "block";

}

function handleCancelClick(){
  const nav = document.getElementById("nav");
  const view = document.getElementById("view")
  const cancel = document.getElementById("cancel")

  if (!nav || !view || !cancel) {
    return;
  }

  nav.style.display = "none";
  view.style.display = "block";
  cancel.style.display = "none";
}

function closeNavbar(){
  let width = screen.width;
  if (width < 768){
    handleCancelClick()
  }
}

function openExternalLink(url) {
  if (!url) {
    return;
  }
  window.open(url, "_blank", "noopener");
}
