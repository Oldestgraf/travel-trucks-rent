import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./TruckDetailsPage.module.css";
import Features from "../../components/Features/Features"
import Reviews from "../../components/Reviews/Reviews"

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
                setError({ error });
            } finally {
                setLoading(false);
            }
        };

        fetchCamperDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>
    if (!camper) return null;

    return (
        <div>
            <h1>{camper.name}</h1>
            <p>⭐ {camper.rating} ({camper.reviews.length} Reviews) | 📍 {camper.location}</p>
            <p><strong>Ціна:</strong> €{camper.price.toLocaleString("de-DE")}</p>

            {/* Gallery */}
            <div>
                {camper.gallery.map((image, index) => (
                    <img key={index} src={image.thumb} alt={`Camper ${index + 1}`} width="292" />
                ))}
            </div>

            <p className={styles.description}>{camper.description}</p>

            <div className={styles.tabs}>
                <button
                    className={activeTab === 'features' ? styles.activeTab : ''}
                    onClick={() => setActiveTab('features')}
                >
                    Features
                </button>
                <button
                    className={activeTab === 'reviews' ? styles.activeTab : ''}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'features' && <Features camper={camper} />}
                {activeTab === 'reviews' && <Reviews reviews={camper.reviews} />}
            </div>
            
            <div className={styles.bookingCard}>
                <div className={styles.price}>€{camper.price} / day</div>
                <button className={styles.bookingBtn}>Book now</button>
            </div>

        </div>
    );
};

export default TruckDetailsPage;