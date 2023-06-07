import React, { SVGProps } from 'react'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20"
            fill="none"
            stroke="#F3F3F3"
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}>
            <path d="M7.49984 15.8334C3.33317 17.0834 3.33317 13.75 1.6665 13.3334M13.3332 18.3334V15.1084C13.3644 14.711 13.3107 14.3115 13.1757 13.9365C13.0406 13.5615 12.8273 13.2195 12.5498 12.9334C15.1665 12.6417 17.9165 11.65 17.9165 7.10003C17.9163 5.93655 17.4687 4.8177 16.6665 3.97503C17.0464 2.95712 17.0195 1.83199 16.5915 0.833363C16.5915 0.833363 15.6082 0.541696 13.3332 2.0667C11.4232 1.54905 9.40983 1.54905 7.49984 2.0667C5.22484 0.541696 4.2415 0.833363 4.2415 0.833363C3.81348 1.83199 3.78662 2.95712 4.1665 3.97503C3.35828 4.82395 2.91027 5.95292 2.9165 7.12503C2.9165 11.6417 5.6665 12.6334 8.28317 12.9584C8.009 13.2417 7.79756 13.5795 7.66259 13.95C7.52763 14.3204 7.47218 14.7151 7.49984 15.1084V18.3334" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default GithubIcon