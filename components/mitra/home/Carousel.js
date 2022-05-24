export default function Carousel({ gambar }) {
    return (
        <>
            <div className="carousel-item active">
                <img src={`/uploads/${gambar}`} className=" img-fluid" />
            </div>
            <div className="carousel-item" >
                <img src={`/uploads/${gambar}`} className=" img-fluid" />
            </div>
            <div className="carousel-item">
                <img src={`/uploads/${gambar}`} className=" img-fluid" />
            </div>
        </>
    )
}