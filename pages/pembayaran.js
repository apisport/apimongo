
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " | "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  const [nama, setNama] = useState('Yosi');
  const [noWa, setNoWa] = useState('081');
  const [tim, setTim] = useState('Ambyar FC');
  const [namaVenue, setNamaVenue] = useState('Scuttod');
  const [tglBooking, setTglBooking] = useState('20-03-2022');
  const [tglMain, setTglMain] = useState('2022-06-08');
  const [jadwalMain, setJadwalMain] = useState(['18.00-19.00', '20.00-21.00']);
  const [lapangan, setLapangan] = useState('Lapangan 2');
  const [harga, setHarga] = useState(50);
  const [status, setStatus] = useState('pending');
  const [noRekening, setNoRekening] = useState('2342543 - Bank BCA');
  const [opsiBayar, setOpsiBayar] = useState('DP');
  const [diterima, setDiterima] = useState(dateTime);
  const [buktiBayar, setBuktiBayar] = useState('');
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
    if (!nama || !noWa || !tim || !noRekening || !opsiBayar || !buktiBayar || !namaVenue || !tglBooking || !tglMain || !jadwalMain || !harga || !status)
      return setError('All fields are required');
    // post structure
    let transaksi = {
      nama,
      lapangan,
      noWa,
      tim,
      noRekening,
      opsiBayar,
      buktiBayar,
      namaVenue,
      tglBooking,
      tglMain,
      jadwalMain,
      harga,
      diterima,
      status
    };
    // save the post
    let response = await fetch('/api/transaksidb', {
      method: 'POST',
      body: JSON.stringify(transaksi),
    });
    // get the data
    let data = await response.json();
    if (data.success) {
      // reset the fields
      alert('Transaksi pending, Mohn tunggu persetujuan Mitra!')
      router.push('/')
      setNama('');
      setNoWa('');
      setTim('');
      setNamaVenue('');
      setTglBooking('');
      setTglMain('');
      setNoRekening('');
      setJadwalMain('');
      setHarga('');
      setStatus('');
      setOpsiBayar('');
      setBuktiBayar('');
      setLapangan('');
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

  const aturOpsiBayar = (value) => {
    if (value === 'DP' || value === 'Bayar di tempat') {
      setStatus('pending')
    } else (
      setStatus('lunas')
    )
  }

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setBuktiBayar(i.name)
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
    <div className="container-xxl p-3">
      <div className="d-flex flex-row justify-content-center">
        <h1 className="mb-3">Form Pembayaran</h1>
      </div>

      <div className="p-3">
        <div className="container-xxl card p-3 shadow-lg">
          <div className="row">
            <div className="px-md-5 p-3 col-md-6 d-flex flex-column align-items-start justify-content-center" >
              <h1>Nama Mitra</h1>
              <p className="mb-3 lead">Lapangan 1</p>
              <p className="mb-2">Sabtu 5 Maret 2022</p>
              <div className="row">
                <div className="col-4 col-lg-4 mr-auto">
                  <button type="button" class="btn btn-sm btn-primary text-white" disabled>16.00 - 17.00<br />Rp 100.000</button>
                </div>
                <div className="col-4 col-lg-4 mr-auto">
                  <button type="button" class="btn btn-sm btn-primary text-white" disabled>16.00 - 17.00<br />Rp 100.000</button>
                </div>
                <div className="col-4 col-lg-4 mr-auto">
                  <button type="button" class="btn btn-sm btn-primary text-white" disabled>16.00 - 17.00<br />Rp 100.000</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3"> <img className=" d-block w-100" src="images/futsallap.jpg" height={300} /> </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="container-login100">
          <form onSubmit={handlePost}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Nama Pemesan : </label>
              <input value={nama} type="text" className="form-control" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Nama Tim</label>
              <select className="form-control form-select" id="exampleFormControlSelect1" onChange={(e) => setTim(e.target.value)}>
                <option>--Pilih Tim--</option>
                <option value={'Ambyar FC'}>Ambyar FC</option>
                <option value={'Ukrana FC'}>Ukrana FC</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">No. WA: </label>
              <input type="number" className="form-control" value={noWa} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Total Bayar : </label>
              <input type="text" className="form-control" value={`Rp ${harga}.000`} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">No. Rekening</label>
              <select className="form-control form-select" id="exampleFormControlSelect1" onChange={(e) => setNoRekening(e.target.value)}>
                <option>--No. Rekening--</option>
                <option value={'300 - Bank 333'}>123 - Bank ABC</option>
                <option value={'400 - Bank 133'}>234 - Bank</option>
              </select>
            </div>
            <div className="form-group">
              <label>Opsi Bayar</label>
              <select className=" form-select" onChange={(e) => aturOpsiBayar(e.target.value)}>
                <option>--Pilih Opsi Bayar--</option>
                <option value={'DP'}>DP</option>
                <option value={'Full Bayar'}>Full Bayar</option>
                <option value={'Bayar di Tempat'}>Bayar di Tempat</option>
              </select>
            </div>
            <div className="form-group">
              <div className="mt-2 col-md-12"><label className="labels" htmlFor="formFile">Bukti Bayar</label>
                <input type="file"
                  id="validatedCustomFile"
                  className="form-control form-file"
                  name="myImage" onChange={uploadToClient}
                  required
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <img src={createObjectURL} className="img-fluid" />
            </div>
            <div className="d-flex flex-row mt-3">
              <span className='font-weight-normal' style={{ color: 'red' }}><b>*Mohon untuk mengupload bukti pembayaran hingga 13:30 WIB atau pembayaran akan di cancel</b></span>
            </div>
            <div class="d-grid gap-2 py-4 ">
              <button class="btn btn-primary p-3 fw-bold" type="submit" onClick={uploadToServer} style={{ backgroundColor: '#006E61' }}>Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}