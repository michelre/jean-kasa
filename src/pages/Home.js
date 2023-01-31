import hero_banner from '../assets/hero_banner.jpg';

export const Home = () => {
    return (
        <div>
            <img src={hero_banner} alt="Sea and cliff"/>
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="accomodations-gallery"></div>
        </div>
        
    )
}
