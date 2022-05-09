import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Helmet } from 'react-helmet'

export default function Register() {
  function myFunction() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div className="limiter">
      <div className="container-login100" style={{ backgroundImage: 'url("./bg-01.jpg")' }}>
        <div className="wrap-login100 p-3">
          <form className="login100-form validate-form">
            <div className="text-center">
              <img src="./y.png" style={{ height: '5cm', width: '5cm' }} />
            </div>
            <span className="login100-form-title p-b-12">
              DAFTAR
            </span>
            <div className="p-3 py-3">
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Nama Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control" placeholder="Nama Venue" required />
                </div>
                <div className="col-md-12 mt-2">
                  <label className="labels">Nama Pemilik Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control" placeholder="Nama Pemilik Lapangan" required />
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Alamat</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Masukkan Alamat" required></textarea>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">No . WhatsApp</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control" placeholder="Masukkan No. WhatsApp" required />
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Instagram</label>
                  <input type="text" className="form-control" placeholder="Masukkan Media Sosial" />
                </div>
                <div className="form-group mt-2 col-md-12">
                  <label htmlFor="exampleFormControlSelect1">Kategori Olahraga</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <select className="form-control form-select" id="exampleFormControlSelect1" required>
                    <option>Pilih Olahraga</option>
                    <option>Futsal</option>
                    <option>Bulu Tangkis</option>
                    <option>Basket</option>
                    <option>Voli</option>
                    <option>Billiard</option>
                  </select>
                </div>

                <div className="mt-2 col-md-12"><label className="labels">Hari Operasional</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div className='row'>
                    <div className='col-5 col-lg-5 mb-2'>
                      <select className="form-control form-select" id="exampleFormControlSelect1">
                        <option>Senin</option>
                        <option>Selasa</option>
                        <option>Rabu</option>
                        <option>Kamis</option>
                        <option>Jum'at</option>
                        <option>Sabtu</option>
                        <option>Minggu</option>
                      </select>
                    </div>
                    <div className='col-2 col-lg-2 mb-2 text-center'>
                      <strong>_</strong>
                    </div>
                    <div className='col-5 col-lg-5 mb-2'>
                      <select className="form-control form-select" id="exampleFormControlSelect1">
                        <option>Senin</option>
                        <option>Selasa</option>
                        <option>Rabu</option>
                        <option>Kamis</option>
                        <option>Jum'at</option>
                        <option>Sabtu</option>
                        <option>Minggu</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-2 col-md-12"><label className="labels">Jam Operasional</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div className='row'>
                    <div className='col-5 col-lg-5 mb-2'>
                      <input type="time" className="form-control " placeholder="Mulai" required /></div>
                    <div className='col-2 col-lg-2 mb-2 text-center'>
                      <strong>_</strong>
                    </div>
                    <div className='col-5 col-lg-5 mb-2'>
                      <input type="time" className="form-control" placeholder="Akhir" required />
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
                          <input type="file" className="uploadFile img" defaultValue="Upload Photo" style={{ width: 0, height: 0, overflow: 'hidden' }} />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="mt-2 col-md-12"><label className="labels">Opsi Pembayaran</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Full Bayar Transfer
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        DP
                      </label>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Bayar Di Tempat
                    </label>
                  </div>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Fasilitas</label>
                  <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Masukkan Fasilitas" required></textarea>
                </div>
                <div className="mt-2 col-md-12">
                  <label className="labels">Tambah Rekening</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                </div>
                <div className="d-flex flex-row">
                  <div className='row'>
                    <div className='btn-group col-12 col-lg- mb-2'>
                      <input type="text" className='form-control col-3 col-md-3' placeholder="Bank" required />
                      <strong className='col-1 col-md-1'>_</strong>
                      <input type="text" className="form-control col-6 col-md-6" placeholder="No. Rekening" required />
                      <button href='#' className="form-control col-2 col-md-2"><i className="fa fa-plus"></i></button>
                    </div>
                  </div>

                </div>
                <div className="mt-2 col-md-12"><label className="labels">Daftar Rekening</label>
                </div>
                <div className="btn-group col-md-12">
                  <input type="text" className="form-control mt-2 col-10 col-md-10" placeholder="Mandiri" readOnly />
                  <button href='#' className="form-control mt-2 col-2 col-md-2"><i className="fa fa-trash"></i></button>
                </div>

                <div className="mt-2 col-md-12">
                  <hr className='mt-3'></hr>
                </div>

                {/* Bagian Admin */}
                <div className="mt-1 col-md-12">
                  <label className="labels">Nama Admin</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control" placeholder="Username" required />
                </div>
                <div className="mt-1 col-md-12">
                  <label className="labels">No. Whatsapp Admin</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control" placeholder="Username" required />
                </div>
                <div className="mt-1 col-md-12">
                  <label className="labels">Username</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                  <input type="text" className="form-control" placeholder="Username" required />
                </div>
                <div className="mt-2 col-md-12">
                  <label className="labels">Password</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                </div>
                <div className="btn-group col-md-12">
                  <input type="password" className="form-control col-10 col-sm-10" id='passwordInput' placeholder="Password" required />
                  <button onClick={() => { myFunction() }} className="form-control col-2 col-sm-2"><i className="fa fa-eye"></i></button>
                </div>
              </div>
              <div class="container-login100-form-btn my-3">
                <button type="button" className="btn btn-outline-secondary" style={{ backgroundColor: '#006E61', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>DAFTAR</button>
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
