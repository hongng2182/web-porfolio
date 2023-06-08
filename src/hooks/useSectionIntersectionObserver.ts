import { useEffect, useRef } from 'react';

const useSectionIntersectionObserver = () => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const elem = document.querySelector<HTMLLIElement>(`.nav-${entry.target.id}`);
                if (elem) {
                    if (entry.isIntersecting) {
                        elem.style.textShadow = '5px 5px 15px #00FF93';
                    } else {
                        elem.style.textShadow = 'none';
                    }
                }
            });
        }, { threshold: 0.13 });

        const targetSections = document.querySelectorAll<HTMLElement>('section');

        targetSections.forEach(targetSection => {
            if (observer.current) {
                observer.current.observe(targetSection);
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

export default useSectionIntersectionObserver;

