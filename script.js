function openLightbox(imageElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = imageElement.src; // ใช้รูปที่กด
    lightbox.style.display = "flex"; // แสดง Lightbox
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // ซ่อน Lightbox
}


let currentSlide = 0;

        function showSlide(index, sliderId) {
            const slides = document.querySelectorAll(`#${sliderId} .timeline-slide`);
            
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
        
            slides.forEach((slide, i) => {
                slide.style.display = (i === currentSlide) ? 'block' : 'none';
            });
        }
        
        function changeSlide(direction, sliderId) {
            const currentIndex = currentSlide + direction;
            showSlide(currentIndex, sliderId);
        }
        
        // เริ่มต้นการแสดงผล
        showSlide(currentSlide, 'slider1'); 
        showSlide(currentSlide, 'slider2');
        showSlide(currentSlide, 'slider3');
        showSlide(currentSlide, 'slider4');
        showSlide(currentSlide, 'slider5');
        showSlide(currentSlide, 'slider6');
        showSlide(currentSlide, 'slider7');
        showSlide(currentSlide, 'slider8');
        showSlide(currentSlide, 'slider9');
        showSlide(currentSlide, 'slider10');
        showSlide(currentSlide, 'slider11');
        showSlide(currentSlide, 'slider12');

 
        // Navigation
        function showSection(sectionId, linkElement) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            linkElement.classList.add('active');
        }

        // Surprise button
        function toggleSurprise() {
            const surprise = document.getElementById('surprise');
            if (surprise.style.display === 'block') {
                surprise.style.display = 'none';
            } else {
                surprise.style.display = 'block';
            }
        }


        
        setInterval(updateCountdown, 1000);