import React, { SVGProps } from 'react'

function Avatar(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="386"
            height="400"
            viewBox="0 0 386 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}>
            <path d="M195.082 1.61412C192.274 2.33579 189.292 2.65654 188.502 2.17542C187.713 1.69431 187.011 2.17542 187.011 3.21784C187.011 4.26026 185.87 4.66119 184.379 4.18007C182.976 3.61877 181.747 3.93952 181.747 4.74138C181.747 5.62342 177.624 8.18938 172.624 10.5148C167.624 12.8402 162.448 15.7269 161.132 16.9297C159.816 18.1324 157.535 19.1749 156.132 19.1749C154.728 19.1749 152.711 20.939 151.57 23.1842C150.517 25.3492 148.851 27.1935 147.798 27.1935C146.833 27.1935 146.482 27.5944 147.008 28.0755C147.622 28.5566 145.78 31.283 142.973 34.0093C140.254 36.8158 138.324 39.3818 138.762 39.7025C139.113 40.1034 137.973 43.1505 136.043 46.5985C134.201 49.9663 132.358 54.0558 132.007 55.5793C131.657 57.1831 130.078 61.1122 128.499 64.3196C126.13 69.3713 123.761 77.0692 121.13 88.5358C120.866 90.0594 119.375 93.347 117.972 95.7526C110.603 108.582 104.55 137.048 104.55 159.019V174.736L93.4963 185.802C86.1275 193.018 79.8113 201.598 74.8987 210.82C60.161 238.484 32.1768 302.392 28.8432 315.863C25.3342 330.136 21.2989 341.763 15.3336 355.154C-1.86042 393.403 -2.82539 399.257 7.87703 399.257C13.93 399.257 14.895 398.696 16.7372 394.045C17.8776 391.158 21.0357 384.503 23.7552 379.21C26.5624 373.918 29.2819 366.621 29.8959 363.013C30.5977 359.404 32.6154 354.353 34.4576 351.787C36.2998 349.221 38.5807 346.013 39.4579 344.73C40.3352 343.367 42.616 334.787 44.4582 325.486C46.3882 316.184 50.0726 303.916 52.7044 298.222C55.4238 292.449 60.2487 281.624 63.5822 274.167C66.9158 266.629 71.8283 255.804 74.6355 250.111C77.355 244.337 83.408 231.748 88.1451 222.046C98.2335 201.037 110.603 187.566 119.726 187.566C126.656 187.566 128.06 186.122 124.551 182.514C117.182 175.137 115.778 142.581 122.095 127.426C123.147 124.94 123.586 122.615 123.06 122.134C122.533 121.733 121.393 123.096 120.516 125.181C116.919 133.36 118.849 125.02 123.06 113.714C125.604 107.139 127.884 100.323 128.323 98.5591C130.692 88.1349 133.236 78.8333 134.552 75.6259C135.429 73.6212 136.131 70.7345 136.131 69.211C136.131 65.1215 154.377 31.6037 158.237 28.6368C162.448 25.3492 172.887 22.1418 175.08 23.3445C177.361 24.7077 165.869 31.1226 162.097 30.6415C158.851 30.1604 153.237 36.896 152.36 42.1883C152.096 44.0326 151.131 45.8768 150.342 46.3579C145.517 49.0843 142.184 62.9565 140.429 86.5312C139.903 93.9885 138.411 103.37 137.096 107.38C133.587 117.724 132.534 130.794 134.201 141.86C134.99 147.152 135.867 149.638 136.043 147.473C136.394 143.704 136.481 143.704 138.061 146.671C139.289 149.156 139.464 148.756 138.587 145.067C137.973 142.421 137.359 138.251 137.359 135.846C137.271 133.44 136.745 131.435 136.131 131.435C135.516 131.435 135.341 129.11 135.78 126.223C136.481 121.893 136.832 121.572 137.885 124.219C138.587 125.983 139.99 127.506 141.131 127.586C145.166 127.987 145.342 128.228 143.149 130.634C141.657 132.317 141.569 133.039 142.973 133.039C144.026 133.039 144.903 135.284 144.903 137.93C144.903 140.657 145.605 142.421 146.482 142.02C148.675 140.737 150.693 154.048 148.5 156.052C147.184 157.255 146.658 156.534 146.658 153.807C146.658 151.642 145.868 148.756 144.903 147.473C143.587 145.628 143.236 146.109 143.149 149.557C143.149 153.406 142.622 153.968 139.64 153.086C136.92 152.284 136.043 152.845 135.867 155.411C135.692 157.175 135.516 159.581 135.429 160.703C135.341 161.826 136.306 162.548 137.534 162.307C138.762 162.066 139.64 162.788 139.464 163.911C138.85 167.118 141.569 171.609 143.412 170.566C144.377 170.005 144.903 170.887 144.552 172.41C144.201 174.094 145.254 175.377 147.272 175.618C150.605 176.099 159.465 182.835 158.237 183.877C156.57 185.481 148.324 182.193 149.114 180.188C149.816 178.585 149.026 178.424 145.693 179.547C142.622 180.67 141.394 180.509 141.219 179.146C141.131 178.023 140.341 179.306 139.464 181.953C138.587 184.599 138.236 188.448 138.762 190.452C139.64 193.74 139.376 193.98 136.306 192.457C131.92 190.292 130.341 188.047 132.358 186.924C134.815 185.481 131.744 173.854 127.621 169.043C122.884 163.59 122.358 167.359 126.481 177.943C127.884 181.632 128.674 185.32 128.148 186.122C127.621 186.924 129.902 189.891 133.236 192.778L139.376 197.99L132.446 216.433C122.446 242.814 110.954 279.459 104.462 305.439C101.392 317.788 97.6194 333.103 96.0404 339.438C94.4613 345.853 91.7419 352.508 90.0751 354.272C88.4083 356.117 87.7942 357.56 88.7592 357.56C89.7242 357.56 90.5137 359.003 90.5137 360.768C90.5137 362.532 89.8996 363.975 89.1978 363.975C88.496 363.975 87.7942 365.579 87.6188 367.583C87.4433 371.112 84.6361 385.866 82.5308 394.847C81.5658 398.856 81.9167 399.257 86.7415 399.257C90.8646 399.257 92.1805 398.455 92.7945 395.648L93.5841 392.04L93.7595 395.648C94.1981 401.743 97.1808 399.658 98.3212 392.441C98.9353 388.672 100.251 382.177 101.304 377.927C102.357 373.758 102.707 367.824 102.093 364.857C101.479 361.89 101.655 359.003 102.532 358.522C103.409 358.041 104.111 355.956 104.111 353.952C104.286 339.117 118.849 278.898 127.183 258.61C131.92 247.304 139.025 228.942 142.973 217.796C147.096 206.57 151.833 196.306 153.851 194.702C155.693 193.098 156.921 190.853 156.395 189.65C155.956 188.528 156.22 187.566 157.097 187.566C157.974 187.566 159.904 187.165 161.395 186.603C163.15 185.962 164.378 186.844 165.08 189.41C166.834 195.664 182.537 195.504 184.993 189.25C188.853 179.146 204.731 181.552 218.68 194.301C229.645 204.325 253.506 198.391 258.594 184.519C260.612 178.906 261.752 177.783 264.56 178.505C267.367 179.146 267.893 178.665 267.191 176.259C265.875 171.609 268.683 172.491 273.771 178.344C276.666 181.712 278.771 182.915 279.56 181.792C282.104 178.344 317.984 185.962 326.055 191.735C357.723 214.187 354.39 208.254 362.548 256.445C368.864 293.09 369.127 325.405 363.425 357.56C361.934 365.899 360.706 378.729 360.706 386.026V399.257H369.478C374.303 399.257 378.075 398.696 377.9 398.054C377.11 395.488 380.268 362.371 382.9 344.73C386.936 317.387 385.356 281.143 378.602 244.979C371.847 209.216 370.092 205.607 350.53 188.047C339.652 178.264 334.476 172.33 333.599 168.802C332.897 165.996 330.616 160.222 328.423 155.972C326.23 151.722 321.756 143.062 318.51 136.728C315.264 130.473 311.931 125.582 311.141 126.063C310.352 126.544 310.176 124.62 310.703 121.813C311.317 118.525 311.054 117.082 309.913 117.804C308.861 118.365 308.071 117.724 308.071 116.36C308.071 114.997 306.141 109.785 303.685 104.814C301.316 99.8421 299.737 95.1913 300.264 94.3894C300.79 93.5875 300.527 92.9461 299.562 92.9461C298.07 92.9461 294.386 85.0878 293.333 79.6352C293.158 78.5927 291.14 74.1023 289.035 69.6921C286.842 65.2819 284.561 59.6688 284.034 57.2633C283.508 54.8577 282.455 52.853 281.754 52.853C281.052 52.853 279.385 50.5276 278.069 47.6409C276.753 44.7542 273.069 39.7025 269.735 36.4149C266.489 33.1272 264.384 30.4009 265.174 30.4009C265.875 30.4009 264.296 28.6368 261.489 26.4718C258.77 24.3068 255.699 23.0238 254.647 23.5049C253.682 24.0662 253.331 23.986 253.945 23.3445C255.612 21.5805 248.769 15.8071 244.821 15.4863C242.892 15.4061 241.4 14.8448 241.4 14.2033C241.4 13.0807 224.118 5.62342 221.224 5.62342C220.259 5.54324 218.153 4.50082 216.486 3.29803C212.89 0.491515 202.012 -0.390532 195.082 1.61412ZM219.469 13.8024C236.137 19.4956 248.945 26.3114 254.208 32.3254C257.278 35.6932 261.665 40.5044 263.945 42.9099C270.437 49.7258 277.806 65.6828 282.368 82.8426C287.017 100.163 297.719 124.78 306.755 139.053C313.598 149.798 318.773 161.024 319.651 166.878C319.914 169.123 321.054 172.972 322.019 175.377C327.721 189.089 320.44 184.118 312.194 168.722C309.65 164.071 306.843 160.302 305.878 160.302C304.913 160.302 304.562 158.859 305.088 157.095C306.053 153.647 303.685 152.604 302.193 155.892C301.755 157.015 301.228 156.293 301.228 154.449C300.965 149.156 299.211 145.869 296.491 145.869C295.175 145.869 294.035 144.426 294.035 142.661C294.035 140.897 293.246 139.454 292.368 139.454C291.403 139.454 291.14 138.251 291.754 136.808C292.456 135.124 292.193 134.482 290.965 135.204C289.824 135.846 289.386 135.124 289.912 133.36C290.438 131.676 288.772 128.629 286.052 125.903L281.315 121.252L282.631 126.704C283.333 129.751 284.999 134.482 286.403 137.209C287.807 140.015 289.122 143.784 289.21 145.628C289.386 147.473 290.438 149.317 291.666 149.718C293.947 150.52 301.053 164.151 301.053 167.76C301.053 171.047 298.334 170.406 295.088 166.316L292.193 162.708L293.333 166.557C294.035 169.123 293.772 170.005 292.456 169.203C291.403 168.642 290.526 167.359 290.526 166.477C290.526 162.548 284.736 154.128 281.49 153.326C278.157 152.604 278.157 152.685 280.701 155.331C283.684 158.298 284.473 163.51 282.017 163.51C281.227 163.51 279.648 161.666 278.508 159.42C277.367 157.175 274.209 154.609 271.402 153.727C268.507 152.765 265.788 151.001 265.261 149.718C264.735 148.355 264.91 147.713 265.788 148.194C266.665 148.675 267.805 147.954 268.332 146.671C269.56 143.784 274.122 143.463 275.262 146.27C275.701 147.392 276.578 147.793 277.28 147.232C277.981 146.591 277.718 144.666 276.666 142.902C271.928 134.883 275.525 128.148 280.789 134.964C284.561 139.935 284.298 138.812 278.245 124.459C275.35 117.563 273.332 110.186 273.771 108.021C274.122 105.936 273.771 104.172 272.893 104.172C271.928 104.172 271.227 102.328 271.227 100.002C271.227 97.0355 271.928 96.0733 273.683 96.7148C275.087 97.1959 276.666 96.3941 277.28 94.8705C277.894 93.4272 277.894 92.7055 277.28 93.347C275.701 94.7101 271.227 90.6207 271.227 87.8141C271.314 86.2906 271.753 86.3708 272.981 88.1349C274.297 89.9792 274.648 89.2575 274.736 85.3284C274.736 79.7955 269.911 67.2865 267.805 67.2865C267.104 67.2865 265.086 64.2394 263.419 60.4707C257.454 47.4806 256.313 45.6363 252.19 41.9477C249.91 39.8629 245.523 36.9762 242.541 35.5328C239.47 34.0093 235.259 31.2028 233.066 29.1981C230.873 27.1935 227.978 25.5898 226.487 25.5898C225.083 25.5898 223.855 24.9483 223.855 24.1464C223.855 22.1418 217.013 20.7786 215.872 22.5427C214.469 24.5473 209.293 24.387 203.328 22.1418C200.608 21.0993 197.889 20.2173 197.275 20.1371C196.573 20.0569 195.52 19.4154 194.731 18.7739C192.625 16.7693 187.625 17.4108 185.256 19.9767C184.028 21.2597 181.835 22.3823 180.344 22.3823C176.045 22.3823 184.73 14.7646 191.222 12.9204C203.328 9.39217 207.275 9.55254 219.469 13.8024ZM184.905 30.4811C188.151 32.8065 190.871 33.448 194.38 32.7263C197.889 32.0046 199.556 32.4056 200.345 34.1697C200.871 35.4526 202.538 36.9762 204.029 37.5375C206.398 38.3393 206.398 38.0988 204.556 36.0139C197.012 27.7548 214.469 33.448 224.382 42.509C228.68 46.4381 233.066 49.6456 234.119 49.6456C235.259 49.6456 236.137 50.4474 236.137 51.3295C236.137 53.9756 241.137 57.9849 242.979 56.9425C243.944 56.4614 245.172 57.3434 245.699 59.0273C246.313 60.7113 248.243 63.6781 250.173 65.6828C252.015 67.6073 255.173 74.0221 257.191 79.8757C259.208 85.7293 262.103 94.229 263.682 98.6393C267.191 108.983 265.875 117.804 258.682 131.516C251.927 144.506 250.611 156.534 255.524 160.703C257.454 162.307 258.945 164.632 258.945 165.835C258.945 167.038 259.472 169.203 259.998 170.646C260.787 172.491 260.349 172.892 258.243 172.17C256.138 171.448 255.436 172.17 255.436 175.377C255.436 178.023 254.471 179.547 252.804 179.547C251.313 179.547 250.173 180.99 250.173 182.835C250.173 185.32 249.383 185.962 247.015 185.24C245.26 184.759 242.277 185.401 240.435 186.684C236.312 189.57 233.68 189.891 235.435 187.325C236.312 186.042 235.786 185.721 233.768 186.443C230.698 187.566 229.733 185.24 232.628 183.556C233.593 182.995 234.382 181.071 234.382 179.226C234.382 176.099 234.119 176.099 230.084 180.108C227.715 182.434 224.908 184.358 223.855 184.358C220.434 184.358 214.907 181.071 215.872 179.627C216.399 178.906 213.591 178.424 209.644 178.665C204.468 178.906 202.187 178.264 201.485 176.5C200.871 175.057 199.731 173.533 198.941 173.052C196.748 171.689 195.783 165.354 197.538 164.312C198.415 163.831 198.766 162.467 198.24 161.265C196.748 157.736 202.275 157.095 205.521 160.383C207.188 162.066 209.205 163.029 210.082 162.548C210.872 162.066 211.574 162.387 211.574 163.269C211.574 164.071 210.258 165.194 208.679 165.755C206.047 166.717 206.135 167.118 209.205 169.764C212.627 172.651 223.855 172.731 223.855 169.844C223.855 169.123 226.662 168.321 230.171 168C236.751 167.519 236.663 167.679 246.313 150.119C248.506 146.19 250.436 136.247 248.945 136.247C248.681 136.247 246.488 139.855 244.032 144.265C237.979 155.251 215.083 164.873 215.083 156.453C215.083 151.722 201.047 150.921 197.976 155.491C195.345 159.34 174.379 140.176 172.185 131.916C171.571 129.431 168.676 122.134 165.782 115.719C162.536 108.582 159.553 97.7572 158.062 87.6538C156.746 78.6729 155.079 68.9704 154.465 66.0837C153.676 62.7159 153.939 60.8716 155.255 60.8716C156.307 60.8716 157.184 59.4283 157.184 57.584C157.184 52.6125 161.395 46.3579 169.291 39.3016C173.238 35.7734 176.484 31.6839 176.484 30.0802C176.484 26.3114 179.291 26.3916 184.905 30.4811ZM236.926 41.5468C238.593 43.2307 239.733 45.4759 239.383 46.4381C239.032 47.4004 236.926 46.0372 234.733 43.3109C230.347 37.9384 232.014 36.5752 236.926 41.5468ZM148.5 121.011C149.026 115.639 151.658 127.346 151.57 134.643C151.57 139.454 151.131 142.02 150.781 140.256C150.342 138.492 149.114 135.445 148.061 133.52C147.008 131.596 146.658 128.549 147.096 126.704C147.622 124.94 147.359 123.016 146.482 122.535C145.605 122.054 144.903 120.771 144.903 119.728C144.903 118.606 145.605 118.766 146.658 120.209C147.622 121.492 148.412 121.893 148.5 121.011ZM158.851 137.449C158.851 138.973 157.711 141.619 156.307 143.223C153.851 146.27 154.553 149.397 160.781 162.708C163.15 167.92 162.448 175.137 159.729 173.052C157.711 171.528 152.711 150.6 153.412 146.671C153.588 145.789 154.026 142.902 154.465 140.256C155.342 134.242 155.079 134.643 157.184 134.643C158.149 134.643 158.939 135.926 158.851 137.449ZM180.782 162.548C181.046 164.873 180.519 166.717 179.554 166.717C178.502 166.717 178.677 167.599 179.817 168.882C181.309 170.566 181.133 171.609 179.203 173.052C175.431 175.939 170.431 174.415 169.817 170.326C169.466 168.321 168.501 166.717 167.624 166.717C166.659 166.717 165.957 165.194 165.957 163.349C165.957 160.703 166.746 160.142 169.466 160.783C171.396 161.265 172.975 161.024 172.975 160.302C172.975 159.019 178.414 157.255 179.73 158.057C179.993 158.218 180.519 160.302 180.782 162.548ZM153.676 166.717C153.676 168.882 152.535 169.925 150.167 169.925C146.745 169.925 145.429 166.797 147.798 164.552C150.254 162.387 153.676 163.59 153.676 166.717ZM135.341 231.107C132.885 238.805 129.2 246.101 129.113 243.455C129.113 240.889 136.481 221.003 137.271 221.725C137.71 222.126 136.832 226.376 135.341 231.107ZM97.444 365.178C97.444 365.819 96.3035 369.989 95.0754 374.399L92.7068 382.418L92.005 375.602C91.6541 371.833 91.9173 368.786 92.6191 368.786C93.4086 368.786 94.0227 367.664 94.0227 366.381C94.0227 365.017 94.8122 363.975 95.7772 363.975C96.7422 363.975 97.5317 364.536 97.444 365.178Z" fill="#002117" fillOpacity="0.9" />
            <path d="M219.294 56.2209C213.505 57.7444 209.382 61.1924 208.767 65.0413C208.241 68.0884 208.855 67.928 216.838 63.0367C222.628 59.5887 225.26 59.0274 231.751 59.6689C241.226 60.6311 241.664 59.9094 233.594 56.7822C226.751 54.2162 226.839 54.2162 219.294 56.2209Z" fill="#002117" fillOpacity="0.9" />
            <path d="M177.098 69.1309C171.045 70.6545 162.448 78.7533 162.448 83.0031C162.448 84.7672 164.027 83.8852 167.273 80.2768C173.677 73.3808 187.625 71.1356 189.555 76.7486C191.661 82.6824 199.293 87.7341 199.293 83.1635C199.293 76.1873 184.993 67.2065 177.098 69.1309Z" fill="#002117" fillOpacity="0.9" />
            <path d="M218.591 70.1736C207.977 73.4612 207.187 75.2253 214.468 79.7959C220.521 83.5647 224.995 83.6449 230.785 80.1969C234.996 77.7111 231.838 76.7489 225.785 78.6733C215.784 81.8808 218.153 79.0743 229.206 74.7442C245.786 68.169 237.101 64.4002 218.591 70.1736Z" fill="#002117" fillOpacity="0.9" />
            <path d="M179.116 82.8428C172.712 83.7248 167.711 87.5738 167.711 91.5831C167.711 95.1112 168.413 95.1914 173.501 92.3047C175.607 91.0218 180.782 89.5784 184.905 88.9369C190.608 88.0549 192.362 87.1728 191.923 85.1682C191.309 82.3617 187.625 81.7202 179.116 82.8428Z" fill="#002117" fillOpacity="0.9" />
            <path d="M182.274 91.9039C173.765 94.7104 172.975 96.715 180.783 95.6726C187.625 94.6302 196.135 89.5785 190.433 89.8992C189.029 89.8992 185.345 90.8614 182.274 91.9039Z" fill="#002117" fillOpacity="0.9" />
            <path d="M230.874 99.0405C230.874 104.493 242.716 110.267 249.12 108.021C253.068 106.658 252.805 101.045 248.857 102.007C247.19 102.408 242.453 101.606 238.33 100.323C234.207 98.9603 230.874 98.399 230.874 99.0405Z" fill="#002117" fillOpacity="0.9" />
            <path d="M220.873 102.088C218.855 102.488 216.135 103.771 214.995 105.054C213.855 106.337 211.135 107.38 208.942 107.38C201.485 107.38 194.029 109.384 194.029 111.389C194.029 118.365 206.924 117.483 220.259 109.465C226.399 105.776 230.084 100.484 226.048 101.205C225.347 101.286 222.978 101.687 220.873 102.088Z" fill="#002117" fillOpacity="0.9" />
            <path d="M216.662 118.045C190.344 127.186 190.169 134.803 216.223 140.577C220.434 141.459 223.68 138.171 220.434 136.247C218.942 135.445 220.697 133.761 225.522 131.275C229.82 129.03 234.733 124.54 237.277 120.61L241.575 113.795L234.908 113.955C231.224 113.955 223.066 115.88 216.662 118.045ZM230.873 121.011C230.873 122.294 230.259 123.337 229.557 123.176C228.855 123.016 225.259 124.139 221.574 125.662C214.995 128.308 202.889 131.035 204.556 129.511C206.31 127.827 221.662 120.53 224.908 119.728C230.522 118.445 230.873 118.526 230.873 121.011ZM226.662 128.068C225.346 129.992 214.205 134.643 211.31 134.483C209.995 134.483 212.889 132.638 217.714 130.554C227.627 126.143 227.978 126.063 226.662 128.068Z" fill="#002117" fillOpacity="0.9" />
            <path d="M180.695 125.983C181.309 127.346 181.748 129.511 181.748 130.794C181.748 133.36 183.327 133.601 186.748 131.596C188.678 130.473 188.678 129.671 186.748 126.865C184.029 122.856 179.028 122.134 180.695 125.983Z" fill="#002117" fillOpacity="0.9" />
            <path d="M125.604 153.326C125.604 160.784 127.621 168.401 129.288 167.439C131.306 166.317 129.814 152.284 127.446 150.119C126.13 148.916 125.604 149.959 125.604 153.326Z" fill="#002117" fillOpacity="0.9" />
            <path d="M168.501 217.635C170.431 236.399 170.782 237.361 175.87 235.597C178.238 234.795 187.976 234.074 197.538 234.074C213.416 234.074 218.592 233.031 215.609 230.305C214.995 229.744 213.504 230.064 212.363 230.946C210.784 232.149 207.187 231.909 200.345 230.305C192.011 228.3 185.958 229.102 192.713 231.347C193.941 231.668 190.783 231.989 185.783 231.909C175.168 231.828 172.448 228.541 172.448 215.631C172.448 210.9 171.659 208.254 169.904 207.692C167.799 206.891 167.536 208.494 168.501 217.635Z" fill="#002117" fillOpacity="0.9" />
            <path d="M258.419 216.834C254.998 223.329 254.822 224.451 257.015 224.451C259.033 224.451 262.981 215.551 262.103 213.065C261.665 211.942 260.086 213.626 258.419 216.834Z" fill="#002117" fillOpacity="0.9" />
            <path d="M252.191 229.423C249.91 231.107 245.524 232.47 242.541 232.47C239.032 232.55 237.804 232.951 239.295 233.833C240.523 234.555 243.243 235.036 245.436 234.876C247.541 234.715 249.822 235.277 250.436 236.159C251.05 237.041 252.892 235.437 254.471 232.55C258.156 226.216 257.542 225.414 252.191 229.423Z" fill="#002117" fillOpacity="0.9" />
            <path d="M343.688 244.498C339.74 258.931 335.178 280.742 333.336 293.732C332.02 302.793 326.494 333.985 323.072 351.145C321.581 358.602 320.265 365.498 320.177 366.381C320.002 367.263 319.3 365.819 318.598 363.173C317.458 359.324 317.195 360.046 317.37 367.182C317.458 371.994 316.317 381.215 314.826 387.63C312.282 398.615 312.282 399.257 315.265 399.257C318.686 399.257 324.388 383.941 329.915 359.966C331.582 352.909 334.038 342.405 335.354 336.712C336.757 330.938 337.898 319.792 337.986 311.854C337.986 303.916 338.687 294.534 339.652 291.006C340.53 287.477 342.109 278.817 343.161 271.761C344.214 264.705 345.881 255.323 346.846 250.913C350.793 233.993 347.986 228.46 343.688 244.498Z" fill="#002117" fillOpacity="0.9" />
            <path d="M292.982 243.054C292.193 245.781 291.315 246.502 290.526 245.3C288.771 242.734 282.718 257.167 284.122 260.455C284.648 261.818 284.297 262.94 283.245 262.94C282.016 262.94 281.578 265.747 282.104 270.879C282.631 275.209 282.367 279.699 281.578 280.822C280.788 282.025 281.051 283.388 282.28 284.11C283.771 284.992 283.508 285.312 281.49 285.393C277.455 285.393 273.946 293.812 272.191 307.845C271.84 310.892 271.314 313.778 271.051 314.26C270.875 314.661 270.525 315.783 270.349 316.665C270.174 317.547 269.56 319.311 268.945 320.674C266.401 326.608 264.472 335.749 265.436 337.273C266.051 338.155 267.63 336.07 268.858 332.622L271.139 326.287L270.174 333.504C268.331 347.537 267.98 348.82 265.612 353.872C264.296 356.678 260.085 362.05 256.313 365.819C251.225 370.791 249.295 374.159 249.032 378.328C248.857 381.456 248.681 385.304 248.593 386.828C248.506 388.352 247.365 389.635 245.962 389.635C243.944 389.635 241.488 394.045 241.4 398.054C241.4 398.696 245.435 399.257 250.26 399.257C255.787 399.257 258.769 398.615 258.068 397.653C257.454 396.771 257.804 396.049 258.857 396.049C259.822 396.049 260.699 394.446 260.699 392.441C260.787 390.436 263.419 382.739 266.752 375.281C270.086 367.824 272.367 361.168 271.928 360.447C271.402 359.725 272.191 359.164 273.683 359.164C275.876 359.164 275.963 358.282 274.472 354.272C272.981 350.343 273.332 347.697 276.227 340.24C282.104 325.806 286.754 303.595 288.069 284.511C288.684 274.888 289.824 266.228 290.526 265.346C294.649 260.214 299.21 244.899 297.456 242.012C295.087 237.922 294.298 238.083 292.982 243.054Z" fill="#002117" fillOpacity="0.9" />
            <path d="M198.415 259.012C193.59 260.054 191.397 261.016 193.59 261.177C195.784 261.257 197.538 262.059 197.538 262.941C197.538 265.507 202.1 264.785 206.398 261.578C211.837 257.568 208.942 256.606 198.415 259.012Z" fill="#002117" fillOpacity="0.9" />
            <path d="M176.835 270.157C176.66 273.204 177.361 275.77 178.326 275.77C179.204 275.77 179.993 273.204 179.993 270.157C179.993 267.03 179.291 264.544 178.502 264.544C177.712 264.544 176.923 267.03 176.835 270.157Z" fill="#002117" fillOpacity="0.9" />
            <path d="M174.729 287.077C173.15 287.959 172.975 288.601 174.203 288.601C175.519 288.601 176.133 291.327 175.957 296.619C175.519 307.124 177.449 306.963 179.028 296.379C180.256 287.558 178.94 284.591 174.729 287.077Z" fill="#002117" fillOpacity="0.9" />
            <path d="M158.939 291.728C158.939 293.411 159.728 295.256 160.693 295.817C161.746 296.378 162.448 296.298 162.273 295.496C161.658 292.209 162.711 290.364 165.518 289.723C167.448 289.242 166.746 288.921 163.764 288.761C160.079 288.68 158.939 289.322 158.939 291.728Z" fill="#002117" fillOpacity="0.9" />
            <path d="M237.979 295.737C234.382 299.666 237.365 310.892 242.277 312.015C247.629 313.218 253.682 310.171 253.682 306.081C253.682 296.459 243.418 289.723 237.979 295.737Z" fill="#002117" fillOpacity="0.9" />
            <path d="M78.2324 299.586C78.2324 300.308 79.7237 302.152 81.566 303.675C85.3381 306.803 88.4085 303.355 84.7241 299.987C82.4432 297.902 78.2324 297.661 78.2324 299.586Z" fill="#002117" fillOpacity="0.9" />
            <path d="M174.904 328.774C173.764 340.641 171.571 361.008 170.079 374.079C167.623 395.649 167.711 401.422 170.43 398.936C170.869 398.455 173.062 387.55 175.08 374.72C177.536 359.405 179.641 350.985 181.221 350.424C182.449 350.023 191.748 348.74 201.836 347.617L220.083 345.693L221.223 340.24C222.714 332.863 223.328 332.863 202.713 339.198C192.625 342.325 182.887 345.292 181.045 345.853C177.975 346.735 177.799 346.254 178.94 339.839C180.256 332.222 182.624 328.693 186.396 328.693C187.712 328.693 193.327 327.25 198.853 325.486C204.292 323.722 212.187 322.278 216.223 322.278C225.258 322.278 227.276 319.953 222.1 315.463C217.714 311.774 201.485 310.732 187.449 313.217C180.606 314.42 179.905 314.26 178.501 310.812C177.448 308.166 176.396 313.298 174.904 328.774Z" fill="#002117" fillOpacity="0.9" />
            <path d="M248.681 333.344C246.664 334.467 246.664 334.868 248.681 335.589C250.173 336.151 249.822 336.552 247.541 336.712C244.383 336.872 244.471 337.113 248.243 338.476C250.524 339.278 252.892 339.599 253.331 339.117C253.857 338.717 253.155 338.235 251.752 338.235C250.348 338.155 250.699 337.514 252.805 336.712C256.314 335.349 256.314 335.349 252.805 335.108C249.296 334.868 249.296 334.868 252.805 333.504C255.085 332.622 255.436 332.061 253.682 332.061C252.278 331.981 249.997 332.542 248.681 333.344Z" fill="#002117" fillOpacity="0.9" />
            <path d="M80.8643 341.443C79.9871 342.726 80.6011 344.089 82.2679 344.971C83.8469 345.773 84.6365 347.457 84.1101 348.82C83.5838 350.103 83.9347 351.146 84.8996 351.146C88.2332 351.146 88.5841 346.495 85.426 342.967C83.0574 340.24 82.0047 339.919 80.8643 341.443Z" fill="#002117" fillOpacity="0.9" />
            <path d="M118.323 353.311C117.533 359.004 120.603 362.372 126.481 362.372C128.849 362.372 129.464 363.334 128.937 366.782C128.849 367.423 127.884 367.824 126.744 367.584C125.604 367.343 126.569 368.546 128.762 370.31C133.85 374.239 131.832 378.569 119.375 390.597L111.217 398.455L121.305 398.936C133.499 399.498 133.762 399.177 134.201 384.423C134.376 378.168 134.902 372.475 135.341 371.834C136.657 369.909 131.657 362.291 124.288 354.994C122.182 352.829 120.428 350.664 120.516 350.183C120.603 349.702 120.252 348.9 119.814 348.499C119.375 348.098 118.673 350.263 118.323 353.311Z" fill="#002117" fillOpacity="0.9" />
            <path d="M44.897 355.876C44.897 356.678 45.7742 357.881 46.8269 358.442C47.8796 359.004 48.3182 360.848 47.8796 362.532C47.2655 364.456 47.8796 365.579 49.4587 365.579C50.7745 365.579 51.915 366.381 51.915 367.263C51.915 369.588 57.0907 374.239 58.3189 373.116C59.7225 371.833 50.1605 356.277 47.2655 355.315C45.9497 354.834 44.897 355.074 44.897 355.876Z" fill="#002117" fillOpacity="0.9" />
            <path d="M201.486 361.329C194.906 363.494 194.643 366.621 201.047 365.9C207.714 365.258 215.171 362.211 214.118 360.607C212.802 358.763 208.504 359.004 201.486 361.329Z" fill="#002117" fillOpacity="0.9" />
            <path d="M226.575 366.14C224.118 367.824 223.592 369.508 224.469 373.758C225.697 379.531 231.575 384.503 233.593 381.456C234.207 380.574 235.873 380.173 237.189 380.654C238.505 381.135 239.47 380.975 239.295 380.333C239.207 379.692 239.646 377.206 240.435 374.72C242.716 367.263 233.505 361.489 226.575 366.14Z" fill="#002117" fillOpacity="0.9" />
            <path d="M293.685 371.593C289.299 376.164 287.983 381.616 291.404 381.616C292.983 381.616 293.86 381.055 293.334 380.333C292.895 379.612 293.597 376.965 295.001 374.48C298.071 369.027 297.457 367.664 293.685 371.593Z" fill="#002117" fillOpacity="0.9" />
            <path d="M345.53 379.21C345.267 383.22 336.494 396.049 334.038 396.049C333.161 396.049 332.897 396.771 333.511 397.653C334.125 398.535 337.284 399.257 340.529 399.257C347.109 399.257 350.179 393.724 350.179 381.456C350.179 375.201 345.968 373.196 345.53 379.21Z" fill="#002117" fillOpacity="0.9" />
            <path d="M59.8981 390.757C54.4592 393.403 50.1606 396.771 50.1606 398.375C50.1606 398.856 54.1083 399.257 58.9331 399.257H67.7056V393.644C67.7056 387.309 67.1792 387.149 59.8981 390.757Z" fill="#002117" fillOpacity="0.9" />
            <path d="M279.122 395.087C274.823 397.894 276.402 399.658 282.543 399.016C286.666 398.535 286.929 398.134 284.912 395.568C282.806 393.083 282.192 393.003 279.122 395.087Z" fill="#002117" fillOpacity="0.9" />
        </svg>

    )
}

export default Avatar