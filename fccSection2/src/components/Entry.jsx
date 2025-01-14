export default function Entry(props){
    console.log("PROPS: ",props)
    return(
        <div className="entry">
            <img    className="location-pic" 
                    src={props.entry.img.src}
                    alt={props.entry.img.alt} 
            />
            <div className="entry-info">
                <span className="entry-location">
                    <img className="marker" src="marker.png" alt="map marker icon"/>
                    <span className="location">{props.entry.city}</span>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </span>
                <h1 className="entry-h1">{props.entry.title}</h1>
                <div className="dates">{props.entry.dates}</div>
                <div className="description">{props.entry.text}</div>
            </div>
        </div>
    )
}