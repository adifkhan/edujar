import React from "react";
import style from "../../styles/footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <section className={style.footer_top}>
        <div className={style.footer_text}>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
            <h2>Edujar</h2>
          </div>
          <p>
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={style.footer_links}>
          <h3>Quick Links</h3>
          <div className={style.links}>
            <Link to="#">About</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Course</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
        <div className={style.contact_wrapper}>
          <h3>Contact us</h3>
          <div className={style.contact}>
            <p>
              <span>
                <FiPhone size={12} />
              </span>{" "}
              (209) 555 0104
            </p>
            <p>
              <span>
                <IoLocationOutline size={12} />
              </span>{" "}
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
            <p>
              <span>
                <MdOutlineMailOutline size={12} />
              </span>{" "}
              michelle.rivera@example.com
            </p>
          </div>
        </div>
      </section>
      <section className={style.footer_bottom}>
        <p>Copyright 2023 | All Rights Reserved</p>
        <div className={style.social_links}>
          <RiFacebookCircleLine />
          <LuTwitter />
          <FaInstagram />
          <CiLinkedin />
          <FaWhatsapp />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
