import CardJadwal from "./CardJadwal"
import Carousel from "./Carousel"
export default function CardLapangan() {
    return (
        <div className="row text-start" >
            <div className="card border-0 mb-3 shadow-sm">
                <div className="card-body rounded p-3">
                    {/* ROW CONTENT */}
                    <div className="row">
                        <div className="col-md-4">
                            {/* SLIDER */}
                            <div id="carouselExampleIndicatorsLap" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicatorsLap" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleIndicatorsLap" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleIndicatorsLap" data-bs-slide-to={2} aria-label="Slide 3" />
                                </div>
                                <div className="carousel-inner">
                                    <Carousel />

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsLap" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsLap" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="card-title mt-2 justify-content-center text-center" style={{ color: "black" }}><strong>Lapangan 1</strong></h5>


                            {/* END SLIDER */}
                        </div>
                        <div className="col-lg-8 p-0 ">
                            <div>
                                <h4 className='text-start'>Daftar Jadwal</h4>
                                <hr></hr>
                            </div>

                            <div className='row' >
                                <CardJadwal />
                                <CardJadwal />
                                <CardJadwal />
                                <CardJadwal />
                                <CardJadwal />
                                <CardJadwal />
                                <CardJadwal />
                                <CardJadwal />
                            </div>
                            <div className="d-flex flex-row justify-content-evenly">
                                <div className='text-center justify-content-center mt-2 mb-2'>
                                    <a href='/detail-lapangan'><button className='btn btn-success text-white p-2' style={{ backgroundColor: '#00cc36', color: 'rgb(255, 255, 255)' }}>
                                        <icon className='fa fa-pencil'></icon >&nbsp;Edit Lapangan
                                    </button></a>
                                </div>
                                <div className='text-center justify-content-center mt-2 mb-2'>
                                    <a href='/mitra/detail-lapangan'><button className='btn btn-success text-white p-2' style={{ backgroundColor: '#2b7ead', color: 'rgb(255, 255, 255)' }}>
                                        <icon className='fa fa-eye'></icon >&nbsp;Lihat Selengkapnya
                                    </button></a>
                                </div>
                                <div className='text-center justify-content-center mt-2 mb-2'>
                                    <a href='/detail-lapangan'><button className='btn btn-success text-white p-2' style={{ backgroundColor: '#ed0010', color: 'rgb(255, 255, 255)' }}>
                                        <icon className='fa fa-trash'></icon >&nbsp;Hapus Lapangan
                                    </button></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* END ROW */}
                </div>
            </div>

        </div>
    )
}