import styles from './TruckCard.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectFavorites } from '../../redux/favoritesSlice';

const TruckCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const {
    id,
    name,
    price,
    location,
    gallery,
    description,
    AC,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    kitchen,
    beds,
    TV,
    CD,
    bathroom,
    transmission,
    engine,
    rating,
    reviews,
  } = camper;

  const features = [
    { label: 'AC', value: AC, icon: 'icon-wind' },
    { label: 'Automatic', value: transmission === 'automatic', icon: 'icon-diagram' },
    { label: 'Petrol', value: engine === 'petrol', icon: 'category-petrol' },
    { label: 'Kitchen', value: kitchen, icon: 'category-kitchen' },
    { label: 'Bathroom', value: bathroom, icon: 'icon-shower' },
    { label: 'refrigerator', value: refrigerator, icon: 'category-refrigerator' },
    { label: 'microwave', value: microwave, icon: 'category-microwave' },
    { label: 'gas', value: gas, icon: 'category-gas' },
    { label: 'water', value: water, icon: 'category-water' },
    { label: 'beds', value: beds, icon: '' },
    { label: 'TV', value: TV, icon: 'icon-tv' },
    { label: 'CD', value: CD, icon: '' },
    { label: 'Radio', radio: radio, icon: 'category-radio' },
  ];

  return (
    <li className={styles.card}>
      <img
        className={styles.image}
        src={gallery[0]?.thumb}
        alt={name}
        width={290}
        height={310}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.metaRow}>
              <p className={styles.rating}>
                <svg className={styles.icon} width={16} height={16}>
                  <use xlinkHref="/sprite.svg#icon-star-gold" />
                </svg>
                <div className={styles.ratingText} >
                  {rating.toFixed(1)} ({reviews.length} Reviews)
                </div>
              </p>
              <p className={styles.location}>
                <svg className={styles.icon} width={16} height={16}>
                  <use xlinkHref="/sprite.svg#icon-map" />
                </svg>
                {location}
              </p>
            </div>
          </div>

          <div className={styles.priceRow}>
            <p className={styles.price}>€{price.toLocaleString('en')}.00</p>
            <button className={styles.favoriteBtn} onClick={handleToggleFavorite}>
              <svg className={styles.icon} width={24} height={24}>
                <use
                  xlinkHref={
                    isFavorite
                      ? '/sprite.svg#icon-heart-filled'
                      : '/sprite.svg#icon-heart'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <ul className={styles.badges}>
          {features.map(
            (feature) =>
              feature.value && (
                <li key={feature.label} className={styles.badge}>
                  <svg width={20} height={20}>
                    <use xlinkHref={`/sprite.svg#${feature.icon}`} />
                  </svg>
                  {feature.label}
                </li>
              )
          )}
        </ul>

        <div className={styles.buttonWrapper}>
          <Link to={`/catalog/${id}`} target="_blank" className="button">
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
};

export default TruckCard;
