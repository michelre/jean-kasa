import hero_banner from '../assets/hero_banner.jpg';
import data from '../accommodations.json';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Home = () => {
    
const [accommodations, setAccommodations] = useState(data)

    return (
        <div>
            <img src={hero_banner} alt="Sea and cliff" />
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="accommodations-gallery">
                {accommodations.map((accommodation) => (
                    <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
                        <Card  cover={accommodation.cover} title={accommodation.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
