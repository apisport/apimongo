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
            <div className="p-3 py-5">
              <div className="row mt-2">
                <div className="mt-2 col-md-12">
                  <label className="labels">Nama Lengkap</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" placeholder="Nama Lengkap" required/>
                </div>
                <div className="mt-2 form-radio col-md-12">
                  <label htmlFor="gender" className="radio-label">Jenis Kelamin</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <div className="form-radio-item">
                    <input type="radio" name="gender" id="male" defaultChecked />
                    <label htmlFor="male">&nbsp;Laki-laki</label>
                    <span className="check ml-5" />
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="female">&nbsp;Perempuan</label>
                    <span className="check" />
                  </div>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">No . WhatsApp</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" placeholder="Masukkan No. WhatsApp" required/></div>
                <div className="mt-2 col-md-12"><label className="labels">Email</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" placeholder="Masukkan Email" required /></div>
                  <div className="mt-2 col-md-12">
                  <label className="labels">Tambah Tim</label>
                </div>
                <div className="btn-group col-md-12">
                  <input type="text" className="form-control col-10 mt-2 col-md-10" placeholder="Tambah Tim" />
                  <button href='#' className="form-control col-2 mt-2 col-sm-2"><i className="fa fa-plus"></i></button>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Daftar Tim</label>
                </div>
                <div className="btn-group col-md-12">
                  <input type="text" className="form-control col-10 mt-2 col-md-10" placeholder="Barca Fc" readOnly />
                  <button href='#' className="form-control col-2 mt-2 col-sm-2"><i className="fa fa-trash"></i></button>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Username</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" placeholder="Username" required /></div>
                <div className="mt-2 col-md-12">
                  <label className="labels">Password</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                </div>
                <div className="btn-group col-md-12">
                  <input type="text" className="form-control col-10 col-md-10" id='passwordInput' placeholder="Password" required/>
                  <button onClick={() => { myFunction() }} className="form-control col-2 col-sm-2"><i className="fa fa-eye"></i></button>
                </div>
                <div className="mt-2 col-md-12"><label className="labels" htmlFor="formFile">Pilih Foto Profil</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                  </div>
                </div>
              </div>
              <div class="container-login100-form-btn my-3">
              <button type="button" className="btn btn-outline-secondary" style={{backgroundColor: '#006E61', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50}}>DAFTAR</button>
              </div>
              <div className="txt1 text-center mt-3">
                <span>
                  atau
                </span>
              </div>
              <div className="flex-c-m">
                <span>
                  Daftar dengan
                </span>
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className='mt-2 col-md-12 text-center' style={{ color: 'red' }}>
                <span><small>*Setelah Register, e-mail dan username tidak dapat diubah</small></span>
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
