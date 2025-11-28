// Responsive Preloader with enhanced functionality
const loader = document.getElementById('preloder');

// Add preloader active class to body
document.body.classList.add('preloader-active');

// Function to hide preloader
function hidePreloader() {
    // Add fade-out class for smooth transition
    loader.classList.add('fade-out');
    
    // Remove preloader from DOM after animation
    setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.remove('preloader-active');
    }, 500);
}

// Minimum display time for better UX (1.5 seconds)
let minDisplayTime = 1500;
let startTime = Date.now();

// Handle page load
window.addEventListener('load', function() {
    const loadTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - loadTime);
    
    setTimeout(hidePreloader, remainingTime);
});

// Fallback: Hide preloader after maximum time (5 seconds)
setTimeout(hidePreloader, 5000);

// Handle potential errors
window.addEventListener('error', function() {
    setTimeout(hidePreloader, 1000);
});

// Handle cases where load event doesn't fire (fallback)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (document.body.classList.contains('preloader-active')) {
            hidePreloader();
        }
    }, 3000);
});




// Toggle mobile menu
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = hamburger.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-items a, .mobile-buttons a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                // Reset hamburger animation
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });



//    JS for HOME


            // Counter function
function animateCounter(element, target, duration = 1500) {
    let start = 0;
    let step = Math.ceil(target / (duration / 20));

    let timer = setInterval(() => {
        start += step;

        if (start >= target) {
            start = target;
            clearInterval(timer);
        }

        element.textContent = start + (element.dataset.suffix || "");
    }, 100);
}

// Select elements
let experience = document.querySelector(".card1 .qr");
let projects = document.querySelector(".card2 .qr");
let clients = document.querySelector(".card3 .qr");

// Set target values and suffix
experience.dataset.suffix = " Y.";
projects.dataset.suffix = "+";
clients.dataset.suffix = "";

// Actual target numbers
let experienceYears = 1;   // CHANGE YOUR EXPERIENCE HERE
let totalProjects = 30;    // CHANGE PROJECT COUNT
let totalClients = 20;     // CHANGE CLIENT COUNT

// Start animation on page load
window.addEventListener("load", () => {
    animateCounter(experience, experienceYears);
    animateCounter(projects, totalProjects);
    animateCounter(clients, totalClients);
});



  const roles = [
            "Web Developer",
            "UI/UX Designer",
            "Graphic Designer",
            "Digital Marketer"
        ];

        let index = 0;        // which text in the list
        let charIndex = 0;    // which character in the text
        let isDeleting = false;
        let speed = 100;      // typing speed

        const roleElement = document.getElementById("role");

        function typeEffect() {
            let currentText = roles[index];

            if (isDeleting) {
                // remove characters
                roleElement.textContent = currentText.substring(0, charIndex--);
                speed = 60;  
            } else {
                // add characters
                roleElement.textContent = currentText.substring(0, charIndex++);
                speed = 110;
            }

            // If text is fully typed
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                speed = 200; // hold the full text before deleting
            }

            // Once fully deleted
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % roles.length; // go to next text
                speed = 10;
            }

            // Recursive animation
            setTimeout(typeEffect, speed);
        }

        // Start the typing effect when page loads
        document.addEventListener('DOMContentLoaded', typeEffect);



                        document.getElementById('sayHelloBtn').addEventListener('click', function() {
            alert('Hello! Let\'s discuss how I can help you.');
        });



        // JS for ABOUT


                // Simple button interaction
        document.getElementById('myProjectBtn').addEventListener('click', function() {
            alert('Projects will be shown here!');
        });
        
        document.getElementById('downloadCvBtn').addEventListener('click', function() {
            alert('CV download initiated!');
        });





        // JS for PORTFOLIO


                // Add button functionality
        document.getElementById('moreProjectsBtn').addEventListener('click', function() {
            alert('Loading more projects...');
        });

        // Add case study button functionality
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', function() {
                const projectTitle = this.closest('.object').querySelector('h3').textContent;
                alert(`Opening case study for: ${projectTitle}`);
            });
        });





        // JS of FIFTH 


                document.getElementById('workTogetherBtn').addEventListener('click', function() {
            alert('Thank you for your interest! Let\'s connect and discuss your project.');
        });




        // JS of BLOG 



                // Add click functionality to blog cards
        document.querySelectorAll('.blog-inner').forEach(card => {
            card.addEventListener('click', function() {
                const blogTitle = this.querySelector('.for').textContent;
                alert(`Opening blog post: ${blogTitle}`);
            });
        });



        // JS of service 



                document.getElementById('servicesSayHelloBtn').addEventListener('click', function() {
            alert('Hello! Let\'s discuss how I can help with your project.');
        });

        // Add hover effect enhancement
        document.querySelectorAll('.do').forEach(service => {
            service.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });
            
            service.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });




        // JS of EIGHT 



                // Optional: Add intersection observer to pause animation when not in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const photosContainer = entry.target.querySelector('.client-photos');
                if (entry.isIntersecting) {
                    photosContainer.style.animationPlayState = 'running';
                } else {
                    photosContainer.style.animationPlayState = 'paused';
                }
            });
        });

        const parentClient = document.querySelector('.parent-client');
        if (parentClient) {
            observer.observe(parentClient);
        }




        // JS of TESTIMONIALS 


                    // <!-- Image opacity can be adjusted in the const opacity = index === activeIndex ? 1 : 0.7; line -->
