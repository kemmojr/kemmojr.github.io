const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/*
Dad Joke generator - 2023
run analyzer - manual upload - 2023
run analyzer - API integrated (in development) - 2023
Portfolio Website - 2023
battleships with web sockets - 2022
towers of hanoi - 2021
Joust recreation - 2018
*/

const blurbFS = 6;
const degree = {
  skills: ["Java", "C++", "SQL", "JavaScript", "Python"]
};
const experience = [
  {
    startDate: new Date("2024-03-01"),
    endDate: null,
    position: "My second software engineering role",
    company: "BISCIT",
    blurb: [
      `BISCIT are ERP specialists, focusing on Epicor. I worked on developing products that seamlessly integrate with Epicor to extend its functionality. Two of products include RMS - a rental management system and EKW - Epicor Kinetic Warehouse.`,
      `RMS allows for the extension of trackable depreciating assets whilst utilising custom Epicor tooling. The APIs store the entirety of its database within the customers own Epicor instance. I helped implement a new database solution by migrating from a previous MS SQL database. During this, I learned Angular and improved my frontend skills. `,
      `Collaboration and teamwork was key in this larger team project. I improved my listening and communication skills through code reviews and regular informal pair programming sessions. `,
      `EKW is the company's flagship product with mature processes and automations for stability. Working in this team improved my knowledge of Angular and allowed me to gain a deeper understanding of Epicor's inner workings. `
    ],
    skills: ["Angular", "C#/DotNet 8", "TypeScript", "Tailwind", "Git", "Databases"]
  },
  {
    startDate: new Date("2021-07-01"),
    endDate: new Date("2024-03-01"),
    position: "My first internship and graduate role",
    company: "GTICK Systems",
    blurb: [
      `I commenced my Software Engineer career while finishing my degree. Acquiring workplace skills as an intern, increased the value of my coursework. `,
      `As a graduate, I focused on revitalizing established internal business management software. I optimised daily operations, enhanced employee productivity, and facilitated intricate data management.`,
      `My contributions constitute 50% authorship of an eight-year-old project, encompassing 7,500 personal file changes. I modernized the entire API layer and deployed a dynamic front end, expediting our development processes.`,
      `As part of a six-person engineering team, I contributed to a multi-million-dollar software product integral across the mining pipeline. I designed operational pages, created essential data visualizations, and developed a large-scale database API integrator.`
    ],
    skills: ["SQL", "C#", "JavaScript", "C# Web API", "JSON"]
  },
  {
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-01-01"),
    position: "Software Engineer Experience",
    company: "St. Phillips Christian College",
    blurb: [`During my time doing work experience I worked with a Senior Engineer to implement a React + PHP + MySql application to serve as a admin dashboard for booking rooms and resources at their multiple campuses`],
    skills: ["React", "PHP", "SQL"]
  }
];

