import CardTransaksiPending from "../../components/mitra/transaksi-pending/CardTransaksiPending"
import CardDPBelumLunas from "../../components/mitra/transaksi-pending/CardDPBelumLunas"
import CardBayarDiTempat from "../../components/mitra/transaksi-pending/CardBayarDiTempat"


export default function TransaksiPending() {
    return (
        <>
            <div className="d-flex flex-row justify-content-center">
                <h1>Konfirmasi Booking</h1>
            </div>

            <div className="container my-2">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Menunggu Persetujuan <span className='numberCircle'>10</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">DP Belum Lunas <span className='numberCircle'>10</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="profile" aria-selected="false">Bayar di Tempat <span className='numberCircle'>10</span></button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row d-flex justify-content-center align-items-center mt-4">
                            <div className="btn-group col-md-12">
                                <input type="text" className="form-control col-10 mt-2 col-md-10" placeholder="Cari Transaksi Disini (Nama Pemesan)" />
                                <a href='/user/cari-lapangan' className="form-control col-2 mt-2 col-sm-2 btn shadow-sm" style={{ backgroundColor: '#ffbe2e' }}><button ><i className="fa fa-search text-white"></i></button></a>
                            </div>
                        </div>
                        <div className="row">

                            <div className="row p-0" style={{ backgroundColor: 'white' }}>
                                {/* ROW CONTENT */}
                                <div className="row p-3 justify-content-center">
                                    <CardTransaksiPending />
                                    <CardTransaksiPending />
                                    <CardTransaksiPending />
                                    <CardTransaksiPending />
                                    <CardTransaksiPending />
                                    <CardTransaksiPending />
                                    <CardTransaksiPending />
                                </div>
                                {/* END ROW */}
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row d-flex justify-content-center align-items-center mt-4">
                            <div className="btn-group col-md-12">
                                <input type="text" className="form-control col-10 mt-2 col-md-10" placeholder="Cari Transaksi Disini (Nama Pemesan)" />
                                <a href='/user/cari-lapangan' className="form-control col-2 mt-2 col-sm-2 btn shadow-sm" style={{ backgroundColor: '#ffbe2e' }}><button ><i className="fa fa-search text-white"></i></button></a>
                            </div>
                            <div className="row p-0" style={{ backgroundColor: 'white' }}>
                                {/* ROW CONTENT */}
                                <div className="row p-3 justify-content-center">
                                    <CardDPBelumLunas />
                                    <CardDPBelumLunas />
                                    <CardDPBelumLunas />
                                    <CardDPBelumLunas />
                                    <CardDPBelumLunas />
                                </div>
                                {/* END ROW */}
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row d-flex justify-content-center align-items-center mt-4">
                            <div className="btn-group col-md-12">
                                <input type="text" className="form-control col-10 mt-2 col-md-10" placeholder="Cari Transaksi Disini (Nama Pemesan)" />
                                <a href='/user/cari-lapangan' className="form-control col-2 mt-2 col-sm-2 btn shadow-sm" style={{ backgroundColor: '#ffbe2e' }}><button ><i className="fa fa-search text-white"></i></button></a>
                            </div>
                            <div className="row p-0" style={{ backgroundColor: 'white' }}>
                                {/* ROW CONTENT */}
                                <div className="row p-3 justify-content-center">
                                    <CardBayarDiTempat />
                                    <CardBayarDiTempat />
                                    <CardBayarDiTempat />
                                    <CardBayarDiTempat />
                                    <CardBayarDiTempat />
                                </div>
                                {/* END ROW */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}