const testimonials = [
    {
        quote: "Indra delivered a clean, fast, and beautifully designed website. His HTML, CSS, JS, and Laravel skills truly exceeded my expectations.",
        name: "Prerana Chaudhary",
        designation: "Client",
        src: "/img/perana.jpeg",
    },
    {
        quote: "Amazing work! The UI is smooth, responsive, and exactly what I envisioned. Indra communicates clearly and delivers on time.",
        name: "Bikash Tharu",
        designation: "Project Partner",
        src: "/img/bikash.jpg",
    },
    {
        quote: "A great experience working with Indra! His attention to detail and problem-solving made the whole project smooth and enjoyable.",
        name: "Rupa Lama",
        designation: "Business Owner",
        src: "/img/rupa.jpg",
    },
];


        let activeIndex = 0;
        const imageContainer = document.getElementById('image-container');
        const nameElement = document.getElementById('name');
        const designationElement = document.getElementById('designation');
        const quoteElement = document.getElementById('quote');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        function updateTestimonial(direction) {
            const oldIndex = activeIndex;
            activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;

            testimonials.forEach((testimonial, index) => {
                let img = imageContainer.querySelector(`[data-index="${index}"]`);
                if (!img) {
                    img = document.createElement('img');
                    img.src = testimonial.src;
                    img.alt = testimonial.name;
                    img.classList.add('testimonial-image');
                    img.dataset.index = index;
                    imageContainer.appendChild(img);
                }

                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);
                const zIndex = testimonials.length - absOffset;
                const opacity = index === activeIndex ? 1 : 0.7;
                const scale = 1 - (absOffset * 0.15);
                const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
                const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';

                img.style.zIndex = zIndex;
                img.style.opacity = opacity;
                img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
            });

            nameElement.textContent = testimonials[activeIndex].name;
            designationElement.textContent = testimonials[activeIndex].designation;
            quoteElement.innerHTML = testimonials[activeIndex].quote.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');

            animateWords();
        }

        function animateWords() {
            const words = quoteElement.querySelectorAll('.word');
            words.forEach((word, index) => {
                word.style.opacity = '0';
                word.style.transform = 'translateY(10px)';
                word.style.filter = 'blur(10px)';
                setTimeout(() => {
                    word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                    word.style.filter = 'blur(0)';
                }, index * 20);
            });
        }

        function handleNext() {
            updateTestimonial(1);
        }

        function handlePrev() {
            updateTestimonial(-1);
        }

        prevButton.addEventListener('click', handlePrev);
        nextButton.addEventListener('click', handleNext);

        // Initial setup
        updateTestimonial(0);

        // Autoplay functionality
        const autoplayInterval = setInterval(handleNext, 5000);

        // Stop autoplay on user interaction
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', () => {
                clearInterval(autoplayInterval);
            });
        });
        


        // JS of CONTACT 



          document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset errors
            document.querySelectorAll('.Error').forEach(error => {
                error.style.display = 'none';
            });
            
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('Usname').value.trim();
            if (name === '') {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('mail').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid - show success message
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            }
        });

        // Real-time validation
        document.getElementById('Usname').addEventListener('input', function() {
            if (this.value.trim() !== '') {
                document.getElementById('nameError').style.display = 'none';
            }
        });
        
        document.getElementById('mail').addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.value.trim())) {
                document.getElementById('emailError').style.display = 'none';
            }
        });



        