const projects = [
  {
    startDate: new Date("2025-01-23"),
    endDate: null,
    name: "Thinkpad t430 revival",
    link: "#picturesToComeModal",
    hasImage: false,
    image: `💻`,
    blurb: [
      `My current project, attempting to learn and revive a beauty of a laptop. I am in the process of flashing a custom BIOS, which will hopefully fix the minor issue of the machine currently not booting.`,
      ` Then it is just fun and games with the arch linux CLI install`
    ],
    skills: ["SPI programming", "laptop disassembly", "Arch Linux"]
  },
  {
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-15"),
    name: "snake re-creation",
    link: "#snakeModal",
    hasImage: false,
    image: `🐍`,
    blurb: [`A little project to recreate snake, a game I used to play on my old Nokia phone. The main inspiration for the project was wanting to get my feet wet with the godot game engine.`],
    skills: ["Godot", "GDScript", "Game Development"]
  },
  {
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-01"),
    name: "The first laptop revival",
    link: "#picturesToComeModal",
    hasImage: false,
    image: `💻`,
    blurb: [
      `Breathing new life into an unused old laptop. I installed arch linux over the span of a few weeks, learning a bunch about the linux CLI and the inner workings of computers.`,
      ` And it is the machine I am currently typing this on, so I would call it a success`
    ],
    skills: ["Linux", "Operating systems", "CLI"]
  },
  {
    startDate: new Date("2023-12-01"),
    endDate: new Date("2023-12-01"),
    name: "Dad Joke Generator",
    link: "#dadJokeModal",
    hasImage: false,
    image: `
        <div class="container">
            <h4 class="fs-4 p-text-white">Loading Dad Joke...</h4>
            <div class="d-flex p-1 border border-5 border-white rounded-3">
                <div class="loading-bar-cell flex-grow-1 m-1"></div>
                <div class="loading-bar-cell flex-grow-1 m-1"></div>
                <div class="loading-bar-cell flex-grow-1 m-1"></div>
                <div class="loading-bar-cell flex-grow-1 m-1"></div>
                <div class="loading-bar-cell flex-grow-1 m-1"></div>
                <div class="flex-grow-1 m-1"></div>
                <div class="flex-grow-1 m-1"></div>
                <div class="flex-grow-1 m-1"></div>
                <div class="flex-grow-1 m-1"></div>
            </div>
        </div>
    `,
    blurb: [
      `This was a fun weekend project to make an app in multiple different ways. simply press the button and it spits out a dad joke. It gets the jokes from the from the icanhazdadjoke.com API. I made versions in in ASP.Net 7 MVC, Python and frontend JavaScipt`
    ],
    skills: ["C#", "JavaScript", "C# Web API", "JSON", "REST API", "Python"]
  },
  {
    startDate: new Date("2018-02-01"),
    endDate: new Date("2018-07-01"),
    name: "Joust Re-creation",
    link: "#missingModal",
    // link: "#joustModal", seems to be an error with importing the whole html. todo
    hasImage: true,
    image: `./images/Joust.png`,
    blurb: [
      `One of my earliest fully fledged computing projects, this was a school project with very open guidelines. The brief was to just create a program in some capacity but I decided to go all out and try to faithfully recreate an 80's arcade game in a web browser.<br />
      I ended up spending many many hours working on the application and recieved the top mark for the class. In the process I taught myself the basics of JavaScript programming, albeit in a very hacky way.<br />
      Here is the result`
    ],
    skills: ["JavaScript", "HTML", "CSS"]
  },
  {
    startDate: new Date("2016-12-01"),
    endDate: new Date("2016-12-01"),
    name: "Flash platformer",
    link: "#missingModal",
    image: `./images/flash.png`,
    hasImage: true,
    blurb: [
      `My first real foray into programming. I set out to make a 2d platformer in adobe flash starting from scratch. I soon realised what a difficult problem this was, my ambitions got ahead of me. But through the process of coding my own hitbox collision system I discovered the joy of programming. I was hooked`
    ],
    skills: ["ActionScript", "OOP"]
  }
];

