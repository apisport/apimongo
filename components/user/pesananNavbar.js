import React from 'react'
import Helmet from 'react-helmet'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import useSWR from 'swr'

const NavbarPesan = () => {
    const { data: session, status } = useSession()

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    let url = ''
    if (session) {
        url = `/api/navbarpesandb?emailReq=${session.user.email}`
    }
    const { data: data, error } = useSWR(url, fetcher)

    if (!data) {
        return <div></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }

    let transaksi = data['message']
    console.log(transaksi)

    return (
        <>
            {session &&
                <li className="nav-item">
                    <Link href={'/list-nota'}><a className="nav-link" > Nota <span className='numberCircle'>{transaksi.diterima[0].length}</span></a></Link>
                </li>
            }
            {session &&
                <li className="nav-item">
                    <Link href={'/pesanan-pending'}><a className="nav-link" > Pesanan Pending <span className='numberCircle'>{transaksi.pending[0].length}</span></a></Link>
                </li>
            }
        </>

    )
}

export default NavbarPesan;
