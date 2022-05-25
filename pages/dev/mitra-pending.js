import useSWR from "swr"
import Link from 'next/link'
import { useState } from "react"

export default function MitraDev() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/mitrapendingdb', fetcher)



    if (!data) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let mitrapending = data['message']
    console.log(mitrapending)

    return (
        <>
            <div class="container-fluid">
                <div className="d-flex flex-row justify-content-center mb-5">
                    <h1>Data Mitra Pending</h1>
                </div>

                <div class="row flex-row flex-nowrap mt-3">
                    <div className="col-5 col-md-5 text-nowrap">
                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show&nbsp;
                            <select className="d-inline-block form-select form-select-sm" value='tes'>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                            </select>&nbsp;</label></div>
                    </div>
                    <div className="col-2 col-md-2">
                        <div className="text-md-end dataTables_filter" id="dataTable_filter">
                            <div>

                                <select className=" form-select" id="filterInput" onChange={event => { myFunction() }}>
                                    <option>--Filter Search--</option>
                                    <option value={'Nama Venue'}>Nama Venue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-md-5">
                        <div className="text-md-end dataTables_filter" id="dataTable_filter">
                            <input type="search"
                                className="form-control form-control-md"
                                aria-controls="dataTable" placeholder="Search" id="searchInput"
                                onChange={event => { setSearchTerm(event.target.value) }} />
                        </div>
                    </div>
                </div>
                {/* Tambahan Pagination Make Sure Math.ceil adalah searchArr.length */}
                <p>Memuat {mitrapending.length} data, Jumlah keseluruhan data adalah 1333 data</p>
                <div className='d-flex flex-row justify-content-center'>
                    <table className="table table-responsive my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th style={{ width: 56 }}>No</th>
                                <th>Nama Venue</th>
                                <th>Nama Pemilik Venue</th>
                                <th>Nama Admin</th>
                                <th>No. WA Admin</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mitrapending.length === 0 ? (
                                <h2>Tidak ada data Mitra Pending</h2>
                            ) : (
                                <>
                                    {mitrapending.map((data, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{data.namaVenue}</td>
                                            <td>{data.namaPemilikVenue}</td>
                                            <td>{data.namaAdmin}</td>
                                            <td>{data.noWaAdmin}</td>
                                            <td>{data.username}</td>
                                            <td>{data.password}</td>
                                            <td><div className="btn-group-vertical btn-group-sm">
                                                <Link href={`/dev/detail-mitra-pending?namaVenue=${data.namaVenue}&namaPemilikVenue=${data.namaPemilikVenue}&alamat=${data.alamat}&noWa=${data.noWa}&instagram=${data.instagram}&kategori=${data.kategori}&hariOperasional=${data.hariOperasional}&jamOperasional=${data.jamOperasional}&fasilitas=${data.fasilitas}&opsiBayarStringify=${JSON.stringify(data.opsiBayar)}&rekeningStringify=${JSON.stringify(data.rekening)}&objectId=${data._id}`}>
                                                    {/* <Link href={{
                                                    pathname: '/dev/detail-mitra-pending'
                                                }}> */}
                                                    <button className="btn btn-success text-white mb-2"
                                                        type="button"
                                                        style={{ marginLeft: 'auto', background: 'green' }}
                                                    >Lihat Selengkapnya
                                                    </button>
                                                </Link>

                                            </div>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            )}

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
