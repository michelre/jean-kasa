import hero_banner from '../assets/hero_banner.jpg';
import accommodations from '../accommodations.json';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div>
            <img src={hero_banner} alt="Sea and cliff" />
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="accommodations-gallery">
                {accommodations.map((accommodation) => (
                    <Link to={`/accommodation/${accommodation.id}`}>
                        <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
