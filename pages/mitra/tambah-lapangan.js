import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Addlapangan() {
    const [namaVenue, setNamaVenue] = useState('');
    const [namaLapangan, setNamaLapangan] = useState('Scudetto');
    const [deskripsi, setDeskripsi] = useState('');
    const [jadwalPagi, setJadwalPagi] = useState({});
    const [jadwalMalam, setJadwalMalam] = useState({});
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
            // set the message
            return setMessage(data.message);
        }
        else {
            // set the error
            console.log(data.message);
            return setError(data.message);
        }
    };

    const bagijampagi = () => {
        
    }
    const onAddItemArray = () => {
        setTim(tim => [...tim, timTemp]);
        setTimTemp('')
        console.log(tim)

    };
    const removeItemArray = (data) => {
        console.log(data)
        console.log('initialSTate:')
        console.log(tim)
        var index = tim.indexOf(data)
        if (index >= 0) {
            if (tim.length === 0) {
                setTim([])
            } else {
                setTim(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
            }
        }

        console.log('afterState:')
        console.log(tim)
    };


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
                                    
                                        required />
                                </div>
                                <div className='col-1 col-lg-1 mb-2 text-center'>
                                    <strong>_</strong>
                                </div>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time" className="form-control" placeholder="Akhir" required />
                                </div>
                                <div className='col-5 col-lg-5 mb-2'>
                                    <div className='d-flex flex-row'>
                                        <div className='col-2 col-sm-2'>
                                            <input className="form-control" value={'Rp'} readOnly required />
                                        </div>
                                        <div className='col-7 col-sm-6'>
                                            <input type="number" className="form-control" placeholder="Harga Pagi" required />
                                        </div>
                                        <div className='col-3 col-sm-4'>
                                            <input type="text" className="form-control" value={'.000,-'} readOnly required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time" className="form-control " placeholder="Mulai" required /></div>
                                <div className='col-1 col-lg-1 mb-2 text-center'>
                                    <strong>_</strong>
                                </div>
                                <div className='col-3 col-lg-3 mb-2'>
                                    <input type="time" className="form-control" placeholder="Akhir" required />
                                </div>
                                <div className='col-5 col-lg-5 mb-2'>
                                    <div className='d-flex flex-row'>
                                        <div className='col-2 col-sm-2'>
                                            <input className="form-control" value={'Rp'} readOnly required />
                                        </div>
                                        <div className='col-7 col-sm-6'>
                                            <input type="number" className="form-control" placeholder="Harga Malam" required />
                                        </div>
                                        <div className='col-3 col-sm-4'>
                                            <input type="text" className="form-control" value={'.000,-'} readOnly required />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='d-flex-end flex-row justify-content-end mt-3'>
                                <button className='btn-fill text-white'>Cek Jadwal</button>
                            </div>

                        </div>
                    </div>
                </form>
                <div className='mt-3'>
                    <h4>Jadwal</h4>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-sm-3 mb-2'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <span>08.00-09.00</span><br></br>
                                    <span>Rp 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="container-login100-form-btn">
                            <button type="button" className="btn btn-outline-secondary" style={{ backgroundColor: '#006E61', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>SIMPAN</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}