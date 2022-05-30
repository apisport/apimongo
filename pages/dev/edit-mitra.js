//@ts-check
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Register() {

    //Req.Query
    let router = useRouter()
    const {
        namaVenue,
        namaPemilikVenue,
        alamat,
        noWa,
        instagram,
        kategori,
        hariOperasional,
        jamOperasional,
        fasilitas,
        opsiBayarStringify,
        rekeningStringify,
        namaAdmin,
        noWaAdmin,
        username,
        password,
        fotoVenueStringify,
        objectId
    } = router.query

    //State of Art
    const [_namaVenue, setNamaVenue] = useState('');
    const [_namaPemilikVenue, setNamaPemilikVenue] = useState('');
    const [_alamat, setAlamat] = useState('');
    const [_noWa, setNoWa] = useState('');
    const [_instagram, setInstagram] = useState('');
    const [_kategori, setKategori] = useState('');
    const [_hariOperasional, setHariOperasional] = useState('');
    const [_jamOperasional, setJamOperasional] = useState('');
    const [_fasilitas, setFasilitas] = useState('');
    const [_opsiBayar, setOpsiBayar] = useState([]);
    const [_rekening, setRekening] = useState([]);

    //Admin Confined
    const [_namaAdmin, setNamaAdmin] = useState('');
    const [_noWaAdmin, setNoWaAdmin] = useState('');
    const [_username, setUsername] = useState('');
    const [_password, setPassword] = useState('');

    //Gambar
    const [_fotoVenue, setFotoVenue] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    //Set All
    useEffect(() => {
        if (typeof namaVenue == 'string') {
            setNamaVenue(namaVenue)

        }
        if (typeof namaPemilikVenue == 'string') {
            setNamaPemilikVenue(namaPemilikVenue)
        }
        if (typeof alamat == 'string') {
            setAlamat(alamat)
        }
        if (typeof noWa == 'string') {
            setNoWa(noWa)
        }
        if (typeof instagram == 'string') {
            setInstagram(instagram)
        }
        if (typeof kategori == 'string') {
            setKategori(kategori)
        }
        if (typeof hariOperasional == 'string') {
            let hariTemp = hariOperasional.split(" - ")
            document.getElementById('hariOperasionalMulai').value = hariTemp[0]
            document.getElementById('hariOperasionalAkhir').value = hariTemp[1]
            console.log(hariTemp)
            setHariOperasional(hariOperasional)
        }
        if (typeof jamOperasional == 'string') {
            let jamTemp = jamOperasional.split(" - ")
            document.getElementById('jamOperasionalMulai').value = jamTemp[0]
            document.getElementById('jamOperasionalAkhir').value = jamTemp[1]
            console.log(jamTemp)
            setJamOperasional(jamOperasional)

        } if (typeof fasilitas == 'string') {
            setFasilitas(fasilitas)
        } if (typeof opsiBayarStringify == 'string') {
            setOpsiBayar(Object.assign(_opsiBayar, JSON.parse(opsiBayarStringify)))
            checkOtomatis()
        } if (typeof rekeningStringify == 'string') {
            setRekening(Object.assign(_rekening, JSON.parse(rekeningStringify)))
        } if (typeof namaAdmin == 'string') {
            setNamaAdmin(namaAdmin)
        } if (typeof noWaAdmin == 'string') {
            setNoWaAdmin(noWaAdmin)
        } if (typeof username == 'string') {
            setUsername(username)
        } if (typeof password == 'string') {
            setPassword(password)
        } if (typeof fotoVenueStringify == 'string') {
            setFotoVenue(Object.assign(_fotoVenue, JSON.parse(fotoVenueStringify)))
        }
    }, [namaVenue,
        namaPemilikVenue,
        alamat,
        noWa,
        instagram,
        kategori,
        hariOperasional,
        jamOperasional,
        fasilitas,
        opsiBayarStringify,
        rekeningStringify,
        namaAdmin,
        noWaAdmin,
        username,
        password,
        fotoVenueStringify,
        objectId])

    //UPDATE
    const handlePost = async (e) => {
        e.preventDefault();
        setCheck()
        setJam()
        setHari()
        // reset error and message
        setError('');
        setMessage('');

        // fields check
        try {
            // Update post
            await fetch('/api/mitradb', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namaVenue: _namaVenue,
                    namaPemilikVenue: _namaPemilikVenue,
                    alamat: _alamat,
                    noWa: _noWa,
                    instagram: _instagram,
                    kategori: _kategori,
                    hariOperasional: _hariOperasional,
                    jamOperasional: _jamOperasional,
                    fasilitas: _fasilitas,
                    opsiBayar: _opsiBayar,
                    rekening: _rekening,
                    namaAdmin: _namaAdmin,
                    noWaAdmin: _noWaAdmin,
                    username: _username,
                    password: _password,
                    fotoVenue: _fotoVenue,
                    objectId: objectId
                }),
            });
            // reload the page
            alert('Data sukses diupdate')
            return router.push('/dev/mitra-dev');
        } catch (error) {
            // Stop publishing state
            console.log('Not Working')
        }
    };

    const setJam = () => {
        let jamMulai = document.getElementById('jamOperasionalMulai').value
        let jamAkhir = document.getElementById('jamOperasionalAkhir').value
        let jadi = `${jamMulai} - ${jamAkhir}`
        setJamOperasional(jadi)
        console.log(jamOperasional)
    }

    const setHari = () => {
        let hariMulai = document.getElementById('hariOperasionalMulai').value
        let hariAkhir = document.getElementById('hariOperasionalAkhir').value
        let jadi = `${hariMulai} - ${hariAkhir}`
        setHariOperasional(jadi)
        console.log(hariOperasional)
    }

    const setCheck = () => {
        setOpsiBayar([])
        let check = document.getElementsByName('opsiBayar')
        let len = check.length
        for (var i = 0; i < len; i++) {
            if (check[i].checked) {
                setOpsiBayar(arr => [...arr, check[i].value]);
            }
        }

    };

    const onAddItemArray = () => {
        setCheck()
        setHari()
        setJam()
        let valueBank = document.getElementById('bank').value
        let valueNoRek = document.getElementById('rekening').value
        let jadi = `${valueBank} - ${valueNoRek}`
        setRekening(arr => [...arr, jadi]);
        document.getElementById('bank').value = ''
        document.getElementById('rekening').value = ''
    };

    const checkOtomatis = () => {
        let check = document.getElementsByName('opsiBayar')
        let len = check.length
        let valueCheck = []
        for (let i = 0; i < len; i++) {
            valueCheck[i] = check[i].value
        }
        for (var i = 0; i < len; i++) {
            if (valueCheck.indexOf(_opsiBayar[i]) != -1) {
                let indexCheck = valueCheck.indexOf(_opsiBayar[i])
                check[indexCheck].checked = true
            }
        }
    }

    const removeItemArray = (data) => {
        var index = _rekening.indexOf(data)
        if (index >= 0) {
            if (_rekening.length === 0) {
                setRekening([])
            } else {
                setRekening(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
            }
        }

        console.log('afterState:')

    };

    const removeItemArrayGambar = (data) => {
        var index = _fotoVenue.indexOf(data)
        if (index >= 0) {
            if (_fotoVenue.length === 0) {
                setFotoVenue([])
                setImage([])
                setCreateObjectURL([])
            } else {
                setFotoVenue(array => [...array.slice(0, index), ...array.slice(index + 1)])
                setImage(array => [...array.slice(0, index), ...array.slice(index + 1)])
                setCreateObjectURL(array => [...array.slice(0, index), ...array.slice(index + 1)])
            }
        }

        console.log('afterState:')

    };


    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            var x = document.getElementById("image");

            const i = event.target.files[0];
            setFotoVenue(array => [...array, i.name])
            setImage(array => [...array, i]);
            setCreateObjectURL(array => [...array, URL.createObjectURL(i)]);
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

    function myFunction() {
        var x = document.getElementById("passwordInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        console.log(hariOperasional)
        console.log(jamOperasional)
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <form className="login100-form validate-form" onSubmit={handlePost}>
                    <span className="login100-form-title">
                        EDIT MITRA
                    </span>
                    <div className="p-3 py-5">
                        <div className="row">
                            <div className=" col-md-12">
                                <label className="labels">Nama Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    name="nama"
                                    value={_namaVenue}
                                    onChange={(e) => setNamaVenue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Nama Pemilik Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    name="nama"
                                    value={_namaPemilikVenue}
                                    onChange={(e) => setNamaPemilikVenue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Alamat</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <textarea type="text" className="form-control"
                                    required
                                    value={_alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">No. WA Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_noWa}
                                    onChange={(e) => setNoWa(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Instagram</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_instagram}
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="form-group mt-2 col-md-12">
                                <label htmlFor="exampleFormControlSelect1">Kategori Olahraga</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <select className="form-control form-select" onChange={(e) => setKategori(e.target.value)} value={_kategori} required>
                                    <option>--Pilih Olahraga--</option>
                                    <option value={'Futsal'}>Futsal</option>
                                    <option value={'Bulu Tangkis'}>Bulu Tangkis</option>
                                    <option value={'Basket'}>Basket</option>
                                    <option value={'Voli'}>Voli</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="mt-2 col-md-12"><label className="labels">Hari Operasional</label>
                                <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <div className='row'>
                                    <div className='col-5 col-lg-5 mb-2'>
                                        <select className="form-control form-select" id="hariOperasionalMulai" onChange={() => setHari()}>
                                            <option>Mulai</option>
                                            <option value={'Senin'}>Senin</option>
                                            <option value={'Selasa'}>Selasa</option>
                                            <option value={'Rabu'}>Rabu</option>
                                            <option value={'Kamis'}>Kamis</option>
                                            <option value={"Jum'at"}>Jum'at</option>
                                            <option value={'Sabtu'}>Sabtu</option>
                                            <option value={'Minggu'}>Minggu</option>
                                        </select>
                                    </div>
                                    <div className='col-2 col-lg-2 mb-2 text-center'>
                                        <strong>_</strong>
                                    </div>
                                    <div className='col-5 col-lg-5 mb-2'>
                                        <select className="form-control form-select" id="hariOperasionalAkhir" onChange={() => setHari()}>
                                            <option>Akhir</option>
                                            <option value={'Senin'}>Senin</option>
                                            <option value={'Selasa'}>Selasa</option>
                                            <option value={'Rabu'}>Rabu</option>
                                            <option value={'Kamis'}>Kamis</option>
                                            <option value={"Jum'at"}>Jum'at</option>
                                            <option value={'Sabtu'}>Sabtu</option>
                                            <option value={'Minggu'}>Minggu</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="mt-2 col-md-12"><label className="labels">Jam Operasional</label>
                                <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <div className='row'>
                                    <div className='col-5 col-lg-5 mb-2'>
                                        <input type="time" className="form-control " id="jamOperasionalMulai" onChange={() => setJam()} required /></div>
                                    <div className='col-2 col-lg-2 mb-2 text-center'>
                                        <strong>_</strong>
                                    </div>
                                    <div className='col-5 col-lg-5 mb-2'>
                                        <input type="time" className="form-control" id="jamOperasionalAkhir" onChange={() => setJam()} required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Hari Operasional</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_hariOperasional}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Jam Operasional</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_jamOperasional}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Fasilitas</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <textarea type="text" className="form-control"
                                    required
                                    value={_fasilitas}
                                    onChange={(e) => setFasilitas(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12"><label className="labels">Opsi Pembayaran</label>
                                <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" value={'Full Bayar Transfer'} type="checkbox" id="flexCheckDefault" onClick={() => setCheck()} name='opsiBayar' />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Full Bayar Transfer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" value={'DP'} type="checkbox" onClick={() => setCheck()} id="flexCheckChecked" name='opsiBayar' />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            DP
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" value={'Bayar di Tempat'} type="checkbox" onClick={() => setCheck()} defaultValue id="flexCheckChecked" name='opsiBayar' />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Bayar Di Tempat
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Tambah Rekening</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                            </div>
                            <div className="d-flex flex-row">
                                <div className='row'>
                                    <div className='btn-group col-12 col-lg- mb-2'>
                                        <input type="text" className='form-control col-3 col-md-3' id='bank' />
                                        <strong className='col-1 col-md-1'>_</strong>
                                        <input type="text" className="form-control col-6 col-md-6" id='rekening' />
                                        <button onClick={onAddItemArray} type='button' className="form-control col-2 col-md-2"><i className="fa fa-plus"></i></button>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-2 col-md-12"><label className="labels">Daftar Rekening</label>
                            </div>
                            {_rekening.length === 0 ? (
                                <h2>Isi Daftar Rekening</h2>
                            ) : (
                                <>

                                    {_rekening.map((data, i) => (
                                        <div className="btn-group col-md-12">
                                            <input type="text" id={i} className="form-control col-10 mt-2 col-md-10" value={data} readOnly />
                                            <button className="form-control col-2 mt-2 col-sm-2" type='button'
                                                onClick={() => removeItemArray(data)}
                                            >
                                                <i className="fa fa-trash"></i></button>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <hr></hr>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Nama Admin</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_namaAdmin}
                                    onChange={(e) => setNamaAdmin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">No WA Admin</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_noWaAdmin}
                                    onChange={(e) => setNoWaAdmin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Username</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Password</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    value={_password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            {_fotoVenue.length === 0 ? (
                                <h2>Daftar Foto</h2>
                            ) : (
                                <>

                                    {_fotoVenue.map((data, i) => (
                                        <>
                                            <div className='cols-2 mt-3 mb-3 row row-cols-2'>
                                                <div className='cols-1 col-md-6'>
                                                    <img id='image' className='img-fluid d-block border border-dark' width={150} height={150} src={`/uploads/${data}`} />
                                                </div>


                                            </div>
                                        </>


                                    ))}
                                </>
                            )}
                        </div>


                        <div className="row mt-3 container-login100-form-btn my-3 g-3">
                            <button type="button"
                                onClick={handlePost}
                                className="btn btn-outline-secondary mx-3" style={{ backgroundColor: '#ba8b1e', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>
                                EDIT MITRA
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
