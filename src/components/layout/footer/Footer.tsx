import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Row: Brand & Quick Anchors */}
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <span className={styles.brandTitle}>AuraHair Clinic</span>
            <span className={styles.brandTag}>Advanced Hair Restoration & Micro-FUE Surgery</span>
          </div>

          <nav className={styles.navLinks}>
            <a href="#about" className={styles.link}>About Doctor</a>
            <a href="#reviews" className={styles.link}>Reviews</a>
            <a href="#contact" className={styles.link}>Location & Hours</a>
          </nav>
        </div>

        {/* Middle: Mandatory Medical Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            <strong>Medical Disclaimer:</strong> Information provided on this website is for educational purposes only and should not be construed as personal medical advice. Hair restoration outcomes, graft survival, and timelines vary based on individual donor characteristics, medical history, and post-operative adherence. A comprehensive in-person clinical assessment is mandatory prior to surgery.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Bottom Bar: Copyright & Reg Info */}
        <div className={styles.bottomRow}>
          <span>© {currentYear} AuraHair Clinic. All rights reserved.</span>
          <span>Reg. No: MED-REST-2024/GGM</span>
        </div>

      </div>
    </footer>
  );
}