function getDateFormatted(date) {
  if (!date) return "Present";
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function sanitise(htmlStr) {
  // Create a temporary container to sanitize the content
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = htmlStr;

  // Sanitize the content using DOMParser and create a document fragment
  const sanitizedFragment = document.createDocumentFragment();
  Array.from(tempContainer.childNodes).forEach(node => {
    sanitizedFragment.appendChild(node.cloneNode(true));
  });

  return sanitizedFragment;
}

function sanitiseAndRenderHTML(containerID, htmlStr) {
  sanitizedFragment = sanitise(htmlStr);
  // Selecting the container element
  const aboutContainer = document.getElementById(containerID);

  // Clear the existing content before appending the sanitized content
  aboutContainer.innerHTML = "";

  // Append the sanitized content to the container
  aboutContainer.appendChild(sanitizedFragment);
}

function render() {
  renderAbout();
  renderEducation();
  renderExperience();
  renderProjects();
}

function renderAbout() {
  const aboutContent = `
  <div class="about">
    <div class="row text-center mb-0">
      <h3 class="p-text-white fs-3 col-12 px-3">About</h3>
    </div>
    <div class="row justify-content-center fade show">
      <p class="col-12  mt-1">
        I currently spend my time professionally in the world of full-stack web development. I love the variety and diversity of being able to work on something different each day, and have a special love for backend.
      </p>
    </div>
    <div class="row justify-content-center">
      <p class="col-12  mt-3 fade show"> Fatherhood has presented a whole new set of challenges to overcome, from trying to stop a toddler from eating everything in sight, to trying to program with a child that thinks pressing power buttons is a great game.</p>
      <p class="col-12  mt-3 fade show"> I also enjoy getting into the guts of computers and upgrading them with better hardware and a much improved Operating System.</p>
    </div>
  </div>
  `;

  sanitiseAndRenderHTML("aboutContainer", aboutContent);
}

function renderEducation() {
  const educationContent = `
  <div class="about">
    <div class="row text-center mb-0">
      <h3 class="p-text-white fs-3 col-12 px-3">Education</h3>
    </div>
    <div class="education mb-5 mt-3">
            <div class="row text-center mb-4 mt-3">
              <div class="row col-12 col-md-4">
                  <p class=" text-start text-md-end p-text-light-grey">${getDateFormatted(new Date("2019-02-01"))} -
                  ${getDateFormatted(new Date("2023-06-01"))}
                  </p>
              </div>
              <div class="row col-12 col-md-8 p-1 text-start">
                  <h5 class="p-text-white fs-3">Bachelor of Computer Science</h5>
                  <p class=" m-0">Major Software Development</p>
              </div>
              <div class="row col-12 text-center justify-content-start mt-3 ">
              <div class="col-md-4 row"></div>
              <div class="col-12 col-md-8 flex-grow-1">
              <p class="text-start fade show">
                Completing a degree in computer science enabled me to learn various skills and refine existing ones. I learnt the fundamentals of programming and data structures, I gained a fundamental understanding of the software of computers including how they operate and their communication protocols.
              </p>
                    <div class="col-12 container">
                        <div class="text-center justify-content-start">
                            ${degree.skills.map(skill => `<h5 class="m-2 skill rounded-pill text-center d-inline-flex">${skill}</h5>`).join()}
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
  `;

  sanitiseAndRenderHTML("educationContainer", educationContent);
}

function renderExperience() {
  let experienceContent = `
    <div class="row text-center">
    <h3 class="p-text-white fs-3 col-12 pb-2 px-3">Experience</h3>
    </div>`;

  for (let record of experience) {
    const experienceRecord = `
          <div class="experience mb-5 mt-3">
            <div class="row text-center mb-4 mt-3">
              <div class="row col-12 col-md-4">
                  <p class=" text-start text-md-end p-text-light-grey">${getDateFormatted(record.startDate)}
                  ${record.startDate >= record.endDate && record.startDate <= record.endDate ? "" : ` - ${getDateFormatted(record.endDate)}`}
                  </p>
              </div>
              <div class="row col-12 col-md-8 p-1 text-start">
                  <h5 class="p-text-white ">${record.position}</h5>
                  <p class=" m-0">${record.company}</p>
              </div>
              <div class="row col-12 text-center justify-content-start mt-3 ">
              <div class="col-md-4 row"></div>
              <div class="col-12 col-md-8 flex-grow-1">
              ${record.blurb.map(pText => `<p class="text-start fade show">${pText}</p>`).join(`<br />`)}
                    <div class="col-12 container">
                        <div class="text-center justify-content-start">
                            ${record.skills.map(skill => `<h5 class="m-2 skill rounded-pill text-center d-inline-flex">${skill}</h5>`).join()}
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
            `;

    experienceContent += experienceRecord;
  }

  sanitiseAndRenderHTML("experienceContainer", experienceContent);
}

function renderProjects() {
  let projectsContent = `
    <div class="row text-center">
        <span class="line"></span>
        <h3 class="p-text-white fs-3 col-12 pb-2 px-3">Projects</h3>
    </div>
    `;

  for (let project of projects) {
    const img = new Image();
    img.alt = project.name;
    img.src = project.image;
    img.classList.add("project-img");
    const projectHTML = `
          <div class="project mb-5 mt-3" data-bs-toggle="modal" data-bs-target="${project.link}">
            <div class="row text-center mb-4 mt-3">
                <div class="row col-12 col-md-4">
                <p class=" text-start text-md-end p-text-light-grey">
                ${getDateFormatted(project.startDate)}
                  ${project.startDate >= project.endDate && project.startDate <= project.endDate ? "" : ` - ${getDateFormatted(project.endDate)}`}
                </p>
                </div>
                <div class="row col-12 col-md-8 p-1 text-start">
                <h5 class="p-text-white ">
                    ${project.name}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block project-link"  aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                    </svg>
                </h5>
                </div>
            </div>
            <div class="row col-12 text-center justify-content-start ">
                <div class="col-8 col-md-4 row order-2 order-md-1 justify-content-center fade show">
                    <div class="container">
                        <div class="row justify-content-end ">
                            <div class="col-8">
                                ${project.hasImage ? `${img.outerHTML}` : project.image}
                            </div>
                        </div>
                    </div>
                </div>
                ${project.blurb.map(blurb => `<p class="col-8 text-start flex-grow-1 order-1 order-md-2 fade show">${blurb}</p>`).join(`<br />`)}
            </div>
            <div class="col-12 col-sm-6 col-md-6 container mt-4 pb-2 fade show">
                <div class="text-center justify-content-start">
                    ${project.skills.map(skill => `<h5 class="m-2 skill rounded-pill text-center d-inline-flex">${skill}</h5>`).join()}
                </div>
            </div>
        </div>
      </div>
        `;

    projectsContent += projectHTML;
  }

  sanitiseAndRenderHTML("projectsContainer", projectsContent);
}
