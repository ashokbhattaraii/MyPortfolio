"use client";

import { useState, useEffect } from "react";

interface PopupMessageProps {
  onClose?: () => void;
  autoCloseDuration?: number;
}

export default function PopupMessage({
  onClose,
  autoCloseDuration = 0,
}: PopupMessageProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoCloseDuration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [autoCloseDuration]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 md:right-6 animate-slide-in z-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
        {/* LinkedIn Icon */}
        <div className="flex-shrink-0 bg-white/20 backdrop-blur-md rounded-lg p-2">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </div>

        {/* Content */}
        <a
          href="https://www.linkedin.com/in/ashok-bhattarai-5a2644330/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0"
        >
          <h3 className="text-sm font-bold text-white">
            Let's Connect on LinkedIn! 🚀
          </h3>
          <p className="text-xs text-blue-100 mt-0.5">
            Grow your network • Share opportunities
          </p>
        </a>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200 p-1.5 rounded-lg group"
          aria-label="Close notification"
          type="button"
        >
          <svg
            className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
