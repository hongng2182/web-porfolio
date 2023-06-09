export type Project = {
    title: string,
    projectImg: string,
    alt: string,
    description: string,
    techStack: string[],
    githubLink: string | null,
    demoLink: string
}

type Course = {
    title: string,
    courseImg: string,
    alt: string,
    description: string,
}

type Contact = {
    intro: string,
    links: { socialImg: string, alt: string, href: string }[]
}

export type WebContent = {
    hero: { title: string, subtitle: string },
    about: {
        title: string,
        details: string[]
    },
    projects: {
        title: string,
        details: Project[]
    },
    courses: {
        title: string,
        details: Course[]
    },
    contact: {
        title: string,
        details: Contact
    },
    footer: string
}