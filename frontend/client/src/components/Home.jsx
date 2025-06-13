import landingPicture from '../assets/landing-picture.png';
import apply from '../assets/apply.jpg'
import register from '../assets/sign-up.jpg';
import interview from '../assets/interview.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container'>
       <div className="row d-flex justify-content-center align-items-center">
        <div className="col-11 col-lg-8 card bg-dark text-light mt-4 rounded-4 d-flex flex-column justify-content-center align-items-center">
            <div className="card-body">
                <h1 className='card-title source-serif text-center mb-4 mt-4'>Welcome to <span className='text-light'>JOB</span><span className='text-info'>LOGGER.</span></h1>
                <h3 className='card-subtitle display-5 fs-5 text-center'>Your Ultimate Job Application Companion</h3>
                <div className='d-flex justify-content-center align-items-center flex-row mt-5 gap-4 mb-4'>
                    <Link className='btn btn-info text-dark'>Sign Up</Link>
                    <Link className='btn btn-info text-dark'>Sign In</Link>
                </div>
            </div>
        </div>
       </div>
       <div className="row d-flex justify-content-center align-items-center mt-5">
        <div>
            <div className="col-8 card">
                <div className="card-header">
                    <h2 className='card-title'>Apply</h2>
                </div>
                <div className="card-body bg-dark opacity-50">
                    <img src={register} alt="" />
                </div>
            </div>
            <div className="col-8 card">
                <img src={apply} alt="" />
            </div>
            <div className="col-8 card">
                <img src={interview} alt="" />
            </div>
        </div>
       </div>
    </div>
  )
}
export default Home;