import CardLapangan from "../../components/mitra/home/CardLapangan";

export default function Home() {
    return (
        <div className="container">
            <h1>Detail Venue</h1>
            <div className="row mb-4">
                <div className="col">
                    <div className=" shadow-sm" style={{ backgroundColor: 'white' }}>
                        <div className=" rounded ">
                            {/* ROW CONTENT */}
                            <div className="row p-4">
                                <div className="col">
                                    {/* SLIDER */}
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="http://placekitten.com/100/200" width='170' height='230' className="d-block w-100" />
                                            </div>
                                            <div className="carousel-item" >
                                                <img src="http://placekitten.com/100/200" width='170' height='230' className="d-block w-100" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="http://placekitten.com/100/200" width='170' height='230' className="d-block w-100" />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                    {/* END SLIDER */}
                                </div>
                                <div className="col-md-8 text-start">
                                    <h5 className="card-title mt-3" style={{ color: "black" }}><strong>Lapangan Mitra</strong> </h5>
                                    <span className="card-text" style={{ color: "black" }}><icon className='fa fa-calendar'></icon> Senin - Rabu</span><br></br>
                                    <span className="card-text" style={{ color: "black" }}><icon className='fa fa-clock'></icon> Pukul 08.00 - 10.00</span><br></br>
                                    <span className="card-text" style={{ color: "black" }}><icon className='fa fa-compass'></icon> Jalan Basuki Ahmad No. 8</span><br></br>
                                    <span className="card-text" style={{ color: "black" }}><icon className='fa fa-futbol'></icon> Futsal</span><br></br>
                                    <span className="card-text text-muted" style={{ color: "black" }}><strong>Harga mulai dari </strong><br></br><span style={{ color: "green" }}>Rp 100.000</span></span><br></br>
                                    <a className='btn btn-fill text-white mt-3' href='/pembayaran'><icon className='fa fa-pencil'></icon>&nbsp; Edit Info Venue</a>
                                </div>
                            </div>
                            {/* END ROW */}
                        </div>
                    </div>
                </div>

            </div>
            <div className='row'>
                <h4 className='text-start'> Fasilitas</h4>
                <hr></hr>
                <div>
                    <div className="text-start">
                        <span>Kantin, WiFi</span>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <h4 className='text-start'>Sosial Media</h4>
                <hr></hr>
                <div>
                    <div className="row text-start">
                        <span className='mb-2'><b><icon className='fa fa-instagram' /></b> @lapangan</span>
                        <span className='mb-2'><b><icon className='fa fa-whatsapp' /></b> 0333-XXX-XXX</span>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h4 className='text-start'> Daftar Lapangan</h4>
                <hr></hr>
                <CardLapangan />
                <CardLapangan />
                <CardLapangan />
                <CardLapangan />
            </div>

            <div className='row'>
                <a className='btn btn-fill text-white mt-3' href='/mitra/tambah-lapangan'>+ Tambah Lapangan</a>
            </div>

        </div>

    )
}
