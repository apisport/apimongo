import Carousel from '../../components/user/detail-lapangan/Carousel'
import CardJadwal from '../../components/user/detail-lapangan/CardJadwal'
export default function Tambahlapangan() {
    return (
        <div className="container-xxl mx-auto p-4 header-2-2">
            <h1 style={{ color: 'black' }}>Tambah Lapangan</h1>

            <div >
                <form className=''>
                    <div className="col-md-12">
                        <label className="labels">Nama Lapangan</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="mt-2 col-md-12"><label className="labels ">Deskripsi Lapangan</label>
                        <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>
                    <div className="mt-2 col-12 col-md-12"><label className="labels">Foto Lapangan</label>
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
                    <div className="row p-4">
                        <div className='col-3 col-lg-4 mb-4'>
                            <img src="http://placekitten.com/100/200" width='170' height='200' className="d-block w-100"></img>
                        </div>
                        <div className='col-3 col-lg-4 mb-4'>
                            <img src="http://placekitten.com/100/200" width='170' height='200' className="d-block w-100"></img>
                        </div>
                        <div className='col-3 col-lg-4 mb-4'>
                            <img src="http://placekitten.com/100/200" width='170' height='200' className="d-block w-100"></img>
                        </div>



                    </div>
                    <div className='card p-3'>
                        <h4 className="labels" style={{ color: 'black' }}>Atur Jadwal dan Harga</h4>
                        <div className=" mt-2 col-md-12" style={{ color: 'black' }}><label className="labels">Jam Operasional</label>
                            <i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
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
                                            <input type="number" className="form-control" placeholder="Harga" required />
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
                                            <input type="number" className="form-control" placeholder="Harga" required />
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
