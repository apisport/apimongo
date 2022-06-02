import Carousel from '../components/user/detail-lapangan/Carousel'
import CardJadwal from '../components/user/detail-lapangan/CardJadwal'
import useSWR from "swr";
import { useRouter } from 'next/router';

export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const router = useRouter()
    const { idLapangan } = router.query
    const { data: data, error } = useSWR(`/api/detaillapangandb?idLapangan=${idLapangan}`, fetcher)
    

    if (!data) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let lapangan = data['message']
    console.log(lapangan)
    let infoLapangan = lapangan[0]
    let namaHasil = infoLapangan.namaLapangan.split(" ").join("");

    // Penggabungan Harga dan Jadwal
    let keyJadwalPagi = Object.keys(infoLapangan.jadwalPagi)
    let keyJadwalMalam = Object.keys(infoLapangan.jadwalMalam)
    let gabunganJadwal = keyJadwalPagi.concat(keyJadwalMalam)
    let gabunganHarga = []



    for (let i = 0; i < keyJadwalPagi.length; i++) {
        gabunganHarga.push(infoLapangan.hargaPagi)
    }

    for (let i = 0; i < keyJadwalMalam.length; i++) {
        gabunganHarga.push(infoLapangan.hargaMalam)
    }

    //Penggabungan Harga dan Jadwal

    const checkValue = () => {
        let check = document.getElementsByName('jadwal')
        for (let i = 0; i < check.length; i++){
            console.log(`index ke-${i}`)
            console.log(JSON.parse(check[i].value))
        }
        
    }
    
    return (
        <div className="container mt-4">
            <h1 className='mb-3 mt-4'>{infoLapangan.namaLapangan}</h1>
            <div className="row mb-3">
                <div className="col md-3 mb-4">
                    {/* SLIDER */}
                    <div id={`${namaHasil}`} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {infoLapangan.gambar.map((data, i) => (
                                <>
                                    {i == 0 ?
                                        (<button type="button" data-bs-target={`#${namaHasil}`} data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`} />) :
                                        (<button type="button" data-bs-target={`#${namaHasil}`} data-bs-slide-to={i} aria-label={`Slide ${i}`} />)}

                                </>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {infoLapangan.gambar.map((data, i) => (
                                <>
                                    {i == 0 ?
                                        (<div className="carousel-item active">
                                            <img src={`/uploads/${data}`} className="" width={400} height={200} />
                                        </div>) :
                                        (<div className="carousel-item">
                                            <img src={`/uploads/${data}`} className="" width={400} height={200} />
                                        </div>)}
                                </>
                            ))}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#${namaHasil}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#${namaHasil}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* END SLIDER */}
                </div>
            </div>
            <div className='row mb-4'>
                <a data-bs-toggle="collapse" href="#deskripsiCollapse" style={{ color: "black" }}><h5 className='text-start'><icon className='fa fa-caret-down'></icon> Deskripsi Lapangan</h5></a>
                <div>
                    <div className="row collapse multi-collapse text-start" id="deskripsiCollapse">
                        <span>{infoLapangan.deskripsi}</span>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h4 className='text-start'>Jadwal Lapangan</h4>
                <input type='date' id='tglMain' className='form-control mb-4'></input>
                <div className='card p-3'>
                    <div className='row' style={{ color: 'white' }}>
                        {/* THIS IS CARD */}
                       
                        {/* THIS IS CARD */}
                        {gabunganJadwal.length === 0 ? (
                            <h2>Tidak ada data Jadwal</h2>
                        ) : (
                            <>
                                {gabunganJadwal.map((data, index) => (
                                    <div className='col-6 col-lg-3 mb-2'>
                                        <div>
                                            <input type="checkbox" className="btn-check" id={`btn-check${index+1}`} autoComplete="off" name='jadwal' value={JSON.stringify([`${data}`, gabunganHarga[index]])} />
                                            <label className="btn btn-outline-primary" htmlFor={`btn-check${index + 1}`}>{data}<br />{`Rp ${gabunganHarga[index]}.000`}</label><br />
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                

                <div className='row'>
                    <button type='button' className='btn btn-fill text-white mt-3' onClick={checkValue}>Pesan</button>
                </div>

            </div>
        </div>

    )
}
