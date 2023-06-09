import { WebContent } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const webContent: WebContent = {
    hero: {
        title: "Hi, i'm Hong Nguyen",
        subtitle: 'A software developer from Vietnam'
    },
    about: {
        title: '01. About me',
        details: ["I've started my learning journey to become a software engineer since September 2022. I graduated university majored in English Language in Ho Chi Minh City, Vietnam and worked as a sales consultant for 2 years, but then I realised it's not the job that I want to pursue for my long-term career.", "I've always liked working with computers since I was a student, and I love the idea of building something of my own, that can help myself and other people."]
    },
    projects: {
        title: '02. Projects',
        details: [{
            title: "Sleeklingo",
            projectImg: "sleeklingo.png",
            alt: 'sleeklingo',
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic facere aut dolor error, cum necessitatibus excepturi, assumenda similique esse repudiandae quisquam quos aspernatur eveniet? Veritatis, sit. Non, iusto est.",
            techStack: ["NextJS", "React", "TailwindCSS", "GriffelCSS", "ReactQuery", "Typescript", "Firebase"],
            githubLink: null,
            demoLink: "https://sleeklingo.com"
        }, {
            title: "Reddit Clone",
            projectImg: "reddit-clone.png",
            alt: 'reddit-clone',
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic facere aut dolor error, cum necessitatibus excepturi, assumenda similique esse repudiandae quisquam quos aspernatur eveniet? Veritatis, sit. Non, iusto est.",
            techStack: ["Node-Express", "PostgresSQL", "Redis", "NextJS", "TailwindCSS", "Apollo-GraphQL", "Typescript"],
            githubLink: "https://github.com/hongng2182/reddit-clone",
            demoLink: "https://mini-reddit-by-hn.onrender.com/"
        }, {
            title: "My Personal Website",
            projectImg: "personal-web.png",
            alt: 'personal-web',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic facere aut dolor error, cum necessitatibus excepturi, assumenda similique esse repudiandae quisquam quos aspernatur eveniet? Veritatis, sit. Non, iusto est.",
            techStack: ["Vite", "React", "CSS", "Typescript", "GSAP"],
            githubLink: "https://github.com/hongng2182/web-porfolio",
            demoLink: "https://hongnguyen.onrender.com/"
        },
        {
            title: "Quiz App",
            projectImg: "quiz-app.gif",
            alt: 'quiz-app',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic facere aut dolor error, cum necessitatibus excepturi, assumenda similique esse repudiandae quisquam quos aspernatur eveniet? Veritatis, sit. Non, iusto est.",
            techStack: ["React", "CSS"],
            githubLink: "https://github.com/hongng2182/Quizz-App",
            demoLink: "https://simple-quiz-app-qm86.onrender.com"
        }]
    },
    courses: {
        title: "03. Courses I've learnt",
        details: [{
            title: "CS50's Introduction to Computer Science",
            courseImg: "CS50x.png",
            alt: 'cs50',
            description: "This is so far my most favorite course on computer science. I'm so grateful that I took it.Each of the problem sets was so well- designed and provides thorough explanation on what should be done to complete it.I found myself always excited to solve any problems that was given. Overall, it was both a fun and exiting learning experience."
        }, {
            title: "FreeCodeCamp: Responsive Web Design",
            courseImg: "responsive-web-design.png",
            alt: 'responsive-web-design',
            description: "I gained basic understanding of HTML and CSS thanks to this course. So many new things to learn but it's exciting too!"
        }, {
            title: "FreeCodeCamp: JavaScript Algorithms and Data Structures",
            courseImg: "js-algorithms.png",
            alt: 'js-algorithms',
            description: "This course has taught me features of a programming language and how algorithms work. Working on the problems helps to trainmy mind to think more logicly.I'm glad to finish this course!"
        }]
    }, contact: {
        title: '04. Contact',
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

