import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCampers,
  selectCampers,
  selectLoading,
  selectError,
} from '../../redux/campersSlice';

import TruckCard from '../../components/TruckCard/TruckCard';
import FilterButton from '../../components/FilterButton/FilterButton';
import styles from './CatalogPage.module.css';

const equipmentOptions = [
  { icon: 'icon-wind', label: 'AC', key: 'AC' },
  { icon: 'icon-diagram', label: 'Automatic', key: 'automatic' },
  { icon: 'icon-cup-hot', label: 'Kitchen', key: 'kitchen' },
  { icon: 'icon-tv', label: 'TV', key: 'TV' },
  { icon: 'icon-shower', label: 'Bathroom', key: 'bathroom' },
];

const vehicleOptions = [
  { icon: 'icon-grid-big', label: 'Van', key: 'panelTruck' },
  { icon: 'icon-grid', label: 'Fully Integrated', key: 'fullyIntegrated' },
  { icon: 'icon-grid-small', label: 'Alcove', key: 'alcove' },
];

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [locationQuery, setLocationQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const toggleEquipment = (key) => {
    setSelectedEquipment((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const toggleType = (key) => {
    setSelectedTypes((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [key] // один тип
    );
  };

  const handleSearch = () => {
    let result = [...campers];

    if (locationQuery.trim()) {
      result = result.filter((camper) =>
        camper.location.toLowerCase().includes(locationQuery.toLowerCase())
      );
    }

    if (selectedEquipment.length > 0) {
      result = result.filter((camper) =>
        selectedEquipment.every((key) => {
          if (key === 'automatic') {
            return camper.transmission === 'automatic';
          }
          return camper[key];
        })
      );
    }

    if (selectedTypes.length > 0) {
      result = result.filter((camper) => selectedTypes.includes(camper.form));
    }

    setFiltered(result);
    setVisibleCount(4);
  };

  const allResults = filtered.length > 0 ? filtered : campers;
  const displayedCampers = allResults.slice(0, visibleCount);
  const hasMore = allResults.length > visibleCount;

  return (
    <div className={styles.container}>
      <aside className={styles.filters}>
        <p className={styles.locationTitle}>Location</p>
        <input
          type="text"
          placeholder="City"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          className={styles.input}
        />

        <p className={styles.filtersTitle}>Filters</p>

        <p className={styles.filterTitle}>Vehicle equipment</p>
        <div className={styles.filterGroup}>
          {equipmentOptions.map(({ icon, label, key }) => (
            <FilterButton
              key={key}
              icon={icon}
              label={label}
              isActive={selectedEquipment.includes(key)}
              onClick={() => toggleEquipment(key)}
            />
          ))}
        </div>

        <p className={styles.filterTitle}>Vehicle type</p>
        <div className={styles.filterGroup}>
          {vehicleOptions.map(({ icon, label, key }) => (
            <FilterButton
              key={key}
              icon={icon}
              label={label}
              isActive={selectedTypes.includes(key)}
              onClick={() => toggleType(key)}
            />
          ))}
        </div>

        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </aside>

      <section className={styles.results}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {displayedCampers.map((camper) => (
          <TruckCard key={camper.id} camper={camper} />
        ))}

        {hasMore && (
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMoreButton} onClick={() => setVisibleCount((prev) => prev + 4)}>
              Load more
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CatalogPage;