document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreInfoSection = document.getElementById('more-info');

    if (learnMoreBtn && moreInfoSection) {
        console.log("Elements found, attaching 'Learn More' event listener.");
        learnMoreBtn.addEventListener('click', () => {
            console.log("'Learn More' button clicked!");
            moreInfoSection.classList.toggle('is-visible');
            const isVisible = moreInfoSection.classList.contains('is-visible');
            learnMoreBtn.textContent = isVisible ? 'Show Less' : 'Learn More';
        });
    } else {
        console.error("Could not find '#learnMoreBtn' or '#more-info' elements on the page.");
    }

    // Modal functionality for 'Get in Touch'
    const contactBtn = document.querySelector('.contact-btn');
    const modal = document.getElementById('contactModal');
    
    if (contactBtn && modal) {
        const closeBtn = modal.querySelector('.close-btn');

        // When the user clicks the button, open the modal
        contactBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        // When the user clicks on <span> (x), close the modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});