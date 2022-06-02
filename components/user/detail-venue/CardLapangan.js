import CardJadwal from "./CardJadwal"
import Carousel from "./Carousel"
export default function CardLapangan({props}) {
    let keyJadwalPagi = Object.keys(props.jadwalPagi)
    let keyJadwalMalam = Object.keys(props.jadwalMalam)
    let gabunganJadwal = keyJadwalPagi.concat(keyJadwalMalam)
    let gabunganHarga = []


    for (let i = 0; i < keyJadwalPagi.length; i++) {
        gabunganHarga.push(props.hargaPagi)
    }

    for (let i = 0; i < keyJadwalMalam.length; i++) {
        gabunganHarga.push(props.hargaMalam)
    }

    return (
        <div className='mt-3'>
            
                <div className="card border-0 shadow-sm">
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
                            <h5 className="card-title mt-2 justify-content-center text-center" style={{ color: "black" }}><strong>{ props.namaLapangan}</strong></h5>
                                <div className='text-center justify-content-center mt-2 mb-2'>
                                    <a href='/detail-lapangan'><button className='btn btn-success text-white p-2'>Lihat Selengkapnya</button></a>
                                </div>

                                {/* END SLIDER */}
                            </div>
                            <div className="col-lg-8 p-0 ">
                                <a data-bs-toggle="collapse" href="#jadwalCollapse" style={{ color: "black" }}><h5 className='text-start'><icon className='fa fa-caret-down'></icon> Lihat Jadwal</h5></a>
                                <div className='row collapse multi-collapse' id="jadwalCollapse">
                                    <CardJadwal />
                                    <CardJadwal />
                                    <CardJadwal />
                                    <CardJadwal />
                                    <CardJadwal />
                                    <CardJadwal />
                                    <CardJadwal />
                                    <CardJadwal />
                                </div>
                            </div>
                        </div>
                        {/* END ROW */}
                    </div>

            </div>
        </div>
    )
}