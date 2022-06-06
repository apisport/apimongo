import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession , signIn } from 'next-auth/react'

export default function Register() {
  const [nama, setNama] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [noWa, setNoWa] = useState('');
  const [email, setEmail] = useState('');
  const [timTemp, setTimTemp] = useState('');
  const [tim, setTim] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fotoProfil, setFotoProfil] = useState('');
  const [role, setRole] = useState('user');
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  let router = useRouter()
  const handlePost = async (e) => {
    e.preventDefault();
    
    // reset error and message
    setError('');
    setMessage('');
    // fields check
    if (!nama || !jenisKelamin || !noWa || !email || !tim || !username || !password) {
      alert('Harap untuk mengisi semua data');
      return setError('All fields are required');
    }
    // addToAccount()


    // post structure
    let user = {
      nama,
      jenisKelamin,
      noWa,
      email,
      tim,
      username,
      password,
      fotoProfil,

    };
    // save the post
    let response = await fetch('/api/userdb', {
      method: 'POST',
      body: JSON.stringify(user),
    });
    // get the data
    let data = await response.json();
    if (data.success) {
      // reset the fields
      alert('Register berhasil!')
      router.push('/')
      setNama('');
      setJenisKelamin('');
      setNoWa('');
      setEmail('');
      setTim('');
      setUsername('');
      setPassword('');
      setFotoProfil('');
      setImage(null);
      setCreateObjectURL(null);
      router.push('/')
      // set the message
      return setMessage(data.message);
    }
    else {
      // set the error
      console.log(data.message);
      return setError(data.message);
    }
  };

  const addToAccount = async (e) => {
    e.preventDefault();
    // reset error and message
    setError('');
    setMessage('');
    // fields check
    // post structure
    let account = {
      username,
      password,
      role,
    };
    // save the post
    let response = await fetch('/api/accountdb', {
      method: 'POST',
      body: JSON.stringify(account),
    });
    // get the data
    let data = await response.json();
    if (data.success) {
      // reset the fields

      // set the message
      return setMessage(data.message);
    }
    else {
      // set the error
      console.log(data.message);
      return setError(data.message);
    }
  };

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
      x.width = 150
      x.height = 150
      const i = event.target.files[0];
      setFotoProfil(i.name)
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
  }
  return (
    <div className="limiter">
      <div className="container-login100" style={{ backgroundImage: 'url("./bg-01.jpg")' }}>
        <div className="wrap-login100 p-3">
          <form className="login100-form validate-form" onSubmit={handlePost}>
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
            <div className="text-center">
              <img className='img-fluid d-blok p-5' src="./y.png"  />
            </div>
            <span className="login100-form-title p-b-12">
              DAFTAR
            </span>
            <div className="p-3 py-5">
              <div className="row mt-2">
                <div className="mt-2 col-md-12">
                  <label className="labels">Nama Lengkap</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control"
                    required
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="mt-2 form-radio col-md-12">
                  <label htmlFor="gender" className="radio-label">Jenis Kelamin</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <div className="form-radio-item">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value={'Laki-laki'}
                      onChange={(e) => setJenisKelamin(e.target.value)}

                    />
                    <label htmlFor="male">&nbsp;Laki-laki</label>
                    <span className="check ml-5" />
                    <input type="radio"
                      name="gender"
                      id="male"
                      value={'Perempuan'}
                      onChange={(e) => setJenisKelamin(e.target.value)}
                    />
                    <label htmlFor="female">&nbsp;Perempuan</label>
                    <span className="check" />
                  </div>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">No . WhatsApp</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" required
                    name="noWa"
                    onChange={(e) => setNoWa(e.target.value)}
                    value={noWa}
                  />
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Email</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                  <div className="mt-2 col-md-12">
                  <label className="labels">Tambah Tim</label>
                </div>
                <div className="btn-group col-md-12">
                  <input type="text" className="form-control col-10 mt-2 col-md-10"
                    id="tim"
                    name="tim"
                    value={timTemp}
                    onChange={(e) => setTimTemp(e.target.value)}
                  />
                  <button className="form-control col-2 mt-2 col-sm-2"
                    onClick={onAddItemArray}><i className="fa fa-plus"></i></button>
                </div>
                <div className="mt-2 col-md-12"><label className="labels">Daftar Tim</label>
                </div>
                <div>
                  {tim.length === 0 ? (
                    <h2>Isi Daftar Tim</h2>
                  ) : (
                    <>

                        {tim.map((data, i) => (
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

                </div>

                <div className="mt-2 col-md-12"><label className="labels">Username</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                  <input type="text" className="form-control" required
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div className="mt-2 col-md-12">
                  <label className="labels">Password</label><i style={{color:'#ff0000', fontSize: 'larger'}}>*</i>
                </div>
                <div className="btn-group col-md-12">
                  <input type="password" className="form-control col-10 col-md-10" id='passwordInput' required
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <button onClick={() => { myFunction() }} className="form-control col-2 col-sm-2"><i className="fa fa-eye"></i></button>
                </div>
                <div className="mt-2 col-md-12"><label className="labels" htmlFor="formFile">Pilih Foto Profil</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" name="myImage" onChange={uploadToClient} required />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                  </div>

                </div>
                <div className="mt-2 d-flex flex-row justify-content-center">
                  <img className='img-fluid d-block  rounded-circle' id='image' src={createObjectURL} />
                </div>

              </div>
              <div class="row mt-3 container-login100-form-btn my-3">
                <button type="submit"
                  onClick={uploadToServer}
                  className="btn btn-outline-secondary" style={{ backgroundColor: '#006E61', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>
                  DAFTAR
                </button>
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
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" /> {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }
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
              <div className="flex-col-c mt-3">
                <span className="txt1 p-b-10">
                  <a href="/mitra-register" className="txt2">
                  &nbsp;<u>REGISTER SEBAGAI MITRA</u>
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