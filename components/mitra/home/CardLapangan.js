import CardJadwal from "./CardJadwal"
import Carousel from "./Carousel"
import Link from 'next/link'

export default function CardLapangan({ props }) {
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
                                    <Carousel gambar={props.gambar} />

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
                            <h5 className="card-title mt-2 justify-content-center text-center" style={{ color: "black" }}><strong>{props.namaLapangan}</strong></h5>


                            {/* END SLIDER */}
                        </div>
                        <div className="col-lg-8 p-0 ">
                            <div>
                                <h4 className='text-start'>Daftar Jadwal</h4>
                                <hr></hr>
                            </div>

                            <div className='row' >
                                {gabunganJadwal.length === 0 ? (
                                    <h2>Tidak ada data</h2>
                                ) : (
                                    <>
                                        {gabunganJadwal.map((data, index) => (
                                            <div className='col-6 col-sm-3 mb-2'>
                                                <div className='card'>
                                                    <div className='card-body'>
                                                        <span>{data}</span><br></br>
                                                        <span>{`Rp ${gabunganHarga[index]}.000`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                            <div className="d-flex flex-row justify-content-evenly">
                                <div className='text-center justify-content-center mt-2 mb-2'>
                                    <Link href={`/mitra/update-lapangan?namaVenue=${props.namaVenue}&namaLapangan=${props.namaLapangan}&deskripsi=${props.deskripsi}&gambar=${props.gambar}&jadwalPagi=${JSON.stringify(props.jadwalPagi)}&jadwalMalam=${JSON.stringify(props.jadwalMalam)}&hargaPagi=${props.hargaPagi}&hargaMalam=${props.hargaMalam}`}>
                                        <button className='btn btn-success text-white p-2' style={{ backgroundColor: '#00cc36', color: 'rgb(255, 255, 255)' }}>
                                            <icon className='fa fa-pencil'></icon >&nbsp;Edit Lapangan
                                        </button>
                                    </Link>
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
