// Smooth scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.style.top = "0";
  } else if (currentScroll > lastScrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll;
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Experience ========================

const descriptions = {
  ltimindtree: `
  <div class="header">
            Software Engineer
            <span class="organization">@ LTIMindtree</span>
          </div>
          <div class="date">September 2022 - Present</div>
<div class="description">
  <ul>
    <li>
      Developed and styled interactive web applications for Apple
      Music using Ember and SCSS.
    </li>
    <li>
      Built and shipped the Apple Music Extension for Facebook
      Messenger leveraging third-party and internal API integrations.
    </li>
    <li>
      Architected and implemented the user interface of Apple Music's
      embeddable web player widget for in-browser user authorization
      and full song playback.
    </li>
    <li>
      Contributed extensively to the creation of MusicKit JS, a
      public-facing JavaScript SDK for embedding Apple Music players
      into web applications.
    </li>
  </ul>
</div>
  `,
  mindtree: `
  <div class="header">
  MERN Stack Intern
  <span class="organization">@ Mindtree</span>
</div>
<div class="date">March - June 2022</div>
<div class="description">
  <ul>
    <li>
      Developed and styled interactive web applications for Apple
      Music using Ember and SCSS.
    </li>
    <li>
      Built and shipped the Apple Music Extension for Facebook
      Messenger leveraging third-party and internal API integrations.
    </li>
  </ul>
</div>
  `,
};

function showDescription(company) {
  document.getElementById("work-description").innerHTML = descriptions[company];
  document.querySelectorAll(".company-item").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`.company-item[onclick="showDescription('${company}')"]`)
    .classList.add("active");
}


function handleViewClick(){
  console.log("view clicked...")

  const nav = document.getElementById("nav");
  const view = document.getElementById("view")
  const cancel = document.getElementById("cancel")

  nav.style.display = "contents";
  view.style.display = "none";
  cancel.style.display = "block";

}

function handleCancelClick(){
  console.log("cancel clicked...")

  const nav = document.getElementById("nav");
  const view = document.getElementById("view")
  const cancel = document.getElementById("cancel")

  nav.style.display = "none";
  view.style.display = "block";
  cancel.style.display = "none";
}

