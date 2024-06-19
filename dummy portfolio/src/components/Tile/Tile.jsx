import './Tile.css';

function Tile({
    heading,
    subHeading,
    description,
    image,
    link,
    linkText="Know More"
}){
    return (
        <div className="tile">
            {
                image ? 
                (
                    <div className="tile-img">
                        <img src={image} alt="tile-image" />
                    </div>
                ) : null
            }
            
            <div className="tile-content">
                {heading ? (<h2>{heading}</h2>) : null}
                {subHeading ? (<h3>{subHeading}</h3>) : null}
                {description ? (<p>{description}</p>) : null}
                {link ? <a href={link}>{linkText}</a> : null}
            </div>
        </div>
    );
}

export default Tile;