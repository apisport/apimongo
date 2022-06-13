import React from 'react'
import Helmet from 'react-helmet'
import Link from 'next/link'

import { useSession, signIn, signOut } from 'next-auth/react'
const NavbarPesan = () => {

    return (
        <>
            <li className="nav-item">
                <Link href={'/list-nota'}><a className="nav-link" > Nota <span className='numberCircle'>123</span></a></Link>
            </li>
            <li className="nav-item">
                <Link href={'/pesanan-pending'}><a className="nav-link" > Pesanan Pending <span className='numberCircle'>123</span></a></Link>
            </li>
        </>
    )
}

export default NavbarPesan;
