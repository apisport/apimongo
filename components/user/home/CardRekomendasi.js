import React from 'react'

const CardRekomendasi = ({props}) => {
    return (
        <>
            <a href='/detail-venue'>
                <div className="col card shadow">
                    <div className="card text-start">
                        <img src="images/futsallap.jpg" className="card-img-top d-block" alt="..." width={300} height={300} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "black" }}><strong>{props.namaVenue }</strong></h5>
                            <span className="card-text text-left" style={{ color: "black" }}><icon className='fa fa-calendar'></icon>{` ${props.hariOperasional}` }</span><br></br>
                            <span className="card-text" style={{ color: "black" }}><icon className='fa fa-clock'></icon> {` Pukul ${props.jamOperasional}`}</span><br></br>
                            <span className="card-text" style={{ color: "black" }}><icon className='fa fa-compass'></icon>{` ${props.alamat}`}</span><br></br>
                            <span className="card-text" style={{ color: "black" }}><icon className='fa fa-futbol'></icon>{` ${props.kategori}`}</span><br></br>
                            <span className="card-text text-muted" style={{ color: "black" }}><strong>Harga mulai dari </strong><br></br><span style={{ color: "green" }}>{`Rp ${props.lapanganVenue[0].hargaPagi}.000`}</span></span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
export default CardRekomendasi
