// Typed.js animation
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for the page to fully load
    setTimeout(function() {
        var typed = new Typed(".text", {
            strings: ["Full-Stack Developer", "AI Automation Expert", "Enterprise System Developer", "Data Science Professional"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }, 500);
});

// Navbar scroll behavior
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.logo');
    
    if (window.scrollY === 0) { 
        navbar.style.display = 'block'; 
        logo.style.display = 'block';
    } else {
        navbar.style.display = 'none'; 
        logo.style.display = 'none';
    }
});

// Resume download function
function downloadResume() {
    var resumeUrl = 'Super.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'Sanjay_Thakor_Resume.pdf'; 
    downloadLink.target = '_blank'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink); 
}

// Redirect to access page function
function redirectToAccessPage() {
    window.location.href = "request_access_page.html";
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Contact Form with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (you need to replace with your own keys)
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const subject = this.querySelector('input[name="subject"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading message
            showMessage('Sending message...', 'loading');
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'sanjaythakor79844@gmail.com' // Your email
            };
            
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showMessage('Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showMessage('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
                });
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showMessage(message, type) {
        responseMessage.textContent = message;
        responseMessage.className = type;
        responseMessage.style.display = 'block';
        
        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 5000);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.navbar a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modern Skills Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.Skills');
    
    if (skillsSection) {
        const sectionTop = skillsSection.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > sectionTop - windowHeight + 200) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    bar.style.width = width + '%';
                }
            });
        }
    }
}

// Add scroll event listener for skill bars
window.addEventListener('scroll', animateSkillBars);

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project, .experience');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});