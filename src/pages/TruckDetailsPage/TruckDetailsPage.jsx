import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./TruckDetailsPage.module.css";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";

const TruckDetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const fetchCamperDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
        setCamper(response.data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchCamperDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!camper) return null;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.name}>{camper.name}</h1>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <svg width={16} height={16}>
              <use xlinkHref="/sprite.svg#icon-star-gold" />
            </svg>
            <div className={styles.ratingText}>
              {camper.rating.toFixed(1)} ({camper.reviews.length} Reviews)
            </div>
          </div>
          <div className={styles.location}>
            <svg width={16} height={16}>
              <use xlinkHref="/sprite.svg#icon-map" />
            </svg>
            {camper.location}
          </div>
        </div>

        <div className={styles.price}>€{camper.price.toLocaleString('en')}.00</div>

        <div className={styles.gallery}>
          {camper.gallery.map((img, idx) => (
            <img 
            key={idx} 
            src={img.thumb} 
            alt={`Gallery ${idx + 1}`} />
          ))}
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "features" ? styles.active : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`${styles.tab} ${activeTab === "reviews" ? styles.active : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          {activeTab === "features" ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>
        <div className={styles.right}>
          <BookingForm camper={camper} />
        </div>
      </div>
    </div>
  );
};

export default TruckDetailsPage;
