var typed = new Typed(".text", {
    strings: ["Data Science Learner", "Data Enthusiasts", "Machine Learning Learner", "Web Devloper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY === 0) { 
        navbar.style.display = 'block'; 
    } else {
        navbar.style.display = 'none'; 
    }
});

window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    if (window.scrollY === 0) { 
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none'; 
    }
});

function downloadResume() {
    
    var resumeUrl = 'Super.pdf';
    
   
    var downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'Super.pdf'; 
    downloadLink.target = '_blank'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink); 
}


$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault();
        var formData = $(this).serialize(); 
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function (response) {
                $('#responseMessage').html(response); 
            },
            error: function () {
                $('#responseMessage').html('Oops! Something went wrong.'); 
            }
        });
    });
});


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


function redirectToAccessPage() {
    // Redirect to the "request access" page
    window.location.href = "request_access_page.html";
}




 