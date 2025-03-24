import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.list}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => {
        const firstLetter = reviewer_name.charAt(0).toUpperCase();

        return (
          <li key={index} className={styles.review}>
            <div className={styles.dataPart}>
              <div className={styles.leftColumn}>
                <div className={styles.avatar}>{firstLetter}</div>
              </div>

              <div className={styles.rightColumn}>
                <h4 className={styles.name}>{reviewer_name}</h4>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={`star-${index}-${i}`} className={styles.starIcon} width={16} height={16}>
                      <use
                        xlinkHref={`/sprite.svg#${
                          i < reviewer_rating ? 'icon-star-gold' : 'icon-star'
                        }`}
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.commentPart}>
              <p className={styles.comment}>{comment}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;