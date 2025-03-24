import styles from './Features.module.css';

const Features = ({ camper }) => {
  if (!camper) return null;

  const {
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
    adults,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  const featuresList = [
    { label: 'AC', value: AC, icon: 'icon-wind' },
    { label: 'Radio', value: radio, icon: 'category-radio' },
    { label: 'Refrigerator', value: refrigerator, icon: 'category-refrigerator' },
    { label: 'Microwave', value: microwave, icon: 'category-microwave' },
    { label: 'Gas', value: gas, icon: 'category-gas' },
    { label: 'Water', value: water, icon: 'category-water' },
    { label: 'Kitchen', value: kitchen, icon: 'category-kitchen' },
    { label: 'Beds', value: beds, icon: 'icon-bed' },
    { label: 'TV', value: TV, icon: 'icon-tv' },
    { label: 'CD', value: CD, icon: 'icon-cd' },
    { label: 'Bathroom', value: bathroom, icon: 'icon-shower' },
  ];

  const vehicleDetails = [
    { label: 'Form', value: adults && `${adults} adults` },
    { label: 'Length', value: length },
    { label: 'Width', value: width },
    { label: 'Height', value: height },
    { label: 'Tank', value: tank },
    { label: 'Consumption', value: consumption },
    { label: 'Engine', value: engine },
    { label: 'Transmission', value: transmission },
  ];

  return (
    <div className={styles.features}>
      <ul className={styles.badges}>
        {featuresList.map(
          (item) =>
            item.value && (
              <li key={item.label} className={styles.badge}>
                <svg width={20} height={20}>
                  <use xlinkHref={`/sprite.svg#${item.icon}`} />
                </svg>
                {item.label}
              </li>
            )
        )}
      </ul>

      <div className={styles.details}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <ul className={styles.detailsList}>
          {vehicleDetails.map(
            (item) =>
              item.value && (
                <li key={item.label} className={styles.detailItem}>
                  <span className={styles.detailLabel}>{item.label}</span>
                  <span className={styles.detailValue}>{item.value}</span>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Features;
