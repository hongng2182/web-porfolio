import React, { SVGProps } from 'react'

function LinkIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
            stroke="#F3F3F3"
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}>
            <path d="M16.5 11.9167V17.4167C16.5 17.9029 16.3068 18.3692 15.963 18.713C15.6192 19.0568 15.1529 19.25 14.6667 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V7.33333C2.75 6.8471 2.94315 6.38079 3.28697 6.03697C3.63079 5.69315 4.0971 5.5 4.58333 5.5H10.0833" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.75 2.75H19.25V8.25" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.1665 12.8333L19.2498 2.75" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default LinkIcon