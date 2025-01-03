export default function Entry(){
    return(
        <div className="entry">
            <img className="location-pic" src="tao.jpg" alt="Tao Nightlub Las Vegas" />
            <div className="entry-info">
                <span className="entry-location">
                    <img className="marker" src="marker.png" alt="map marker icon"/>
                    <span className="location">Las Vegas</span>
                    <a href="https://www.google.com/maps/place/Las+Vegas,+NV/@36.1251645,-115.3398102,11z/data=!3m1!4b1!4m6!3m5!1s0x80beb782a4f57dd1:0x3accd5e6d5b379a3!8m2!3d36.171563!4d-115.1391009!16zL20vMGN2M3c?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                </span>
                <h1 className="entry-h1">Tao Nightclub</h1>
                <div className="dates">2012-2017</div>
                <div className="description">TAO Nightclub is the epitome of Las Vegas nightlife boasting three bars, one dance floor, private sky boxes, and a 40-foot outside terrace overlooking the Las Vegas Strip</div>
            </div>
        </div>
    )
}