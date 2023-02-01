export const Banner = ({ text, picture }) => {
    return (
      <div className='banner'> 
        <img src={picture} alt="Banner" />
        {text && <h1 className="banner-title">{text}</h1>}
      </div>
    );
  };