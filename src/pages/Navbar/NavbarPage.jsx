import { useEffect, useState } from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

function NavbarPage() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className={`${sticky ? "sticky" : ""}`}>
      <div className="logo">
        <img src="/s6.png" />
        <p>EVENTS</p>
      </div>
      <div className="menu">
        <ul className="sidebar">
          <li>Home</li>
          <li>Events</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <div className="hamburger">
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default NavbarPage;
