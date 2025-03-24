import styles from './FilterButton.module.css';
import clsx from 'clsx';

const FilterButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      className={clsx(styles.filterButton, isActive && styles.active)}
      onClick={onClick}
    >
      <div className={styles.iconWrapper}>
        <svg width={32} height={32} className={styles.icon}>
          <use xlinkHref={`/sprite.svg#${icon}`} />
        </svg>
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default FilterButton;
