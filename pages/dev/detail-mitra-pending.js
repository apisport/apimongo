import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
    let router = useRouter()
    const { namaVenue,
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
        fotoVenue,
        objectId } = router.query

    let opsiBayar = JSON.parse(opsiBayarStringify)
    let rekening = JSON.parse(rekeningStringify)

    const deleteMitraPending = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/mitrapendingdb', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: objectId
                }),
            });
            // reset the deleting state
            // reload the page
            alert('Permintaan Ditolak Berhasil')
            router.push('/dev/mitra-pending')
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };

    const handlePost = async (e) => {
        e.preventDefault();
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
        let check = document.getElementsByName('opsiBayar')
        let len = check.length
        setOpsiBayar([])
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
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-12">
                        MITRA PENDING
                    </span>
                    <div className="p-3 py-5">
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Nama Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    name="nama"
                                    value={namaVenue}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Nama Pemilik Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <input type="text" className="form-control"
                                    required
                                    name="nama"
                                    value={namaPemilikVenue}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Alamat</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <textarea type="text" className="form-control"
                                    required
                                    value={alamat}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">No. WA Venue</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <textarea type="text" className="form-control"
                                    required
                                    value={noWa}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="mt-2 col-md-12">
                                <label className="labels">Instagram</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                                <textarea type="text" className="form-control"
                                    required
                                    value={instagram}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div class="row mt-3 container-login100-form-btn my-3 g-3">
                            <button type="submit"
                                onClick={uploadToServer}
                                className="btn btn-outline-secondary mx-3" style={{ backgroundColor: '#006E61', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>
                                TERIMA
                            </button>
                            <button type="button"
                                onClick={() => deleteMitraPending()}
                                className="btn btn-outline-secondary mx-3" style={{ backgroundColor: '#c41d0e', color: 'rgb(255, 255, 255)', borderRadius: '5cm', width: 500, height: 50 }}>
                                TOLAK
                            </button>
                        </div>
                        <div className="txt1 text-center mt-3">
                            <span>
                                atau
                            </span>
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
    )
}
