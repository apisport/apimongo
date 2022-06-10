//@ts-check
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react'
import useSWR from "swr";

export default function Home() {

  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " | "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  // Backup State
  // const [nama, setNama] = useState('Yosi');
  // const [noWa, setNoWa] = useState('081');
  // const [tim, setTim] = useState('Ambyar FC');
  // const [namaVenue, setNamaVenue] = useState('Scuttod');
  // const [tglBooking, setTglBooking] = useState('20-03-2022');
  // const [tglMain, setTglMain] = useState('2022-06-09');
  // const [jadwalMain, setJadwalMain] = useState([]);
  // const [lapangan, setLapangan] = useState('Lapangan 2');
  // const [harga, setHarga] = useState(50);
  // const [status, setStatus] = useState('pending');
  // const [noRekening, setNoRekening] = useState('2342543 - Bank BCA');
  // const [opsiBayar, setOpsiBayar] = useState('DP');
  // const [diterima, setDiterima] = useState(dateTime);
  // const [buktiBayar, setBuktiBayar] = useState('');
  // const [createObjectURL, setCreateObjectURL] = useState(null);
  // const [message, setMessage] = useState('');

  //Variabel Biasa
  
  let nama = ''
  let lapangan = ''
  let noWa = ''
  let timSWR = []
  const [tim, setTim] = useState('');
  let noRekeningSWR = []
  const [noRekening, setNoRekening] = useState('');
  let opsiBayarSWR = ''
  const [opsiBayar, setOpsiBayar] = useState('DP');
  const [buktiBayar, setBuktiBayar] = useState('');
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [message, setMessage] = useState('');
  let namaVenue = ''
  let tglMain = ''
  let jadwalMain = []
  let harga = 0
  const [status, setStatus] = useState('pending');
  
  
  

  //Router
  let router = useRouter()
  const { jadwalPesanReq,
    totalHargaReq,
    namaVenueReq,
    namaLapanganReq,
    tglMainReq
  } = router.query

  //Suwir
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: data, error } = useSWR(`/api/mitradb`, fetcher)

  console.log(tglMain)
  if (!data) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Something went wrong</div>
  }

  //Deklarasi Array JSON SWR
  let profil = data['message']

  //Pemanggilan Function
  const setValue = () => {
    jadwalMain = JSON.parse(jadwalPesanReq)
    harga = totalHargaReq
    namaVenue = namaVenueReq
    lapangan = namaLapanganReq
    tglMain = tglMainReq
  }
  setValue()

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
      tglMain,
      jadwalMain,
      harga,
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
            <div className="px-md-5 p-3 col-md-12 align-items-start justify-content-center" >
              <h1><b>{namaVenue}</b></h1>
              <h3 ><b>Lapangan:</b>&nbsp;{lapangan}</h3>
              <h4><b>Tgl Main:</b>&nbsp;{tglMain}</h4><br></br>
              <div className="row">
                <h3><b>Jadwal Main:</b></h3>
                {jadwalMain.map((data, i) => (
                  <>
                    <div className='col-12 col-sm-4 mb-2'>
                      <div className='card'>
                        <div className='card-body'>
                          <h2>{data}</h2>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <h5>Pesanan dibuat pada <b>{dateTime}</b></h5>
            </div>
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