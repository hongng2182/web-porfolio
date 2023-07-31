import { WebContent } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const webContent: WebContent = {
    hero: {
        title: "Hi, I'm Hong Nguyen",
        subtitle: 'A Vietnam-based front end developer'
    },
    about: {
        title: '01. About me',
        details: [""]
    },
    projects: {
        title: 'Projects',
        details: [{
            title: "Sleeklingo",
            projectImg: "sleeklingo.png",
            alt: 'sleeklingo',
            description: "An AI-Powered English learning website to help users prepare for the IELTS exam. With 15,000 users and 600 daily active users since first launch in April, 2023, I played a key role in implementing features such as authentication, AI conversation, speaking/writing enhancement, and creating a user-friendly dashboard.",
            techStack: ["NextJS", "React", "FluentUI", "ReactQuery", "Typescript", "Firebase"],
            githubLink: null,
            demoLink: "https://sleeklingo.com"
        }, {
            title: "Mini Reddit",
            projectImg: "reddit-clone.png",
            alt: 'reddit-clone',
            description: "A small-scale version of Reddit clone. I created this web app with the intention of learning and exploring new technologies. This project allowed me to dive into the world of web development while honing my skills in both front-end and back-end technologies. Through creating this Reddit-inspired platform, I gained valuable experience in building user interfaces, implementing authentication systems, and handling data interactions.",
            techStack: ["Node-Express", "PostgreSQL", "Redis", "NextJS", "React", "TailwindCSS", "Apollo-GraphQL", "Typescript"],
            githubLink: "https://github.com/hongng2182/reddit-clone",
            demoLink: "https://mini-reddit-eight.vercel.app/"
        },
        {
            title: "Quiz App",
            projectImg: "quiz-app.gif",
            alt: 'quiz-app',
            description: "A mini quiz application of 5 questions designed to evaluate one's general knowledge across various topics, using Open Trivia Database API.",
            techStack: ["React", "CSS", "Javascript"],
            githubLink: "https://github.com/hongng2182/Quizz-App",
            demoLink: "https://simple-quizz-app-rouge.vercel.app"
        },
        {
            title: "Tenzies Game",
            projectImg: "tenzies-game.gif",
            alt: 'tenzies-game',
            description: "A small dice game created when I first learning React. It based on an online tutorial but I added some additional features.",
            techStack: ["Javascript", "React", "CSS"],
            githubLink: "https://github.com/hongng2182/Tenzies-game",
            demoLink: "tenzies-game-snowy.vercel.app",
            media: { height: 320 }
        }]
    },
    courses: {
        title: "Courses I've learnt",
        details: [{
            title: "CS50's Introduction to Computer Science",
            courseImg: "CS50x.png",
            alt: 'cs50',
            description: "This is so far my most favorite course - it offered engaging lessons on programming, algorithms, data structures, and help me build a strong foundation in computer science. Each of the problem sets was so well- designed and provides thorough explanation on what should be done to complete. I couldn't help but feel excited to tackle each challenge, finding joy in solving every problem presented.",
            url: 'https://certificates.cs50.io/616ca3ac-e480-45d2-8690-6f9514334ac6.pdf?size=letter'
        }, {
            title: "FreeCodeCamp: Responsive Web Design",
            courseImg: "responsive-web-design.png",
            alt: 'responsive-web-design',
            description: "This course has been a game-changer for me as a budding front-end developer. It provided me with a solid foundation in HTML and CSS, empowering me to create responsive and visually appealing web pages. The course offered a wealth of new concepts to explore, making the learning journey exciting and inspiring. From mastering the layout design to understanding media queries and flexbox, I now feel confident in crafting captivating and user-friendly websites.",
            url: 'https://www.freecodecamp.org/certification/hongnguyen/responsive-web-design'
        }, {
            title: "FreeCodeCamp: JavaScript Algorithms and Data Structures",
            courseImg: "js-algorithms.png",
            alt: 'js-algorithms',
            description: "This course has taught me invaluable features of a programming language and honed my ability to think logically. Working on the problems helped train my mind to approach problem-solving with a strategic mindset.",
            url: 'https://www.freecodecamp.org/certification/hongnguyen/javascript-algorithms-and-data-structures'
        }]
    }, contact: {
        title: 'Contact',
        details: {
            intro: "I'm currently looking for a job as a front end developer both onsite or remote. Please feel free to contact me if you're interested!",
            links: [{
                socialImg: 'github-icon.svg',
                alt: 'github-icon',
                href: 'https://github.com/hongng2182'
            }, {
                socialImg: 'linkedin-icon.svg',
                alt: 'linkedin-icon',
                href: 'https://www.linkedin.com/in/hong-nguyen2182/'
            }, {
                socialImg: 'email-icon.svg',
                alt: 'email-icon',
                href: 'mailto:nguyenhuynhthuhong@gmail.com'
            }]
        }
    },
    footer: 'Design and built by Hong Nguyen, 2023'
}

