import React from 'react';
import styles from './Features.module.css';

const Features = ({ camper }) => {
  const features = [
    { key: 'AC', label: 'AC', icon: 'ac' },
    { key: 'bathroom', label: 'Bathroom', icon: 'bathroom' },
    { key: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
    { key: 'TV', label: 'TV', icon: 'tv' },
    { key: 'radio', label: 'Radio', icon: 'radio' },
    { key: 'refrigerator', label: 'Refrigerator', icon: 'fridge' },
    { key: 'microwave', label: 'Microwave', icon: 'microwave' },
    { key: 'gas', label: 'Gas', icon: 'gas' },
    { key: 'water', label: 'Water', icon: 'water' },
  ];

  return (
    <div className={styles.features}>
      <ul className={styles.list}>
        {features.map(({ key, label, icon }) =>
          camper[key] ? (
            <li key={key} className={styles.item}>
              <svg className={styles.icon}>
                <use href={`../../img/sprite.svg#${icon}`} />
              </svg>
              <span>{label}</span>
            </li>
          ) : null
        )}
      </ul>

      <ul className={styles.details}>
        <li>
          <span>Form:</span>
          <span>{camper.form}</span>
        </li>
        <li>
          <span>Length:</span>
          <span>{camper.length}</span>
        </li>
        <li>
          <span>Width:</span>
          <span>{camper.width}</span>
        </li>
        <li>
          <span>Height:</span>
          <span>{camper.height}</span>
        </li>
        <li>
          <span>Tank:</span>
          <span>{camper.tank}</span>
        </li>
        <li>
          <span>Consumption:</span>
          <span>{camper.consumption}</span>
        </li>
        <li>
          <span>Engine:</span>
          <span>{camper.engine}</span>
        </li>
        <li>
          <span>Transmission:</span>
          <span>{camper.transmission}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
