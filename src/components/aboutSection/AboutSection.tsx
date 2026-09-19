import styles from './AboutSection.module.css'
import Image from 'next/image'
import { Award, Users, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className={styles.mainContainer} id='about'>
        <div className={styles.imageWrapper}>
          <Image
            src="/doctor-image.png"
            alt="Lead Hair Restoration Surgeon"
           width={240}
            height={240}
            className={styles.doctorImg}
          />
        </div>
        <div className={styles.aboutSection}>
            <span className={styles.eyebrow}>Meet the Specialist</span>
          <h2 className={styles.title}>Precision-Driven Hair Restoration Led by Dr. [Name]</h2>
          <p className={styles.leadText}>
            Specializing exclusively in micro-FUE and natural hairline reconstruction. Every procedure is planned and performed directly by our surgical team to ensure optimal graft survival and undetectable results.
          </p>
          <div className={styles.cardsGrid}>
                <div className={styles.card}>
              <Award size={20} className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <span className={styles.cardStat}>12+ Years</span>
                <span className={styles.cardLabel}>Clinical Experience</span>
              </div>
            </div>
            <div className={styles.card}>
              <Users size={20} className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <span className={styles.cardStat}>2,500+</span>
                <span className={styles.cardLabel}>Procedures Completed</span>
              </div>
            </div>

            <div className={styles.card}>
              <ShieldCheck size={20} className={styles.cardIcon} />
              <div className={styles.cardContent}>
                <span className={styles.cardStat}>100%</span>
                <span className={styles.cardLabel}>Doctor-Led Surgery</span>
              </div>
            </div>
          </div>    
        </div>

    </section>
  )
}