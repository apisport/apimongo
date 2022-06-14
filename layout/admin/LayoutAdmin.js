import React from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import router from 'next/router';
import Navbar from '../../components/mitra/Navbar'
import Footer from '../../components/user/Footer'
import Helmet from 'react-helmet'
import useSWR from 'swr';



const LayoutAdmin = ({ children }) => {
    let namaVenue = 'Scuttod'
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR(`/api/countnotifmitradb?namaVenueReq=${namaVenue}`, fetcher)

    if (!data) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let transaksi = data['message']
    let transaksiPending = transaksi.filter(data => data.opsiBayar != "Full Bayar" && data.status == 'pending')
    let transaksiDPBelumLunas = transaksi.filter(data => data.opsiBayar == "DP" && data.status == 'diterima')
    let transaksiBayarDiTempat = transaksi.filter(data => data.opsiBayar == "Bayar di Tempat" && data.status == 'diterima')

    let total = transaksiPending.length + transaksiDPBelumLunas.length + transaksiBayarDiTempat.length
    console.log(transaksi)

    return (
        <div className="container-xxl mx-auto p-0  position-relative header-2-2" style={{ fontFamily: '"Poppins", sans-serif' }}>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
                <script src="../styles/bootstrap/js/bootstrap.min.js"></script>
            </Helmet>
            <Navbar props={total}></Navbar>
            {children}
            <Footer></Footer>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
                <script src="../styles/bootstrap/js/bootstrap.min.js"></script>
            </Helmet>
        </div>

    )
}
export default LayoutAdmin
