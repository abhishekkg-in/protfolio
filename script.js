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
    Designed an intuitive frontend using Vue.js, enabling operations
    engineers to analyze ITSM tickets with insightful charts and AI/ML
    recommendations. Implemented utilization notifications to enhance
    operational efficiency.
    </li>
    <li>
    Developed and integrated a user-friendly interface using Vue.js,
enhancing the chatbot’s functionality and user experience.
    </li>
    <li>
    Led the creation of a manual notification UI using Vue.js, enhancing
    user interaction and experience. Facilitated the integration of frontend and backend APIs, ensuring
    seamless communication between services.
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
    Developed a comprehensive trip booking application using React for the
    frontend, Node.js and Express for the backend and MongoDB for database
    management
    </li>
    <li>
    <b>Technology used: </b> React.jS, javascript, Node.js, REST API, Express.js, JWT
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

function closeNavbar(){
  let width = screen.width;
  console.log("width ->>", width);
  if (width < 768){
    console.log("got it ");
    handleCancelClick()
  }
}

function redirect(url){
  window.open(url, "_blank")
  // window.location.href = url;
}

