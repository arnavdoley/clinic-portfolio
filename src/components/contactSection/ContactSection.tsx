import { Phone, Mail, MapPin, Clock, Calendar, ExternalLink } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactLocation() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.eyebrow}>Visit & Reach Us</span>
          <h2 className={styles.title}>Location & Direct Contact</h2>
          <p className={styles.subtitle}>
            Have questions or want to plan your visit? Reach our clinic desk directly by phone, email, or walk-in.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Column 1: Direct Contact & Hours */}
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>Get in Touch</h3>

            <div className={styles.itemGroup}>
              <a href="tel:+919876543210" className={styles.contactItem}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <div>
                  <span className={styles.itemLabel}>Call Desk</span>
                  <span className={styles.itemValue}>+91 98765 43210</span>
                </div>
              </a>

              <a href="mailto:contact@aurahairclinic.com" className={styles.contactItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div>
                  <span className={styles.itemLabel}>Email Inquiries</span>
                  <span className={styles.itemValue}>contact@aurahairclinic.com</span>
                </div>
              </a>
            </div>

            <div className={styles.divider} />

            <div className={styles.hoursBlock}>
              <div className={styles.hoursHeader}>
                <Clock size={18} className={styles.detailIcon} />
                <strong>Clinic & Consultation Hours</strong>
              </div>
              <ul className={styles.hoursList}>
                <li>
                  <span>Monday – Friday</span>
                  <span>10:00 AM – 7:00 PM</span>
                </li>
                <li>
                  <span>Saturday</span>
                  <span>10:00 AM – 5:00 PM</span>
                </li>
                <li>
                  <span>Sunday</span>
                  <span className={styles.closed}>By Prior Appointment Only</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Location & Address */}
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>Clinic Location</h3>

            <div className={styles.addressBlock}>
              <div className={styles.iconBox}>
                <MapPin size={20} />
              </div>
              <div>
                <strong className={styles.clinicName}>AuraHair Restoration Clinic</strong>
                <p className={styles.addressText}>
                  Suite 302, 3rd Floor, Medical Arcade<br />
                  Central Avenue, Sector 28<br />
                  Gurugram, Haryana 122002
                </p>
                <span className={styles.landmark}>Landmark: Opposite Metro Pillar 142</span>
              </div>
            </div>

            {/* Visual Map Placeholder or Embed */}
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <span>Interactive Map View</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsBtn}
                >
                  Get Directions <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}