import { Star, CheckCircle } from "lucide-react";
import styles from "./ReviewSection.module.css";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Rahul S.",
    procedure: "2,400 Grafts • Frontal Hairline",
    timeline: "8 Months Post-Op",
    comment:
      "The density and angle of the grafts look completely natural. Nobody can tell I had a procedure done. The doctor personally planned the entire hairline design.",
  },
  {
    id: 2,
    name: "Amit K.",
    procedure: "1,800 Grafts • Crown Restoration",
    timeline: "1 Year Post-Op",
    comment:
      "Extremely smooth recovery. Pain was minimal post-surgery, and the clinic team followed up weekly during the initial healing phase. Worth every penny.",
  },
  {
    id: 3,
    name: "Vikram M.",
    procedure: "3,000 Grafts • Bio-FUE",
    timeline: "10 Months Post-Op",
    comment:
      "Complete transparency regarding donor capacity and realistic expectations right from day one. No pressure tactics, just pure surgical skill.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Verified Patient Feedback</span>
          <h2 className={styles.title}>Real Journeys, Natural Results</h2>
          <div className={styles.ratingSummary}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className={styles.ratingText}>
              <strong>4.9 / 5.0</strong> based on 150+ verified patient records
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.cardStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className={styles.comment}>"{review.comment}"</p>

              <div className={styles.patientMeta}>
                <div className={styles.patientInfo}>
                  <div className={styles.nameRow}>
                    <strong className={styles.name}>{review.name}</strong>
                    <span className={styles.verifiedBadge}>
                      <CheckCircle size={13} /> Verified
                    </span>
                  </div>
                  <span className={styles.procedure}>{review.procedure}</span>
                  <span className={styles.timeline}>{review.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}