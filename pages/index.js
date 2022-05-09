import Head from 'next/head'
import Image from 'next/image'
import Helmet from 'react-helmet'
import Carousel from 'react-bootstrap/Carousel'
import CardRekomendasi from '../components/user/home/CardRekomendasi'
import CardLapanganHome from '../components/user/home/CardLapanganHome'
import CardTestimonial from '../components/user/home/CardTestimonial'
import Pagination from '../components/Pagination'


export default function Home() {
  return (
    <>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/slider-1.jpg" className="d-block img-fluid w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/slider-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/slider-1.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='container my-4'>
        <h3 className='fw-bold fst-italic'>KATEGORI OLAHRAGA</h3>
        <div className="row row-cols-4 row-cols-md-4 g-4 mt-3">
          <div className="col-3 col-lg-3">
            <a href="#">
              <img src='icons/futsal.jpg' className="bd-placeholder-img img-fluid rounded-circle" width={120} height={120} role="img" aria-label="Placeholder: 140x140" />
              <p className="mt-2 p-1" style={{ color: "white", backgroundColor: '#432C0B', borderRadius: "5px" }}>Futsal</p>
            </a>
          </div>
          <div className="col-3 col-lg-3">
            <a href="#">
              <img src='icons/voli.jpg' className="bd-placeholder-img img-fluid rounded-circle" width={120} height={120}  role="img" aria-label="Placeholder: 140x140" />
              <p className="mt-2 p-1" style={{ color: "white", backgroundColor: '#432C0B', borderRadius: "5px" }}>Voli</p>
            </a>
          </div>
          <div className="col-3 col-lg-3">
            <a href="#">
              <img src='icons/bulutangkis.jpg' className="bd-placeholder-img img-fluid rounded-circle" width={120} height={120} role="img" aria-label="Placeholder: 140x140" />
              <p className="mt-2" style={{ color: "white", backgroundColor: '#432C0B', borderRadius: "5px", fontSize: '2vh' }}>Bulu Tangkis</p>
            </a>
          </div>
          <div className="col-3 col-lg-3">
            <a href="#">
              <img src='icons/basket.jpg' className="bd-placeholder-img img-fluid rounded-circle" width={120} height={120} xmlns="http://www.w3.org/2000/img" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <p className="mt-2 p-1" style={{ color: "white", backgroundColor: '#432C0B', borderRadius: "5px" }}>Basket</p>
            </a>

          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="btn-group col-md-12">
            <input type="text" className="form-control col-10 mt-2 col-md-10" placeholder="Cari Lapangan Disini" />
            <a href='/user/cari-lapangan' className="form-control col-2 mt-2 col-sm-2 btn shadow-sm" style={{ backgroundColor: '#EE8F00' }}><button ><i className="fa fa-search text-white"></i></button></a>
          </div>
        </div>
      </div>


      <div>
        <div className="container my-4 text-black-50" >
          <h2 style={{ color: 'black' }} className='fw-bold fst-italic'>REKOMENDASI LAPANGAN</h2>
          <hr></hr>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">

            <CardRekomendasi />
            <CardRekomendasi />
            <CardRekomendasi />
          </div>
        </div>
        <div className='container mt-4 my-4 text-black-50'>
          <h2 style={{ color: '#EE8F00' }} className='mb-5 header-custom' sr>TESTIMONI</h2>
          <CardTestimonial />
        </div>
        <div className='container mt-4 my-4 text-black-50'>
          <h2 style={{ color: '#EE8F00' }} className='mb-5 header-custom' sr>ALUR BOOKING</h2>
          <img src='./alur.png' className='d-block img-fluid' />
        </div>



      </div>




    </>
  )
}
