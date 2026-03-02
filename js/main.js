let box = document.querySelectorAll(".box");

let projectsContainer = document.querySelector(".projects-section .card-container");
let projectsContainerSmall = document.querySelector(".projects-section .card-container-small");

let skillsContainer = document.querySelector(".skills-section .card-container");
let skillsContainerSmall = document.querySelector(".skills-section .card-container-small");

let serviceContainer = document.querySelector(".services-section .card-container");
let serviceContainerSmall = document.querySelector(".services-section .card-container-small");

let projects = [
    {
        name: "Learning Platform",
        img: "photo/lms.png",
        link: "https://mostaql.com/portfolio/3387068-learning-mangement-system-%D9%85%D9%86%D8%B5%D9%87-%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D9%87"
    }
    ,
    {
        name: "E-commerce Website",
        img: "photo/brand_mangement_system.png",
        link: "https://mostaql.com/portfolio/3290477-brand-mangement-system-%D9%86%D8%B8%D8%A7%D9%85-%D8%A7%D8%AF%D8%A7%D8%B1%D9%87-%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D9%87"
    }
    ,
    {
        name: "Restaurant System",
        img: "photo/resturant.png",
        link: "http://elshnawyresturant.free.nf/?i=1"
    }
    ,
    {
        name: "Business Website",
        img: "photo/bussniss.png",
        link: "https://mohammedel4nawy.github.io/landing-page/"
    }
    ,
    {
        name: "T-Square Website",
        img: "photo/t-square.png",
        link: "https://mohammedel4nawy.github.io/t-square/"
    }
    ,
    {
        name: "Guessing Game",
        img: "photo/guessing-game.png",
        link: "https://mohammedel4nawy.github.io/Guessing-Game/"
    }
    ,
    {
        name: "To Do List",
        img: "photo/to-do-list.png",
        link: "https://mohammedel4nawy.github.io/to-do-list/"
    }
    ,
]

let skills = [
    {
        name: "HTML",
        image: "photo/html-5-svgrepo-com.svg",
        description: "The backbone of every website, structuring content in a clean and user-friendly way."
    },
    {
        name: "CSS",
        image: "photo/css-3-svgrepo-com.svg",
        description: "Brings life to web pages with styling, layouts, and responsive design that look great on any device."
    },
    {
        name: "JavaScript",
        image: "photo/js-svgrepo-com.svg",
        description: "Adds interactivity and dynamic features, making websites more engaging and powerful."
    },
    {
        name: "Bootstrap",
        image: "photo/bootstrap-svgrepo-com.svg",
        description: "Speeds up development with ready-to-use responsive components and modern design utilities."
    },
    {
        name: "React",
        image: "photo/react-svgrepo-com.svg",
        description: "Builds fast, scalable, and interactive user interfaces that deliver seamless user experiences."
    },
    {
        name: "PHP",
        image: "photo/php2-svgrepo-com.svg",
        description: "A powerful server-side language for building secure, dynamic, and data-driven web applications."
    },
    {
        name: "MySQL",
        image: "photo/mysql-svgrepo-com.svg",
        description: "Reliable database management to store, organize, and handle your business data efficiently."
    },
    {
        name: "Laravel",
        image: "photo/laravel-svgrepo-com.svg",
        description: "A modern PHP framework that makes building complex systems faster, cleaner, and more secure."
    },
    {
        name: "Integrations",
        image: "photo/api.png",
        description: "Integration with external services including Google APIs (Maps, Analytics, OAuth), GitHub workflows, Facebook APIs, and secure online payment gateways."
    }
];

let services = [
    {
        title: "Business Landing Page",
        features: [
        "Responsive Design",
        "Modern Layout",
        "Fast Performance",
        "SEO Optimized",
        "Social Integration",
        "Custom Branding",
        "Easy Updates"
        ],
        link: "https://wa.me/201275579302"
    },
    {
        title: "Create Portfolio",
        features: [
        "Responsive Design",
        "Modern Layout",
        "Fast Performance",
        "Social Integration",
        "Custom Branding",
        "Easy Updates"
        ],
        link: "https://wa.me/201275579302"
    },
    {
        title: "Database Design",
        features: [
        "DB Design",
        "MySQL Setup",
        "Data Modeling",
        "Schema Optimization",
        "Secure Storage",
        "Backup Solutions",
        "Fast Queries"
        ],
        link: "https://wa.me/201275579302"
    },
    {
        title: "Systems",
        features: [
        "Business Automation",
        "Custom Web Apps",
        "CRM Integration",
        "ERP Solutions",
        "Inventory Systems",
        "Payment Gateways",
        "Analytics Dashboard"
        ],
        link: "https://wa.me/201275579302"
    },
    {
        title: "Full Website",
        features: [
        "Custom Responsive Website",
        "Interactive Frontend",
        "Robust Backend",
        "Database Design (MySQL)",
        "Admin Dashboard",
        "User Auth & Roles",
        "Payment Integration",
        "API Development",
        "Performance Optimization",
        "SEO & Accessibility",
        "Automations & Workflows",
        "Analytics & Reporting",
        "Security & Backups",
        "Deployment & Hosting",
        "Maintenance & Support"
        ],
        link: "https://wa.me/201275579302"
    },
    {
        title: "Admin Dashboard",
        features: [
        "User Management",
        "Roles & Permissions",
        "Analytics & Reports",
        "Content Control",
        "Sales Tracking",
        "Notifications System",
        "Secure Login"
        ],
        link: "https://wa.me/201275579302"
    }
];


