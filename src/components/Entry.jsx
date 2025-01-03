import mtfuji from '../images/mtfuji.jpg';
import marker from '../images/marker.png';
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src} 
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
            <img 
                className="marker"
                src={marker} 
                alt="map marker icon"
                style={{ width: '15px', height: '14px'}}  // Inline style for width
            />
                <span className="country">{props.country}</span>
                <a href={props.maps}>View on Google Maps</a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}