import { useState, useEffect } from "react";

const ToTopButton = () => {
  //https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <button className="topBtn" onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
        Til toppen
      </button>
    </>
  );
};

export default ToTopButton;