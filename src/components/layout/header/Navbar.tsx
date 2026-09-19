// src/components/layout/NavBar/NavBar.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { Phone } from "lucide-react";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop;

      // Toggle blurred shadow after 20px
      setIsScrolled(currentScrollY > 20);

      // Require at least a 10px scroll difference to avoid jitter
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return;
      }

      // Scrolling DOWN past 80px -> hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } 
      // Scrolling UP -> reveal navbar
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${!isVisible ? styles.hidden : ""} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.navInner}>
        <div className={styles.brand}>
          <span className={styles.clinicName}>AuraHair Clinic</span>
          <span className={styles.clinicTag}>Hair Restoration & Surgery</span>
        </div>

        <nav className={styles.links}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
           <a href="#about" className={styles.navLink}>
            About Doctor
          </a>
          <a href="#reviews" className={styles.navLink}>
            Patient Reviews
          </a>
          <a href="#contact" className={styles.navLink}>
            Location & Hours
          </a>
        </nav>

        <div className={styles.action}>
          <a href="tel:+1234567890" className={styles.callButton}>
            <Phone size={15} />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}