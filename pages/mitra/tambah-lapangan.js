import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Addlapangan() {
    const [namaVenue, setNamaVenue] = useState('Scudetto');
    const [namaLapangan, setNamaLapangan] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [jadwalPagi, setJadwalPagi] = useState({});
    const [jadwalMalam, setJadwalMalam] = useState({});
    const [jadwalTampilan, setJadwalTampilan] = useState([]);
    const [hargaTampilan, setHargaTampilan] = useState([]);
    const [hargaPagi, setHargaPagi] = useState(0);
    const [hargaMalam, setHargaMalam] = useState(0);
    const [gambar, setGambar] = useState('');
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    let router = useRouter()
    const handlePost = async (e) => {
        e.preventDefault();
        // reset error and message
        setError('');
        setMessage('');
        // fields check
        if (!namaVenue || !namaLapangan || !deskripsi || !gambar || !jadwalPagi || !jadwalMalam || !hargaPagi || !hargaMalam) {
            alert('Harap untuk mengisi semua data');
            return setError('All fields are required');
        }


        // post structure
        let lapangan = {
            namaVenue,
            namaLapangan,
            deskripsi,
            gambar,
            jadwalPagi,
            jadwalMalam,
            hargaPagi,
            hargaMalam

        };
        // save the post
        let response = await fetch('/api/lapangandb', {
            method: 'POST',
            body: JSON.stringify(lapangan),
        });
        // get the data
        let data = await response.json();
        if (data.success) {
            // reset the fields
            alert('tambah lapangan berhasil!')
            setNamaVenue('');
            setNamaLapangan('');
            setDeskripsi('');
            setJadwalPagi({});
            setJadwalMalam({});
            setHargaPagi('');
            setHargaMalam('');
            setGambar('');
            setImage(null);
            setCreateObjectURL(null);
            router.push('/mitra/home')
            // set the message
            return setMessage(data.message);
        }
        else {
            // set the error
            console.log(data.message);
            return setError(data.message);
        }
    };
    const bagiJamPagi = () => {
        let pagiMulai = parseInt(document.getElementById('jamPagiMulai').value);
        let pagiAkhir = parseInt(document.getElementById('jamPagiAkhir').value);
        let selisih = pagiAkhir - pagiMulai
        console.log(`Initial value: ${pagiMulai}`)
        if (Object.keys(jadwalPagi).length > 0) {
            for (let key in jadwalPagi) {
                delete jadwalPagi[key]
            }
            for (let i = 0; i < selisih; i++) {
                if (pagiMulai < 10 && (pagiMulai + 1) >= 10) {
                    setJadwalPagi(Object.assign(jadwalPagi, { [`0${pagiMulai}.00-${pagiMulai + 1}.00`]: 'kosong' }))
                } else if (pagiMulai < 10 && (pagiMulai + 1) < 10) {
                    setJadwalPagi(Object.assign(jadwalPagi, { [`0${pagiMulai}.00-0${pagiMulai + 1}.00`]: 'kosong' }))
                } else {
                    setJadwalPagi(Object.assign(jadwalPagi, { [`${pagiMulai}.00-${pagiMulai + 1}.00`]: 'kosong' }))
                }
                pagiMulai = pagiMulai + 1
            }
        } else {
            for (let i = 0; i < selisih; i++) {
                if (pagiMulai < 10 && (pagiMulai + 1) >= 10) {
                    setJadwalPagi(Object.assign(jadwalPagi, { [`0${pagiMulai}.00-${pagiMulai + 1}.00`]: 'kosong' }))
                } else if (pagiMulai < 10 && (pagiMulai + 1) < 10) {
                    setJadwalPagi(Object.assign(jadwalPagi, { [`0${pagiMulai}.00-0${pagiMulai + 1}.00`]: 'kosong' }))
                } else {
                    setJadwalPagi(Object.assign(jadwalPagi, { [`${pagiMulai}.00-${pagiMulai + 1}.00`]: 'kosong' }))
                }
                pagiMulai = pagiMulai + 1
            }
        }

        console.log('Jadwal Pagi:')
        console.log(pagiMulai)
        console.log(jadwalPagi)
        return selisih
    }

    const bagiJamMalam = () => {
        let malamMulai = parseInt(document.getElementById('jamMalamMulai').value);
        let malamAkhir = parseInt(document.getElementById('jamMalamAkhir').value);
        let selisih = malamAkhir - malamMulai
        if (Object.keys(jadwalMalam).length > 0) {
            for (let key in jadwalMalam) {
                delete jadwalMalam[key]
            }
            for (let i = 0; i < selisih; i++) {
                if (malamMulai < 10 && (malamMulai + 1) >= 10) {
                    setJadwalMalam(Object.assign(jadwalMalam, { [`0${malamMulai}.00-${malamMulai + 1}.00`]: 'kosong' }))
                } else if (malamMulai < 10 && (malamMulai + 1) < 10) {
                    setJadwalMalam(Object.assign(jadwalMalam, { [`0${malamMulai}.00-0${malamMulai + 1}.00`]: 'kosong' }))
                } else {
                    setJadwalMalam(Object.assign(jadwalMalam, { [`${malamMulai}.00-${malamMulai + 1}.00`]: 'kosong' }))
                }
                malamMulai = malamMulai + 1
            }
        } else {
            for (let i = 0; i < selisih; i++) {
                if (malamMulai < 10 && (malamMulai + 1) >= 10) {
                    setJadwalMalam(Object.assign(jadwalMalam, { [`0${malamMulai}.00-${malamMulai + 1}.00`]: 'kosong' }))
                } else if (malamMulai < 10 && (malamMulai + 1) < 10) {
                    setJadwalMalam(Object.assign(jadwalMalam, { [`0${malamMulai}.00-0${malamMulai + 1}.00`]: 'kosong' }))
                } else {
                    setJadwalMalam(Object.assign(jadwalMalam, { [`${malamMulai}.00-${malamMulai + 1}.00`]: 'kosong' }))
                }
                malamMulai = malamMulai + 1
            }
        }

        console.log('Jadwal Malam:')
        console.log(malamMulai)
        console.log(jadwalMalam)
        return selisih
    }

    const gabungJadwal = () => {
        let keyJadwalPagi = Object.keys(jadwalPagi)
        let keyJadwalMalam = Object.keys(jadwalMalam)
        let gabunganJadwal = keyJadwalPagi.concat(keyJadwalMalam)
        return gabunganJadwal
    }

    const gabungHarga = () => {
        let gabunganHarga = []

        //Pagi
        let pagiMulai = parseInt(document.getElementById('jamPagiMulai').value);
        let pagiAkhir = parseInt(document.getElementById('jamPagiAkhir').value);
        let selisihPagi = pagiAkhir - pagiMulai
        for (let i = 0; i < selisihPagi; i++) {
            gabunganHarga.push(hargaPagi)
        }

        //Malam
        let malamMulai = parseInt(document.getElementById('jamMalamMulai').value);
        let malamAkhir = parseInt(document.getElementById('jamMalamAkhir').value);
        let selisihMalam = malamAkhir - malamMulai
        for (let i = 0; i < selisihMalam; i++) {
            gabunganHarga.push(hargaMalam)
        }

        return gabunganHarga
    }

    const lihatJadwal = () => {

        bagiJamPagi()
        bagiJamMalam()
        let gabunganJadwal = gabungJadwal()
        let gabunganHarga = gabungHarga()
        setJadwalTampilan(gabunganJadwal)
        setHargaTampilan(gabunganHarga)
        console.log(jadwalTampilan)
        console.log(hargaTampilan)
        
        // console.log('Jadwal Gabung')
        // console.log(gabunganJadwal)
        // console.log('Harga Gabung')
        // console.log(gabunganHarga)

    }

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            var x = document.getElementById("image");
            x.width = 300
            x.height = 300
            const i = event.target.files[0];
            setGambar(i.name)
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    const uploadToServer = async (event) => {
        const body = new FormData();
        //console.log("file", image)
        body.append("file", image);
        const response = await fetch("/api/upload", {
            method: "POST",
            body
        });
    };

    return (
        <div className="container-xxl mx-auto p-4 header-2-2">
            <h1 style={{ color: 'black' }}>Tambah Lapangan</h1>

            <div >
                <form className='' onSubmit={handlePost}>
                    {error ? (
                        <div >
                            <h3 >{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div >
                            <h3 >{message}</h3>
                        </div>
                    ) : null}
                    <div className="col-md-12">
                        <label className="labels">Nama Lapangan</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                        <input type="text" className="form-control"
                            name="namaLapangan"
                            value={namaLapangan}
                            onChange={(e) => setNamaLapangan(e.target.value)}
                            required />
                    </div>
                    <div className="mt-2 col-md-12"><label className="labels ">Deskripsi Lapangan</label>
                        <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                        <textarea className="form-control mb-3"
                            id="exampleFormControlTextarea1" rows={3}
                            name="deskripsi"
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            required />
                    </div>
                    <div className="mt-2 col-12 col-md-12"><label className="labels">Foto Lapangan</label>
                        <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                        <div className="mt-2 col-md-12">
                            <div className="custom-file">
                                <input type="file" onChange={uploadToClient} className="custom-file-input" id="validatedCustomFile" name="myImage" required />
                                <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className='col-6 col-lg-12 mb-4'>
                            <img className='img-fluid rounded d-block' id='image' src={createObjectURL} />
                        </div>
                    </div>
                    <div className='card p-3'>
                        <h4 className="labels" style={{ color: 'black' }}>Atur Jadwal dan Harga</h4>
                        <div className=" mt-2 col-md-12" style={{ color: 'black' }}><label className="labels">Jam Operasional</label>
                            <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                            <div className='row'>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time" className="form-control " placeholder="Mulai"
                                        id='jamPagiMulai'
                                        required />
                                </div>
                                <div className='col-1 col-lg-1 mb-2 text-center'>
                                    <strong>_</strong>
                                </div>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time" className="form-control" placeholder="Akhir" required
                                        id='jamPagiAkhir'
                                    />
                                </div>
                                <div className='col-5 col-lg-5 mb-2'>
                                    <div className='d-flex flex-row'>
                                        <div className='col-2 col-sm-2'>
                                            <input className="form-control" value={'Rp'} readOnly required />
                                        </div>
                                        <div className='col-7 col-sm-6'>
                                            <input type="number" className="form-control" placeholder="Harga Pagi"
                                                required
                                                value={hargaPagi}
                                                onChange={(e) => setHargaPagi(e.target.value)}
                                            />
                                        </div>
                                        <div className='col-3 col-sm-4'>
                                            <input type="text" className="form-control" value={'.000,-'} readOnly required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time" className="form-control "
                                        id='jamMalamMulai'
                                        placeholder="Mulai" required /></div>
                                <div className='col-1 col-lg-1 mb-2 text-center'>
                                    <strong>_</strong>
                                </div>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time"
                                        id='jamMalamAkhir'
                                        className="form-control" placeholder="Akhir" required />
                                </div>
                                <div className='col-5 col-lg-5 mb-2'>
                                    <div className='d-flex flex-row'>
                                        <div className='col-2 col-sm-2'>
                                            <input className="form-control" value={'Rp'} readOnly required />
                                        </div>
                                        <div className='col-7 col-sm-6'>
                                            <input type="number" className="form-control"
                                                placeholder="Harga Malam"
                                                value={hargaMalam}
                                                onChange={(e) => setHargaMalam(e.target.value)}
                                                required />
                                        </div>
                                        <div className='col-3 col-sm-4'>
                                            <input type="text" className="form-control" value={'.000,-'} readOnly required />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='d-flex-end flex-row justify-content-end mt-3'>
                                <input type='button' className='btn-fill text-white' onClick={lihatJadwal} value ='CEKJADWAL'/>
                            </div>

                        </div>
                    </div>
                    <div className='mt-3'>
                        <h4>Jadwal</h4>
                        <hr></hr>
                        <div className='row' id='divJadwal'>

                            {jadwalTampilan.length === 0 ? (
                                <h2>Isi daftar tim</h2>
                            ) : (
                                <>

                                        {jadwalTampilan.map((data, i) => (
                                            <div className='col-3 col-sm-3 mb-2'>
                                                <div className='card text-center'>
                                                    <div className='card-body'>
                                                        <span>{data}</span><br></br>
                                                        <span>Rp {hargaTampilan[i]}.000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="container-login100-form-btn">
                                            <button type="submit" className="btn btn-outline-secondary"
                                                style={{
                                                    backgroundColor: '#006E61', color: 'rgb(255, 255, 255)',
                                                    borderRadius: '5cm', width: 500, height: 50
                                                }}
                                                onClick={uploadToServer}
                                            >SIMPAN</button>
                                        </div>
                                </>
                            )}

                        </div>

                    </div>
                </form>

            </div>

        </div>
    )

}