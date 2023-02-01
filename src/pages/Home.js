import './Home.css';
import hero_banner from '../assets/hero_banner.jpg';
import data from '../accommodations.json';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Banner } from '../components/Banner';


export const Home = () => {

    const [accommodations, setAccommodations] = useState(data)

    return (
        <div>
            <Banner picture={hero_banner} text="Chez vous, partout et ailleurs"/>
            <div className="accommodations-gallery">
                {accommodations.map((accommodation) => (
                    <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
                        <Card cover={accommodation.cover} title={accommodation.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
