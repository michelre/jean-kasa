import { useParams } from "react-router-dom";
import accommodations from '../accommodations.json';
import { Carousel } from "../components/Carousel";
import { useState } from "react";
import { Rating } from "../components/Rating";
import { Collapse } from "../components/Collapse";

export const Accommodation = () => {
    const { id } = useParams();
    const [accommodationData, setAccomodationData] = useState(accommodations.find((accommodation) => accommodation.id === id)
    )

    const { title, pictures, description, host, rating, location, equipments, tags } = accommodationData;

    return (
        <main>
            <Carousel pictures={pictures}/>
            <div className="title-location-host-container">
                <h1>{title}</h1>
                <p>{location}</p>
                <h2>{host.name}</h2>
                <img src={host.picture} alt={host.name} />
                <div className="tags-rating-container">
                    <div className="tags-container">

                    </div>
                    <Rating rating={rating}/>
                </div>
                <div className="description-equipments-container">
                    <Collapse 
                    title="Description" 
                    content={description}/>
                    <Collapse 
                    title="Équipements" 
                    content={
                        equipments
                    }/>
                </div>
            </div>
        </main>
    )
}
