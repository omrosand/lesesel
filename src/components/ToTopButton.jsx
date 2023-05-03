import { useState } from "react";

const ToTopButton = () => {
  //https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button className="topBtn" onClick={scrollToTop}>
        Til toppen
      </button>
    </>
  );
};

export default ToTopButton;
