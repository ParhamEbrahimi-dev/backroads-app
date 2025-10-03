
type tourType = {
    img: string,
    date: string,
    title: string,
    info: string,
    location: string,
    duration: string,
    cost: string
}

const Tour = ({ img, date, title, info, location, duration, cost }: tourType) => {
    return (
        <article className="tour-card" >
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>
                    {info}
                </p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span> {location}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${cost}</p>
                </div>
            </div>
        </article>
    )

}

export default Tour;