let arr1 = Array.from(box);


// project section 

projectsContainer.innerHTML = "";
projectsContainerSmall.innerHTML = "";

projects.forEach(function (e, i) {
    projectsContainer.innerHTML += ` 
    <div class="stack col-md-4 my-3 wow animate__jackInTheBox" data-wow-delay="${i*.1}s" style=" z-index: ${i}; position : sticky ; top :0px ;" >
        <div class="card d-flex flex-column align-items-center p-3 m-2 justify-content-center">
            <div class="image d-flex flex-wrap ">
                <img src="${e.img}" alt="${e.name}">
            </div>
            <div class="details d-flex flex-wrap flex-column">
                <div class="text">
                    <h5 class="my-1">${e.name}</h5>
                </div>
                <a href="${e.link}" target="blank" class="btn btn-dark text-capitalize my-2 m-auto">Visit</a>
            </div>
        </div>
    </div>
    `
    });

projects.forEach(function (e , i) {
    projectsContainerSmall.innerHTML += `
    <div class="stack col-md-4 wow animate__jackInTheBox" data-wow-delay="${i*.1}s" style=" z-index: ${i}; position : sticky ; top :0px ;">
        <div class="card d-flex flex-column align-items-center p-3 m-2 justify-content-center">
            <div class="image d-flex flex-wrap ">
                <img src="${e.img}" alt="${e.name}">
            </div>
            <div class="details d-flex flex-wrap flex-column">
                <div class="text">
                    <h5 class="my-1">${e.name}</h5>
                </div>
                <a href="${e.link}" target="blank" class="btn btn-dark text-capitalize my-2 m-auto">Visit</a>
            </div>
        </div>
    </div>
    `
})

//--------------------------------------------------------------

// skills section

skillsContainer.innerHTML = "";
skillsContainerSmall.innerHTML = "";

skills.forEach(function (e, i) {

    skillsContainer.innerHTML += `
        <div class="skill-card col-md-3 mx-1 wow animate__jackInTheBox" data-wow-delay="${i*.1}s" style=" z-index: ${i}; position : sticky ; top :0px ;">

            <div class="card-img">
                <div class="img">
                <img src="${e.image}" alt="${e.name}">
                </div>
            </div>

            <div class="card-title">${e.name}</div>

            <div class="card-subtitle">
                <p>${e.description}</p>
            </div>
            
            <hr class="card-divider">
            
        </div>
    `

})

skills.forEach(function (e, i) {

    skillsContainerSmall.innerHTML += `
        <div class="skill-card col-md-3 mx-1 wow animate__jackInTheBox" data-wow-delay="${i*.1}s" style=" z-index: ${i}; position : sticky ; top :0px ;">

            <div class="card-img">
                <div class="img">
                <img src="${e.image}" alt="${e.name}">
                </div>
            </div>

            <div class="card-title">${e.name}</div>

            <div class="card-subtitle">
                <p>${e.description}</p>
            </div>

            <hr class="card-divider">
            
        </div>
    `

})

//---------------------------------------------------------------


// services section

serviceContainer.innerHTML = "";
serviceContainerSmall.innerHTML = "";

services.forEach(function (e, i) {
    serviceContainer.innerHTML += `
        <div class="service-container col-md-4 p-2" style = " z-index: ${i}; position : sticky ; top :0px ; " >
            <div class="service-box d-flex flex-column ">
                <div class=" header">
                    <h4 class="text-capitalize text-center">${e.title}</h4>
                </div>
                <div class="body">
                        <ul>
                        ${e.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>                            
                </div>
                <hr>
                <a href="${e.link}" target="blank" class="btn btn-dark">Get Service</a>
            </div>  
        </div>`
})

services.forEach(function (e, i) {
    serviceContainerSmall.innerHTML += `
        <div class="service-container col-md-4 p-2" style = " z-index: ${i}; position : sticky ; top :0px ; " >
            <div class="service-box d-flex flex-column ">
                <div class=" header">
                    <h4 class="text-capitalize text-center">${e.title}</h4>
                </div>
                <div class="body">
                        <ul>
                        ${e.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>                            
                </div>
                <hr>
                <a href="${e.link}" target="blank" class="btn btn-dark">Get Service</a>
            </div>    
        </div>
            `
})

//---------------------------------------------------------------

// z-index and position for all sections
arr1.forEach(function (e, i) {
    if(i != 1 && i!=2){
        e.style.cssText = ` z-index: ${i}; position : sticky ; top :0px ; background-color : var(--color-1);`;
    }else{
        e.style.cssText = ` z-index: ${i}; background-color : var(--color-1);`;
    }
});

setTimeout(() => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}, 2400);