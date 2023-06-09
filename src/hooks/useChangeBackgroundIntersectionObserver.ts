import { useEffect, useRef } from 'react';

const useChangeBackgroundIntersectionObserver = () => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const el = document.getElementById('last')
                if (entry.isIntersecting) {
                    document.body.style.backgroundColor = 'var(--color-on-primary-container)'
                    if (el) { el.style.visibility = 'hidden' }
                } else {
                    document.body.style.backgroundColor = 'var(--color-background)'
                    if (el) { el.style.visibility = 'visible' }
                }
            });
        });

        const fadeInElements = document.querySelectorAll('.contact');

        fadeInElements.forEach(el => {
            if (observer.current) {
                observer.current.observe(el);
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return null;
};

export default useChangeBackgroundIntersectionObserver;

