import CardLapangan from "../components/user/detail-venue/CardLapangan";
import useSWR from "swr";
import { useRouter } from 'next/router';

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const router = useRouter()
  const {namaVenue} = router.query
  const { data: data, error } = useSWR(`/api/detailvenuedb?namaVenueReq=${namaVenue}`, fetcher)



  if (!data) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Something went wrong</div>
  }


  let venue = data['message']
  console.log(venue)

  return (
    <div className="container">
      <h1 className="fw-bold fst-italic">Detail Venue</h1>
      <div className="row mb-4">
        <div className="col">
          <div className=" shadow-sm" style={{ backgroundColor: 'white' }}>
            <div className=" rounded ">
              {/* ROW CONTENT */}
              <div className="row p-4">
                <div className="col">
                  {/* SLIDER */}
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="images/futsallap.jpg" width='170' height='200' className="d-block w-100" />
                      </div>
                      <div className="carousel-item" >
                        <img src="images/futsallap.jpg" width='170' height='200' className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <img src="images/futsallap.jpg" width='170' height='200' className="d-block w-100" />
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

                  {/* END SLIDER */}
                </div>
                <div className="col-md-8 text-start">
                  <h5 className="card-title mt-3" style={{ color: "black" }}><strong>{venue.infoVenue[0].namaVenue}</strong></h5>
                  <span className="card-text" style={{ color: "black" }}><icon className='fa fa-calendar'></icon> {venue.infoVenue[0].hariOperasional}</span><br></br>
                  <span className="card-text" style={{ color: "black" }}><icon className='fa fa-clock'></icon> {venue.infoVenue[0].jamOperasional}</span><br></br>
                  <span className="card-text" style={{ color: "black" }}><icon className='fa fa-compass'></icon> {venue.infoVenue[0].alamat}</span><br></br>
                  <span className="card-text" style={{ color: "black" }}><icon className='fa fa-futbol'></icon> {venue.infoVenue[0].kategori}</span><br></br>
                  <span className="card-text text-muted" style={{ color: "black" }}><strong>Harga mulai dari </strong><br></br><span style={{ color: "green" }}>{props.lapanganVenue.length === 0 ? ('Tidak ada data lapangan tersedia') : (`Rp ${props.lapanganVenue[0].hargaPagi}.000`)}</span></span>
                </div>
              </div>
              {/* END ROW */}
            </div>
          </div>
        </div>

      </div>
      <div className='row'>
        <a data-bs-toggle="collapse" href="#fasilitasCollapse" style={{ color: "black" }}><h5 className='text-start'><icon className='fa fa-caret-down'></icon> Fasilitas</h5></a>
        <div>
          <div className="row collapse multi-collapse text-start" id="fasilitasCollapse">
            <span>{venue.infoVenue[0].fasilitas}</span>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <a data-bs-toggle="collapse" href="#sosmedCollapse" style={{ color: "black" }}><h5 className='text-start'><icon className='fa fa-caret-down'></icon> Sosial Media</h5></a>
        <div>
          <div className="row collapse multi-collapse text-start" id="sosmedCollapse">
            <span className='mb-2'><b><icon className='fa fa-instagram' /></b> @{venue.infoVenue[0].instagram}</span>
            <span className='mb-2'><b><icon className='fa fa-whatsapp' /></b> {venue.infoVenue[0].noWa}</span>
          </div>
        </div>
      </div>
      <CardLapangan />

    </div>

  )
}
