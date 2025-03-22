import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersSlice";
import { selectCampers, selectLoading, selectError } from "../../redux/campersSlice";
import { Link } from "react-router-dom";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            
            <ul>
                {campers.map((camper) => {
                    return (
                        <li key={camper.id}>
                            <img>{camper.gallery.thumb}</img>
                            <div>
                                <h2>{camper.name}</h2>
                                <p>{camper.price}</p>
                                <Link to={`/catalog/${camper.id}`}>Show more</Link> 
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CatalogPage;