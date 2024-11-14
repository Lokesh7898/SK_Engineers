import { useEffect } from 'react';

function ScrollEffect() {
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class when section is in view
                } else {
                    entry.target.classList.remove('visible'); // Remove visible class when section is out of view
                }
            });
        }, { threshold: 0 }); // Trigger when 50% of the section is in view

        sections.forEach((section) => observer.observe(section)); // Observe each section

        return () => {
            sections.forEach((section) => observer.unobserve(section)); // Cleanup observer
        };
    }, []);

    return null; // No UI, just managing scroll behavior
}

export default ScrollEffect;
