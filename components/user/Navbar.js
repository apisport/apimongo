import React from 'react'
import Helmet from 'react-helmet'
import { useSession, signIn, signOut } from 'next-auth/react'
const Navbar = () => {
    const { data: session } = useSession();

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light">
                <a href="#">
                    <img style={{ marginRight: '0.75rem', height: '50px' }} src="./y.png" alt />
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#targetModal-item">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="modal-item modal fade" id="targetModal-item" tabIndex={-1} role="dialog" aria-labelledby="targetModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-white border-0">
                            <div className="modal-header border-0" style={{ padding: '2rem', paddingBottom: 0 }}>
                                <a className="modal-title" id="targetModalLabel">
                                    <img style={{ marginRight: '0.75rem', height: '50px' }} src="./y.png" alt />
                                </a>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body" style={{ padding: '2rem', paddingTop: 0, paddingBottom: 0 }}>
                                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Beranda</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/lapangan">Lapangan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/tentang-kami">Tentang Kami</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-footer border-0 gap-3" style={{ padding: '2rem', paddingTop: '0.75rem' }}>
                                <a href="/login"><button className="btn btn-success btn-no-fill text-white">Log In</button></a>
                                <a href='/register'><button className="btn btn-fill text-white">Register</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Beranda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/lapangan">Lapangan</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tentang-kami">Tentang Kami</a>
                        </li>
                    </ul>
                    <div className="gap-3">
                        {session && <a href="/register" className="btn-signin">Sign out {session.user.name}</a>}
                        {!session &&
                            <>
                            <a href='/login'><button className="btn btn-default btn-no-fill">Log In</button></a>
                            <a href='/register'><button className="btn btn-fill text-white">Register</button></a>
                            </>
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
