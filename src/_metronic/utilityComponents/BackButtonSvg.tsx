// src/components/SideBar/components/BackButtonSvg/BackButtonSvg.tsx
import React from 'react';

// Define the types for props
interface BackButtonSvgProps {
    pageNumber: number;
    setCurrentPage: (page: number) => void;
}

const BackButtonSvg: React.FC<BackButtonSvgProps> = ({ pageNumber, setCurrentPage }) => {
    const moveToPreviousPage = () => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="backBtnSvgContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="backBtnSVG"
                onClick={moveToPreviousPage}
                style={backBtnSvgStyle}
            >
                <g clipPath="url(#clip0_3895_17549)">
                    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_3895_17549">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

const backBtnSvgStyle: React.CSSProperties = {
    cursor: 'pointer'
};

export { BackButtonSvg };
