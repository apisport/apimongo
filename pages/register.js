import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link';
import useSWR from 'swr';

export default function Register() {

  const [nama, setNama] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [noWa, setNoWa] = useState('');
  const [email, setEmail] = useState('');
  const [timTemp, setTimTemp] = useState('');
  const [tim, setTim] = useState([]);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [message, setMessage] = useState('');
  const { data: session } = useSession();

  let router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: data, error } = useSWR('/api/userdb', fetcher)

  if (!data) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Something went wrong</div>
  }



  let user = data['message']
  console.log('Agregate:')
  console.log(user)

  const handleSignin = (e) => {
    e.preventDefault()
    signIn('google', { callbackUrl: '/register-profil' })

  }


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
             
            <div className="p-3 py-5">
              
              <div className="flex-c-m">
                {!session && <a href="#" onClick={handleSignin} className="btn btn-primary p-3">
                  <i className="fa fa-google" /> &nbsp; &nbsp; &nbsp; Register dengan Google

                </a>}

              </div>
              <div className="txt1 text-center mt-2">
                <span>
                  atau
                </span>
              </div>
              <div className='mt-2 col-md-12 text-center' style={{ color: 'red' }}>
                <div className="flex-c-m">
                  <a href="#" className="btn btn-success text-white p-3">
                    <i className="fa fa-address-card" /> &nbsp; &nbsp; &nbsp; Register sebagai Mitra

                  </a>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}