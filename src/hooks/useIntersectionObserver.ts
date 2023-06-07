import { useEffect, useRef } from 'react'

type Props = {
    targetClasses: string[],
    options?: IntersectionObserverInit,
}

const useIntersectionObserver = (props: Props) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const { options, targetClasses } = props

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                } else {
                    entry.target.classList.remove('appear');
                }
            });
        }, options);

        targetClasses.forEach(targetClass => {
            const targetElements = document.querySelectorAll(`.${targetClass}`);

            targetElements.forEach(el => {
                if (observer.current) {
                    observer.current.observe(el);
                }
            });
        })

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [targetClasses, options]);
    
    return null;

}

export default useIntersectionObserver


