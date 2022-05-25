import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [namaVenue, setNamaVenue] = useState('');
  const [namaPemilikVenue, setNamaPemilikVenue] = useState('');
  const [alamat, setAlamat] = useState('');
  const [noWa, setNoWa] = useState('');
  const [instagram, setInstagram] = useState('');
  const [kategori, setKategori] = useState('');
  const [hariOperasional, setHariOperasional] = useState('');
  const [jamOperasional, setJamOperasional] = useState('');
  const [fasilitas, setFasilitas] = useState('');
  const [opsiBayar, setOpsiBayar] = useState([]);
  const [rekening, setRekening] = useState([]);

  //Admin Confined
  const [namaAdmin, setNamaAdmin] = useState('');
  const [noWaAdmin, setNoWaAdmin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Gambar
  const [fotoVenue, setFotoVenue] = useState('');
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  let router = useRouter()

  const handlePost = async (e) => {
    e.preventDefault();
    setCheck()
    setJam()
    setHari()
    // reset error and message
    setError('');
    setMessage('');
    // fields check
    if (!namaVenue || !namaPemilikVenue || !alamat || !noWa || !instagram || !kategori || !hariOperasional ||
      !jamOperasional || !fasilitas || !opsiBayar || !rekening || !namaAdmin || !noWaAdmin || !username || !password || !fotoVenue) {
      alert('Harap untuk mengisi semua data');
      return setError('Isi Semua Data');
    }


    // post structure
    let mitraPending = {
      namaVenue,
      namaPemilikVenue,
      alamat,
      noWa,
      instagram,
      kategori,
      hariOperasional,
      jamOperasional,
      fasilitas,
      opsiBayar,
      rekening,
      namaAdmin,
      noWaAdmin,
      username,
      password,
      fotoVenue

    };
    // save the post
    let response = await fetch('/api/mitrapendingdb', {
      method: 'POST',
      body: JSON.stringify(mitraPending),
    });
    // get the data
    let data = await response.json();
    if (data.success) {
      // reset the fields
      alert('Register berhasil! Mohon Tunggu untuk Persetujuan')
      router.push('/')
      return setMessage(data.message);
    }
    else {
      // set the error
      console.log(data.message);
      return setError(data.message);
    }
  };

  const setJam = () => {
    let valueJamMulai = document.getElementById('jamOperasionalMulai').value
    let valueJamAkhir = document.getElementById('jamOperasionalAkhir').value
    let jadi = `${valueJamMulai} - ${valueJamAkhir}`
    setJamOperasional(jadi)
  }

  const setHari = () => {
    let hariMulai = document.getElementById('hariOperasionalMulai').value
    let hariAkhir = document.getElementById('hariOperasionalAkhir').value
    let jadi = `${hariMulai} - ${hariAkhir}`
    setHariOperasional(jadi)
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
    console.log(`Alamat: ${alamat}`)
    console.log(`Fasilitas: ${fasilitas}`)


  };

  const removeItemArray = (data) => {
    console.log(data)
    console.log('initialSTate:')
    console.log(rekening)
    var index = rekening.indexOf(data)
    if (index >= 0) {
      if (rekening.length === 0) {
        setRekening([])
      } else {
        setRekening(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
      }
    }

    console.log('afterState:')

  };


  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      var x = document.getElementById("image");
      x.width = 150
      x.height = 150
      const i = event.target.files[0];
      setFotoVenue(i.name)
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

  function myFunction() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    console.log(opsiBayar)
    console.log(rekening)
    console.log(hariOperasional)
    console.log(jamOperasional)
  }
  return (
    <div className="limiter">
      <div className="container-login100" style={{ backgroundImage: 'url("./bg-01.jpg")' }}>
        <div className="wrap-login100 p-3">
          <form className="login100-form validate-form" onSubmit={handlePost}>
            <div className="text-center">
              <img src="./y.png" style={{ height: '5cm', width: '5cm' }} />
            </div>
            <span className="login100-form-title p-b-12" >
              DAFTAR
            </span>
            <div className="p-3 py-3">
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Nama Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text"
                    className="form-control"
                    placeholder="Nama Venue"
                    value={namaVenue}
                    onChange={(e) => setNamaVenue(e.target.value)}
                    required />
                </div>
                <div className="col-md-12 mt-2">
                  <label className="labels">Nama Pemilik Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control"
                    value={namaPemilikVenue}
                    onChange={(e) => setNamaPemilikVenue(e.target.value)}
                    placeholder="Nama Pemilik Lapangan"
                    required />
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Alamat</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <textarea class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Masukkan Alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    required></textarea>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">No . WhatsApp Venue</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text"
                    className="form-control"
                    placeholder="Masukkan No. WhatsApp"
                    value={noWa}
                    onChange={(e) => setNoWa(e.target.value)}
                    required />
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Instagram</label>
                  <input type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="form-control"
                    placeholder="Masukkan Media Sosial" />
                </div>
                <div className="form-group mt-2 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Kategori Olahraga</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <select className="form-control form-select" onChange={(e) => setKategori(e.target.value)} required>
                    <option>--Pilih Olahraga--</option>
                    <option value={'Futsal'}>Futsal</option>
                    <option value={'Bulu Tangkis'}>Bulu Tangkis</option>
                    <option value={'Basket'}>Basket</option>
                    <option value={'Voli'}>Voli</option>
                  </select>
                </div>

                <div className="mt-2 col-md-12"><label className="labels">Hari Operasional</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div className='row'>
                    <div className='col-5 col-lg-5 mb-2'>
                      <select className="form-control form-select" id="hariOperasionalMulai">
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
                      <select className="form-control form-select" id="hariOperasionalAkhir">
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

                <div className="mt-2 col-md-12"><label className="labels">Jam Operasional</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div className='row'>
                    <div className='col-5 col-lg-5 mb-2'>
                      <input type="time" className="form-control " placeholder="Mulai" id="jamOperasionalMulai" required /></div>
                    <div className='col-2 col-lg-2 mb-2 text-center'>
                      <strong>_</strong>
                    </div>
                    <div className='col-5 col-lg-5 mb-2'>
                      <input type="time" className="form-control" placeholder="Akhir" id="jamOperasionalAkhir" required />
                    </div>
                  </div>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Foto Venue</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-2 imgUp">
                        <div className="" />
                        <img src=''></img>
                        <label className="btn btn-primary">
                          Upload
                          <input type="file"
                            className="uploadFile img"
                            defaultValue="Upload Photo"
                            onChange={uploadToClient}

                            style={{ width: 0, height: 0, overflow: 'hidden' }} />
                        </label>
                      </div>
                    </div>
                    <div className="mt-1 mb-2 d-flex flex-row justify-content-center">
                      <img id='image' className='img-fluid d-block  rounded-circle' src={createObjectURL} />
                    </div>
                  </div>
                </div>

                <div className="mt-2 col-md-12"><label className="labels">Opsi Pembayaran</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" value={'Full Bayar Transfer'} type="checkbox" id="flexCheckDefault" name='opsiBayar' />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Full Bayar Transfer
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" value={'DP'} type="checkbox" id="flexCheckChecked" name='opsiBayar' />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        DP
                      </label>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" value={'Bayar di Tempat'} type="checkbox" defaultValue id="flexCheckChecked" name='opsiBayar' />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Bayar Di Tempat
                    </label>
                  </div>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Fasilitas</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <textarea class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Masukkan Fasilitas"
                    required
                    value={fasilitas}
                    onChange={(e) => setFasilitas(e.target.value)}></textarea>
                </div>
                <div className="mt-2 col-md-12">
                  <label className="labels">Tambah Rekening</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                </div>
                <div className="d-flex flex-row">
                  <div className='row'>
                    <div className='btn-group col-12 col-lg- mb-2'>
                      <input type="text" className='form-control col-3 col-md-3' placeholder="Bank" id='bank' />
                      <strong className='col-1 col-md-1'>_</strong>
                      <input type="text" className="form-control col-6 col-md-6" placeholder="No. Rekening" id='rekening' />
                      <button onClick={onAddItemArray} className="form-control col-2 col-md-2"><i className="fa fa-plus"></i></button>
                    </div>
                  </div>

                </div>
                <div className="mt-2 col-md-12"><label className="labels">Daftar Rekening</label>
                </div>
                {rekening.length === 0 ? (
                  <h2>Isi Daftar Rekening</h2>
                ) : (
                  <>

                    {rekening.map((data, i) => (
                      <div className="btn-group col-md-12">
                        <input type="text" id={i} className="form-control col-10 mt-2 col-md-10" value={data} readOnly />
                        <button className="form-control col-2 mt-2 col-sm-2"
                          onClick={() => removeItemArray(data)}
                        >
                          <i className="fa fa-trash"></i></button>
                      </div>
                    ))}
                  </>
                )}

                <div className="mt-2 col-md-12">
                  <hr className='mt-3'></hr>
                </div>

                {/* Bagian Admin */}
                <div className="mt-1 col-md-12">
                  <label className="labels">Nama Admin</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text"
                    className="form-control"
                    placeholder="Nama Admin"
                    value={namaAdmin}
                    onChange={(e) => setNamaAdmin(e.target.value)}
                    required />
                </div>
                <div className="mt-1 col-md-12">
                  <label className="labels">No. Whatsapp Admin</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control"
                    placeholder="Username"
                    value={noWaAdmin}
                    onChange={(e) => setNoWaAdmin(e.target.value)}
                    required />
                </div>
                <div className="mt-1 col-md-12">
                  <label className="labels">Username</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                </div>
                <div className="mt-2 col-md-12">
                  <label className="labels">Password</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                </div>
                <div className="btn-group col-md-12">
                  <input type="password"
                    className="form-control col-10 col-sm-10"
                    id='passwordInput'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" required />
                  <button onClick={() => { myFunction() }} className="form-control col-2 col-sm-2"><i className="fa fa-eye"></i></button>
                </div>
              </div>
              <div class="container-login100-form-btn my-3">
                <button type="submit"
                  onClick={uploadToServer}
                  className="btn btn-outline-secondary" style={{ backgroundColor: '#006E61', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>DAFTAR</button>
              </div>
              <div className="flex-col-c mt-3">
                <span className="txt1 p-b-10">
                  Sudah punya akun?
                  <a href="./login" className="txt2">
                    &nbsp;<u>LOGIN</u>
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
