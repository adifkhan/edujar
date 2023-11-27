import React, { useState } from "react";
import style from "../../styles/header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const navItems = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Course", link: "#course" },
  { title: "Blog", link: "#blog" },
  { title: "Contact", link: "#contact" },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  //   const pathname = usePathname();
  return (
    <header className={style.header}>
      {/* menu icons for small screen */}
      <div
        className={
          menuToggle
            ? `${style.disabled__menu_icon}`
            : `${style.active__menu_icon}`
        }
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <RiMenuLine />
      </div>
      <div
        className={
          menuToggle
            ? `${style.active__menu_icon}`
            : `${style.disabled__menu_icon}`
        }
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <RiCloseLine />
      </div>
      <div className={style.logo}>
        <img src={logo} alt="" />
        <h2>Edujar</h2>
      </div>

      {/* navbar for large screen  */}
      <nav className={style.navbar}>
        {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.title}
          </Link>
        ))}
      </nav>
      <div className={style.nav_button}>
        <button className={style.login_button}>Login</button>
        <button className={style.starting_button}>Get Started</button>
      </div>

      {/* navbar for small screen  */}
      <nav
        className={
          menuToggle ? `${style.mini__menu}` : `${style.disabled__mini__menu}`
        }
      >
        {navItems.map((item, index) => (
          <Link key={index} to={item.link} onClick={() => setMenuToggle(false)}>
            {item.title}
          </Link>
        ))}
        <div className={style.mini_nav_button}>
          <button className={style.login_button}>Login</button>
          <button className={style.starting_button}>Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
