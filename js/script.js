document.addEventListener("DOMContentLoaded", function () {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    let loopNum = 0;
    let isDeleting = false;
    let text = '';
    let delta = 300 - Math.random() * 100;
    const period = 2000;
    const wrap = document.querySelector('.wrap');
    
    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        if (isDeleting) {
            text = fullText.substring(0, text.length - 1);
        } else {
            text = fullText.substring(0, text.length + 1);
        }
        wrap.innerHTML = text;

        if (!isDeleting && text === fullText) {
            isDeleting = true;
            delta = period;
        } else if (isDeleting && text === '') {
            isDeleting = false;
            loopNum++;
            delta = 500;
        } else {
            delta = 300 - Math.random() * 100;
        }

        setTimeout(tick, delta);
    }

    tick();

    // document.getElementById('connectBtn').addEventListener('click', function () {
    //     console.log('connect');
    // });
});
window.addEventListener('scroll', function () {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});

// Handle active link
const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


const slider = document.getElementById('skill-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentScrollPosition = 0;

// Function to scroll carousel
function scrollSlider(direction) {
    const scrollAmount = slider.offsetWidth / 3; // Width of one item
    if (direction === 'next') {
        currentScrollPosition += scrollAmount;
    } else {
        currentScrollPosition -= scrollAmount;
    }
    slider.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
}

prevBtn.addEventListener('click', () => scrollSlider('prev'));
nextBtn.addEventListener('click', () => scrollSlider('next'));



// const projects = [
//     { title: "H.C BLOG", description: "Design & Development", imgUrl: "img/project1.png" },
//     { title: "Nike Store", description: "Design & Development", imgUrl: "img/project2.png" },
//     { title: "Titan Watch Store", description: "Design & Development", imgUrl: "img/project3.png" },
//     { title: "Pet Palace", description: "Design & Development", imgUrl: "img/project4.png" },
//     { title: "Android system", description: "Design & Development", imgUrl: "img/project5.png" },
//     { title: "Business Startup", description: "Design & Development", imgUrl: "img/project3.png" },
// ];

// function loadProjects() {
//     const projectContainer = document.getElementById('projects-container');
//     projectContainer.innerHTML = '';
//     projects.forEach((project) => {
//         const projectHTML = `
//             <div class="col-12 col-sm-6 col-md-4">
//                 <div class="proj-imgbx">
//                     <img src="${project.imgUrl}" alt="${project.title}">
//                     <div class="proj-txtx">
//                         <h4>${project.title}</h4>
//                         <span>${project.description}</span>
//                     </div>
//                 </div>
//             </div>`;
//         projectContainer.innerHTML += projectHTML;
//     });
// }

// document.getElementById('tab1-link').addEventListener('click', (event) => {
//    event.preventDefault();
//     loadProjects();
// });

// Load projects initially
// loadProjects();







document.addEventListener("DOMContentLoaded", function() {
let loopNum = 0;
let isDeleting = false;
let text = '';
const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
const period = 2000;
let delta = 300 - Math.random() * 100;
let index = 1;

function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    text = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    document.querySelector('.wrap').innerHTML = text;

    if (isDeleting) {
    delta /= 2;
    }

    if (!isDeleting && text === fullText) {
    isDeleting = true;
    delta = period;
    } else if (isDeleting && text === '') {
    isDeleting = false;
    loopNum++;
    delta = 500;
    }

    setTimeout(tick, delta);
}

tick();
});

function connect() {
console.log('Connect button clicked');
}



const images = [
    "img/3ddev1.webp",
    "img/3ddev2.png",
    "img/3ddev3.webp"
    
];

// Reference to the image element
const headerImg = document.getElementById("header-img");

let currentImageIndex = 0;

// Function to change the image
function changeImage() {
    // Increment the image index and reset it if it exceeds the number of images
    currentImageIndex = (currentImageIndex + 1) % images.length;
    headerImg.src = images[currentImageIndex];
}

// Set interval to change the image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 5000);

// Optional: Function to connect (dummy function for button click)
function connect() {
    console.log("Let’s Connect button clicked");
}


function downloadPDF() {
    const a = document.createElement('a');
    a.href = 'assests/12319734_CV.pdf';
    a.download = '12319734_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}






(function () {
    "use strict";
    /*
    * Form Validation
    */

    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
        "submit",
        function (event) {
            if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            form.querySelectorAll(":invalid")[0].focus();
            } else {
            /*
            * Form Submission using fetch()
            */

            const formData = new FormData(form);
            event.preventDefault();
            event.stopPropagation();
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);
            submitBtn.innerHTML = 'Sending...';
            result.innerHTML = "Please wait...";

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
                },
                body: json
            })
                .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-green-500");
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                    submitBtn.innerHTML = 'Send';
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-red-500");
                }
                })
                .catch((error) => {
                console.log(error);
                submitBtn.innerHTML = 'Send';
                result.innerHTML = "Something went wrong!";
                })
                .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
                });
            }
            submitBtn.innerHTML = 'Send';
            form.classList.add("was-validated");
        },
        false
        );
    });
    })();