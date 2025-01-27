import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button depending on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Adds smooth scrolling
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top bg-blue-600 text-white p-3 rounded-full fixed bottom-5 right-5 shadow-lg transition-transform duration-300 hover:scale-110"
                >
                    <FontAwesomeIcon icon={faArrowUp} size="lg" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
