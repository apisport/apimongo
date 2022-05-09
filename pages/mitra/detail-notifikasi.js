export default function Home() {
    return (
        <div className="container">
            <h1 className="mb-3">Form Pembayaran</h1>
            <div className="">
                <div className="container card p-3 shadow-lg">
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
                        <div className="col-md-6"> <img className=" d-block w-100" src="https://placekitten.com/100/200" height={200} /> </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Nama Pemesan : </label>
                            <input type="email" className="form-control" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Nama Tim : </label>
                            <input type="email" className="form-control" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">No. Telp: </label>
                            <input type="email" className="form-control" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Total Bayar : </label>
                            <input type="email" className="form-control" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">No. Rekening : </label>
                            <input type="email" className="form-control" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Opsi Bayar : </label>
                            <input type="email" className="form-control" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="form-group">
                            <div className="mt-2 col-md-12"><label className="labels" htmlFor="formFile">Bukti Bayar</label>
                            </div>

                        </div>

                        <div className="mt-1 text-center">
                            <img src="https://placekitten.com/200/300" />
                        </div>
                        <div className='row mt-3'>
                            <div className='col-6  d-grid col-lg-6 mb-4'>
                                <button class="btn btn-outline-warning p-3" type="button" style={{ backgroundColor: '#ed0010', color: 'rgb(255, 255, 255)', borderRadius: '5cm' }}>Tolak</button>
                            </div>
                            <div className='col-6   d-grid col-lg-6 mb-4'>
                                <button type="button" className="btn btn-outline-secondary" style={{ backgroundColor: '#00cc36', color: 'rgb(255, 255, 255)', borderRadius: '5cm' }}>Terima</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}