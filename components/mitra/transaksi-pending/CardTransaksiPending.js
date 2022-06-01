import Link from 'next/link'
const CardTransaksiPending = ({ props }) => {
    console.log(props)
    return (
        <>
            {props.length === 0 ? (
                <h2>Tidak ada data</h2>
            ) : (
                <>
                    {props.map((data, index) => (
                        <div className="shadow-sm col-12 col-lg-5 border border-2 mb-4 ml-3 p-3 text-start">
                            <h1>{data.lapangan}</h1>
                            <h4><b>Nama Pemesan:</b> {data.nama}</h4>
                            <h4><b>Nama Tim:</b> {data.tim}</h4>
                            <h4><b>Opsi Pembayaran:</b> {data.opsiBayar}</h4>
                            <h4><b>Harga :</b>{`Rp ${data.harga}.000`}</h4>
                            <hr></hr>
                            <h5><b>Diterima:</b> {data.diterima}</h5>
                            <h5><b>Tanggal Main:</b> {data.tglMain}</h5><br></br>
                            <Link href={{
                                pathname: '/mitra/detail-notifikasi',
                                query: {
                                    namaVenue: data.namaVenue,
                                    namaPemilikVenue: data.namaPemilikVenue,
                                    alamat: data.alamat,
                                    noWa: data.noWa,
                                    instagram: data.instagram,
                                    kategori: data.kategori,
                                    hariOperasional: data.hariOperasional,
                                    jamOperasional: data.jamOperasional,
                                    fasilitas: data.fasilitas,
                                    opsiBayarStringify: JSON.stringify(data.opsiBayar),
                                    rekeningStringify: JSON.stringify(data.rekening),
                                    namaAdmin: data.namaAdmin,
                                    noWaAdmin: data.noWaAdmin,
                                    username: data.username,
                                    password: data.password,
                                    fotoVenueStringify: JSON.stringify(data.fotoVenue),
                                    objectId: data._id
                                }

                            }}>
                                <button className="btn btn-primary text-white p-3 mb-2">
                                    Lihat Detail
                                </button>
                            </Link>

                        </div>
                    ))}
                </>
            )}
        </>
    )
}
export default CardTransaksiPending
