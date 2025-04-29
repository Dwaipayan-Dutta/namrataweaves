import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait until next paint after route change
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // you can change to "smooth" if you want
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
