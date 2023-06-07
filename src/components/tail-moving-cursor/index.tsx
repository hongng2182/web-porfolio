/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react'
import './index.css'

const colors = [
    "#d9ed92",
    "#b5e48c",
    "#99d98c",
    "#76c893",
    "#52b69a",
    "#34a0a4",
    "#168aad",
    "#1a759f",
    "#1e6091",
    "#184e77"
];

interface CustomHTMLDivElement extends HTMLDivElement {
    x: number;
    y: number;
}

function TailMovingCursor() {
    const circlesRef = useRef<CustomHTMLDivElement[]>([]);

    useEffect(() => {
        const circles = circlesRef.current;

        circles.forEach((circle) => {
            circle.x = 0
            circle.y = 0
        })

        const handleMouseMove = (e: MouseEvent) => {
            let x = e.clientX;
            let y = e.clientY;

            circles.forEach((circle, index) => {
                const left = x - 12 + window.scrollX
                const top = y - 12 + window.scrollY
                circle.style.left = `${left}px`;
                circle.style.top = `${top}px`;

                circle.x = x
                circle.y = y

                circle.style.scale = `${(circles.length - index) / circles.length}`;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.2;
                y += (nextCircle.y - y) * 0.2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={color}
                    className="circle"
                    ref={(el) => { circlesRef.current[index] = el as CustomHTMLDivElement }}
                    style={{ backgroundColor: color }}
                />
            ))}
        </>
    );
}

export default TailMovingCursor;
