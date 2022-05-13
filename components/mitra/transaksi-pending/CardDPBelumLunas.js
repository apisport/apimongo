export default function CardTransaksiPending({ transaksi }) {
    return (
        <>
            {transaksi.length === 0 ? (
                <h2>Tidak ada data</h2>
            ) : (
                <>
                    {transaksi.map((data, index) => (
                        <div key={index} className="shadow-sm col-12 col-lg-5 border border-2 mb-4 ml-3 p-3 text-start">
                            <h1>{data.lapangan}</h1>
                            <h4><b>Nama Pemesan:</b>{data.nama}</h4>
                            <h4><b>Nama Tim:</b>{data.tim}</h4>
                            <h4><b>Opsi Pembayaran:</b> {data.opsiBayar}</h4>
                            <h4><b>Total Bayar:</b> {`Rp ${data.harga}.000,-`}</h4>
                            <hr></hr>
                            <h5><b>Diterima:</b> {data.diterima}</h5>
                            <h5><b>Tanggal Main:</b> {data.tglMain}</h5><br></br>
                            <a className="btn btn-success text-white p-3 mb-2">Lunas</a>
                        </div>
                    ))}
                </>
            )}


        </>

    )
}