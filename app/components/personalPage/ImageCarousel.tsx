"use client";
import React from "react";

export interface CarouselImage {
    src: string;
    alt: string;
}

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    images: CarouselImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
    images,
    className = "",
    ...props
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(
        Math.floor(images.length / 2),
    );

    const handleNext = React.useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
        );
    };

    return (
        <div
            className={`relative w-full h-107.5 lg:h-135 flex items-center justify-center overflow-hidden ${className}`}
            {...props}
        >
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                {images.map((image, index) => {
                    const offset = index - currentIndex;
                    const total = images.length;
                    let pos = (offset + total) % total;
                    if (pos > Math.floor(total / 2)) {
                        pos = pos - total;
                    }

                    const isCenter = pos === 0;
                    const isAdjacent = Math.abs(pos) === 1;

                    return (
                        <div
                            key={index}
                            className="absolute w-64 h-96 lg:w-80 lg:h-125 transition-all duration-500 ease-in-out flex items-center justify-center"
                            style={{
                                transform: `
                                    translateX(${pos * 45}%) 
                                    scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                                    rotateY(${pos * -10}deg)
                                `,
                                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                                opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                                filter: isCenter ? "blur(0px)" : "blur(4px)",
                                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full rounded-2xl shadow-xl"
                            />
                        </div>
                    );
                })}
            </div>

            <button
                type="button"
                className="absolute left-0 lg:left-1/2 lg:-translate-x-100 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-1 flex items-center justify-center border border-gray-300 bg-white/70 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg transition"
                onClick={handlePrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <button
                type="button"
                className="absolute right-0 lg:right-1/2 lg:translate-x-100 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-1 flex items-center justify-center border border-gray-300 bg-white/70 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg transition"
                onClick={handleNext}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};