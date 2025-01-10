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
                    <span className="location">{props.location}</span>
                    <a href={props.map}>View on Google Maps</a>
                </span>
                <h1 className="entry-h1">{props.entry}</h1>
                <div className="dates">{props.dates}</div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    )
}