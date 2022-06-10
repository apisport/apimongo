//@ts-check
import Carousel from '../components/user/detail-lapangan/Carousel'
import CardJadwal from '../components/user/detail-lapangan/CardJadwal'
import useSWR from "swr";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link'

export default function Home() {

    const router = useRouter()
    const { idLapangan, namaVenue, namaLapangan } = router.query
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let todayVar = yyyy + '-' + mm + '-' + dd;
    
    const [_dataMain, setDataMain] = useState({});
    const [tglMain, setTglMain] = useState(todayVar);
    const [jadwalPesan, setJadwalPesan] = useState([]);
    const [available, setAvailable] = useState(true);
    const [hargaPesan, setHargaPesan] = useState([]);
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR(`/api/detaillapangandb?idLapangan=${idLapangan}&namaVenueReq=${namaVenue}&namaLapanganReq=${namaLapangan}&tglMainReq=${tglMain }`, fetcher)

    console.log(tglMain)
    if (!data) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Something went wrong</div>
    }

    //Deklarasi Array JSON SWR
    let lapangan = data['message']
    console.log('Lapangan')
    console.log(lapangan)
    console.log('Transaksi:')
    console.log(lapangan.infoTransaksi)
    let infoLapangan = lapangan.infoLapangan[0]
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

    let transaksiArr = lapangan.infoTransaksi.filter((tblDat) => {
        if (tglMain == "") {
            return tblDat
        } else if (tblDat.tglMain === tglMain) {
            return tblDat
        }
    })
    console.log('Hasil Filter')
    console.log(transaksiArr)


    const setCheck = () => {
        setJadwalPesan([])
        setHargaPesan([])
        let convertedJSON = []
        let check = document.getElementsByName('jadwal')
        let date = document.getElementById('tglMain')
        let jadwalValue = []
        let hargaValue = []
        let hargaTemp = []
        let jadwalTemp = []
        let len = check.length

        for (var i = 0; i < len; i++) {
            convertedJSON.push(JSON.parse(check[i].value))
            jadwalValue.push(convertedJSON[i][0])
            hargaValue.push(convertedJSON[i][1])
        }
        // console.log(convertedJSON)
        // console.log(jadwalValue)
        // console.log(hargaValue)
        for (var i = 0; i < len; i++) {
            if (check[i].checked) {
                setJadwalPesan(arr => [...arr, jadwalValue[i]]);
                setHargaPesan(arr => [...arr, hargaValue[i]])
            }
        }

        // console.log(`jadwal Pesan:`)
        // console.log(jadwalTemp)
        // console.log(hargaTemp)
        console.log(jadwalPesan)
        console.log(hargaPesan)
    }

    //Handle Post Update DataMain Lapangan
    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        // fields check
        try {
            // Update post
            await fetch('/api/datamaindb', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dataMain: _dataMain,
                    objectId: infoLapangan._id,
                }),
            });
            // reload the page
            alert('Data sukses diupdate')
            return router.push('/mitra/home');
        } catch (error) {
            // Stop publishing state
            console.log('Not Working')
        }

    };


    //Penggabungan Harga dan Jadwal

    const checkValue = () => {
        let check = document.getElementsByName('jadwal')
        for (let i = 0; i < check.length; i++) {
            console.log(`index ke-${i}`)
            console.log(JSON.parse(check[i].value))
        }
        let date = document.getElementById('tglMain').value
        console.log(date)
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
                <form onSubmit={handlePost}>
                    <h4 className='text-start'>Jadwal Lapangan</h4>
                    <input type='date' id='tglMain' value={tglMain} onChange={(e) => setTglMain(e.target.value)} className='form-control mb-4' required></input>
                    <div className='card p-3'>
                        <div className='row' style={{ color: 'white' }}>
                            {/* THIS IS CARD */}

                            {/* THIS IS CARD */}
                            {available &&
                                <>

                                    {gabunganJadwal.map((data, index) => (

                                        <div className='col-6 col-lg-3 mb-2'>
                                            <div>

                                                <input type="checkbox" className="btn-check" id={`btn-check${index + 1}`} autoComplete="off" onClick={() => setCheck()} name='jadwal' value={JSON.stringify([`${data}`, gabunganHarga[index]])} />
                                                <label className="btn btn-outline-primary" htmlFor={`btn-check${index + 1}`}>{data}<br />{`Rp ${gabunganHarga[index]}.000`}</label><br />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }
                            {!available &&
                                <>
                                    <h3 className='text-black'>Mitra tidak beroperasi</h3>
                                </>
                            }
                            {/* {gabunganJadwal.length === 0 ? (
                                <h2>Tidak ada data Jadwal</h2>
                            ) : ( 
                                    <>
                                        
                                        {gabunganJadwal.map((data, index) => (
                                        
                                        <div className='col-6 col-lg-3 mb-2'>
                                            <div>
                                                
                                                <input type="checkbox" className="btn-check" id={`btn-check${index + 1}`} autoComplete="off" onClick={() => setCheck()} name='jadwal' value={JSON.stringify([`${data}`, gabunganHarga[index]])} />
                                                <label className="btn btn-outline-primary" htmlFor={`btn-check${index + 1}`}>{data}<br />{`Rp ${gabunganHarga[index]}.000`}</label><br />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )} */}

                        </div>
                    </div>


                    <div className='row'>
                        <h2><b>Jadwal yang akan dipesan:</b></h2>
                        <h3>{tglMain}</h3>
                        <hr></hr>
                        {jadwalPesan.length === 0 ? (
                            <h2>Tidak ada data Jadwal yang dipesan</h2>
                        ) : (
                            <>
                                {jadwalPesan.map((data, index) => (
                                    <h3>{data}</h3>
                                ))}
                            </>
                        )}
                        {/* <Link href={{
                        pathname: '/pembayaran',
                        query: {
                            idLapangan: props._id
                        }

                    }}> */}
                        <button type='button' className='btn btn-fill text-white mt-3' onClick={checkValue}>Pesan</button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>

    )
}
