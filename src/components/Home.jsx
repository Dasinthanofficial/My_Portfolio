import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (!el) return;

      const navHeight = 100;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });

      // clear the state so it won't auto-scroll again
      window.history.replaceState({}, document.title, location.pathname);
    });
  }, [location.pathname, location.state]);

  return (
    <>
      {/* your existing sections */}
    </>
  );
};

export default Home;