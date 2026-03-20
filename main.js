// Initialize Lucide Icons
lucide.createIcons();

// Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other accordions
            accordions.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                otherItem.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Carousel duplicate for infinity scroll (optional enhancement)
    // Left as native CSS scroll-snap for smoother performance on mobile
});
