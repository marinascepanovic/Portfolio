// ====================================================================
// FLOATING NAV – ACTIVE LINK HANDLING
// ====================================================================

const floatingNavs = document.querySelectorAll(".floating__nav a");

const removeActiveClass = () => {
  floatingNavs.forEach((nav) => nav.classList.remove("active"));
};

floatingNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass();
    nav.classList.add("active");
  });
});

// ====================================================================
// FLOATING NAV – SHOW ONLY AFTER SCROLL & HIDE ON CONTACT
// ====================================================================

const floatingNav = document.querySelector(".floating__nav");
const contactSection = document.getElementById("contact");

const handleFloatingNavVisibility = () => {
  const showAt = 80; // when to start showing floating nav

  if (!floatingNav) return;

  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  let hideAtBottom = false;

  // hide when reaching (or almost reaching) the contact section
  if (contactSection) {
    const contactTop = contactSection.offsetTop;

    if (scrollY + viewportHeight >= contactTop + 500) {
      hideAtBottom = true;
    }
  }

  if (scrollY > showAt && !hideAtBottom) {
    floatingNav.classList.add("floating__nav--visible");
  } else {
    floatingNav.classList.remove("floating__nav--visible");
  }
};

window.addEventListener("scroll", handleFloatingNavVisibility);
// run once on load
handleFloatingNavVisibility();

// ====================================================================
// RESUME TABS (EXPERIENCE / EDUCATION / SKILLS / ABOUT)
// ====================================================================

const resumeRight = document.querySelector(".resume__right");

// --------------------------------------------------------------------
// EXPERIENCE
// --------------------------------------------------------------------

const experienceContent = `
  <h4>Experience</h4>
  <p>
    Most of my hands-on experience comes from project work where I practised
    building real web applications and interfaces.
  </p>
  <ul>
    <li>
      <h6>Web App</h6>
      <h5>WanderLog – Travel Planner (MERN)</h5>
      <p>
        Travel planning app where users create trips, add activities (flights, stays, tours)
        and see a simple overview of budget and expenses.
      </p>
    </li>
    <li>
      <h6>Web App</h6>
      <h5>Trivia Game</h5>
      <p>
       A simple browser-based quiz game. Technologies used: JavaScript, HTML and CSS.
       The goal is to test your knowledge of programming concepts with a countdown timer on each question.
        </p>
      </p>
    </li>
  </ul>
`;

const experienceBtn = document.querySelector(".experience__btn");

experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  resumeRight.className = "resume__right";
  experienceBtn.classList.add("primary");
  aboutBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
});

// set initial tab content to Experience
resumeRight.innerHTML = experienceContent;

// --------------------------------------------------------------------
// EDUCATION
// --------------------------------------------------------------------

const educationBtn = document.querySelector(".education__btn");
const educationContent = `
  <h4>Education</h4>
  <ul>
    <li>
      <h5>Bachelor's Degree in Applied Computer Engineering</h5>
      <p>Faculty of Electrical Engineering</p>
      <p>2016 – 2022</p>
    </li>
    <li>
      <h5>Software Engineering Bootcamp</h5>
      <p>General Assembly</p>
      <p>Software Engineering Bootcamp (2025)</p>
    </li>
  </ul>
`;

educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.className = "resume__right education";
  educationBtn.classList.add("primary");
  aboutBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
});

// --------------------------------------------------------------------
// SKILLS – tech stack overview
// --------------------------------------------------------------------

const skillsBtn = document.querySelector(".skills__btn");
const skillsContent = `
  <h4>Skills</h4>
  <p>Technologies and tools I work with:</p>
  <ul>
    <li><h6>HTML5</h6></li>
    <li><h6>CSS3</h6></li>
    <li><h6>JavaScript (ES6+)</h6></li>
    <li><h6>React</h6></li>
    <li><h6>Tailwind CSS</h6></li>
    <li><h6>Node.js</h6></li>
    <li><h6>Express</h6></li>
    <li><h6>MongoDB</h6></li>
    <li><h6>MySQL</h6></li>
    <li><h6>Git</h6></li>
    <li><h6>GitHub</h6></li>
    <li><h6>VS Code</h6></li>
    <li><h6>Postman</h6></li>
    <li><h6>C++</h6></li>
    <li><h6>CodeBlocks</h6></li>
    <li><h6>AutoCAD</h6></li>
    <li><h6>LTspice</h6></li>
  </ul>
`;

skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillsContent;
  resumeRight.className = "resume__right skills";
  skillsBtn.classList.add("primary");
  aboutBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
});

// --------------------------------------------------------------------
// ABOUT 
// --------------------------------------------------------------------

const aboutBtn = document.querySelector(".about__btn");
const aboutContent = `
  <h4>About me</h4>
  <p>
    Junior Software Developer based in Podgorica, Montenegro, with a background in Applied Computer Engineering. I am at the beginning of my software development career and learn best by building real projects. By attending a full-time Software Engineering Bootcamp at General Assembly and working on several personal and team projects, I’ve gained hands-on experience with modern web technologies. I enjoy writing clean, understandable code, collaborating with others and contributing to real-world products, and I’m currently looking for an entry-level frontend role where I can learn, contribute and be part of a team.
  </p>
`;

aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContent;
  resumeRight.className = "resume__right about";
  aboutBtn.classList.add("primary");
  skillsBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
});

// ====================================================================
// PROJECTS FILTER (ALL / FRONTEND / BACKEND)
// ====================================================================

const buttons = document.querySelectorAll(".projects__categories .btn");
const projects = document.querySelectorAll(".project");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    projects.forEach((project) => {
      if (filter === "*" || project.classList.contains(filter.substring(1))) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

    buttons.forEach((btn) => btn.classList.remove("primary"));
    button.classList.add("primary");
  });
});

// ====================================================================
// THEME TOGGLER (LIGHT / DARK)
// ====================================================================

const themeToggler = document.querySelector(".nav__theme-btn");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  if (document.body.classList.contains("dark-theme-variables")) {
    themeToggler.innerHTML = `<i class="uil uil-sun"></i>`;
    window.localStorage.setItem("portfolio-theme", "dark-theme-variables");
  } else {
    themeToggler.innerHTML = `<i class="uil uil-moon"></i>`;
    window.localStorage.setItem("portfolio-theme", "");
  }
});

// Load saved theme on page load
const bodyClass = window.localStorage.getItem("portfolio-theme");
if (bodyClass) {
  document.body.classList.add(bodyClass);
  themeToggler.innerHTML = `<i class="uil uil-sun"></i>`;
}