import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react'
import useSWR from 'swr';
import Link from 'next/link';


export default function Register() {
   

        return (
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: 'url("./bg-01.jpg")' }}>
                    <div className="wrap-login100 p-3">
                        <form className="login100-form validate-form" >
                            <h3>Mohon untuk lengkapi data diri Anda untuk menyelesaikan registrasi</h3>
                            <div className="p-3 py-5">

                                <div className="flex-c-m">
                                    <Link href='/register-profil'>
                                    <a className="btn btn-primary p-3">
                                        <i className="fa fa-google" /> &nbsp; &nbsp; &nbsp; Lengkapi Isi Data Diri

                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        ) 

}