import styles from "./HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <Image
        src="/doctor-hero.png"
        alt="Dr. John Doe performing a consultation"
        fill
        priority
        className={styles.heroImage}
      />

      {/* Single Consolidated Card */}
      <div className={styles.card}>
        <span className={styles.badge}>Doctor-Led Hair Restoration</span>
        <h1 className={styles.title}>
          Restoring Natural Density, Rebuilding Confidence.
        </h1>
        <p className={styles.subtitle}>
          Advanced, minimally invasive hair restoration led by surgical precision.
        </p>

        <div className={styles.actionGroup}>
          <a href="tel:+1234567890" className={styles.primaryButton}>
            Contact Us
          </a>
          <a href="#reviews" className={styles.secondaryButton}>
            Read Patient Reviews ↓
          </a>
        </div>

        <div className={styles.ratingRow}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingText}>
            Trusted by 1,200+ satisfied patients
          </span>
        </div>
      </div>
    </section>
  );
}