document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const cards = document.querySelectorAll('.food-card');
    
    let currentIndex = 0;
    const totalCards = cards.length;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 32; // card width + gap
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Update active card
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex + 1) {
                card.classList.add('active');
            }
        });

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalCards - 3;
    }

    function handleResize() {
        updateCarousel();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - 3) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize
    window.addEventListener('resize', handleResize);
    cards[1].classList.add('active');
    updateCarousel();

    // Video Player
    const video = document.getElementById('promo-video');
    const playBtn = document.getElementById('playBtn');

    // Function to toggle video play/pause
    function toggleVideo() {
        if (video.paused) {
            video.play();
            playBtn.style.display = 'none';
        } else {
            video.pause();
            playBtn.style.display = 'flex';
        }
    }

    // Click on video to toggle play/pause
    video.addEventListener('click', toggleVideo);

    // Click on play button to start video
    playBtn.addEventListener('click', toggleVideo);

    // Show play button when video is paused
    video.addEventListener('pause', () => {
        playBtn.style.display = 'flex';
    });

    // Hide play button when video is playing
    video.addEventListener('play', () => {
        playBtn.style.display = 'none';
    });

    // Modal Functionality
    const cartModal = document.getElementById('cartModal');
    const requestDishModal = document.getElementById('requestDishModal');
    const requestDishBtn = document.getElementById('requestDishBtn');
    const addButtons = document.querySelectorAll('.add-btn');
    const addBag = document.querySelectorAll('.cart-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const cancelBtns = document.querySelectorAll('.cancel-btn');
    const backToMenuBtn = document.querySelector('.back-to-menu');

    function openCartModal() {
        cartModal.style.display = 'block';
        document.body.classList.add('no-scroll');
    }

    function closeCartModal() {
        cartModal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    function openRequestDishModal() {
        requestDishModal.style.display = 'block';
        document.body.classList.add('no-scroll');
    }

    function closeRequestDishModal() {
        requestDishModal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    // Open cart modal when add button is clicked
    addButtons.forEach(btn => {
        btn.addEventListener('click', () => openCartModal());
    });

    addBag.forEach(btn => {
        btn.addEventListener('click', () => openCartModal());
    });

    // Open request dish modal
    requestDishBtn.addEventListener('click', () => openRequestDishModal());

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeCartModal();
        });
    });

    cancelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeRequestDishModal();
        });
    });

    backToMenuBtn.addEventListener('click', () => closeCartModal());

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeCartModal();
        }
    });

    // Add contact form handling
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically handle the form submission
        // For now, let's just show a success message
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
