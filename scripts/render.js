const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const blurbFS = 6;
const experience = [
  {
    startDate: new Date("2021-07-01"),
    endDate: null,
    position: "Software Engineer",
    company: "GTICK Systems",
    blurb: [
      `Starting my career as a Software Engineer while still studying, I acquired skills on the job, often ahead of my coursework. Focused on revitalizing an established internal business management software, my efforts optimized daily
        operations, enhanced employee productivity, and facilitated intricate data management.`,
      `Within this web application, my contributions constitute 50% authorship of an eight-year-old project, encompassing 7,500 personal file changes. Moreover, I modernized the entire API layer and devised a more dynamic frontend,
        significantly expediting our development processes.`,
      `As part of a six-person engineering team, I contributed to a multi-million-dollar software integral across the mining pipeline. I personally designed operational pages, created essential data visualizations, and developed an
         large-scale database API integrator.`
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
    startDate: new Date("2023-12-01"),
    endDate: new Date("2023-12-01"),
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
  renderExperience();
  renderProjects();
}

function renderAbout() {
  const aboutContent = `
    <div class="row text-center mb-0">
      <h3 class="p-text-white fs-3 col-12 px-3">About</h3>
    </div>
    <div class="row justify-content-center fade show">
      <p class="col-12  mt-1">
        I currently spend my time professionally in the world of full-stack web development. I love the variety and diversity of being able to work on new projects every day and I enjoy the challenge that each project brings.
      </p>
    </div>
    <div class="row justify-content-center">
      <p class="col-12  mt-3 fade show"> Fatherhood has presented a whole new set of challenges to overcome, from dealing with dirty nappies to trying to wrap my head around Complex SQL with limited sleep.</p>
      <p class="col-12  mt-3 fade show"> As my wife puts it I also like to regularly torture myself by going on long runs and I appreciate the chance to spend hours listening to music that is older than me.</p>
    </div>
  `;

  sanitiseAndRenderHTML("aboutContainer", aboutContent);
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
              ${record.blurb.map(pText => `<p class="text-start fade show">${pText}</p>`).join()}                    
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="showMeTheDadJokes" class="inline-block project-link"  aria-hidden="true">
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
                ${project.blurb.map(blurb => `<p class="col-8 text-start flex-grow-1 order-1 order-md-2 fade show">${blurb}</p>`).join()}
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
