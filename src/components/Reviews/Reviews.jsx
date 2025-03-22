import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <div className={styles.reviewItem} key={index}>
          <div className={styles.header}>
            <div className={styles.avatar}>{reviewer_name[0]}</div>
            <div>
              <p className={styles.name}>{reviewer_name}</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className={styles.star}>
                    <use href={`/sprite.svg#${i < reviewer_rating ? 'star-filled' : 'star'}`} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
