import { useEffect, useState } from "react";
export default function WindowTracker() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      setwindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return function () {
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
