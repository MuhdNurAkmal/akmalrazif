import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-10 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </>
  );
};

export default ArrowTop;
