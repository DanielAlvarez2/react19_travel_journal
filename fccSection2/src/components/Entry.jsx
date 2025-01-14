export default function Entry(props){
    console.log(props.img)
    return(
        <div className="entry">
            <img    className="location-pic" 
                    src={props.img.src}
                    alt={props.img.alt} 
            />
            <div className="entry-info">
                <span className="entry-location">
                    <img className="marker" src="marker.png" alt="map marker icon"/>
                    <span className="location">{props.city}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </span>
                <h1 className="entry-h1">{props.title}</h1>
                <div className="dates">{props.dates}</div>
                <div className="description">{props.text}</div>
            </div>
        </div>
    )
}