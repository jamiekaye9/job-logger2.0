import apply from '../assets/apply.jpg'
import register from '../assets/sign-up.jpg';
import interview from '../assets/interview.jpg';
import linkedin from '../assets/linkedin.png';
import google from '../assets/google.png';
import glassdoor from '../assets/glassdoor.png';
import indeed from '../assets/indeed.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container'>
       <div className="row d-flex justify-content-center align-items-center">
        <div className="col-11 col-lg-9 card bg-dark text-light mt-5 mb-4 rounded-4 d-flex flex-column justify-content-center align-items-center">
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
       <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5 mb-5">
            <div className="col-7 col-lg-3 card rounded-4 border-0 mb-4">
                <div className="card-header bg-dark text-info rounded-top-4">
                    <h2 className='card-title source-serif text-center fs-4'>Register</h2>
                </div>
                <img src={register} alt="" className='rounded-bottom-4' />
            </div>
            <div className="col-7 col-lg-3 card rounded-4 border-0 mb-4">
                <div className="card-header bg-dark text-info rounded-top-4">
                    <h2 className='card-title source-serif text-center fs-4'>Apply</h2>
                </div>
                <img src={apply} alt="" className='rounded-bottom-4' />
            </div>
            <div className="col-7 col-lg-3 card rounded-4 border-0 mb-4">
                <div className="card-header bg-dark text-info rounded-top-4">
                    <h2 className='card-title source-serif text-center fs-4'>Progress & Track</h2>
                </div>
                <img src={interview} alt="" className='rounded-bottom-4' />
            </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-11 col-lg-9 card rounded-4 d-flex flex-column justify-content-center align-items-center p-0 mb-5 border-1 border-dark'>
                <div className='card-header bg-info text-dark rounded-top-4 w-100'>
                    <h1 className='card-title text-center source-serif mt-4 mb-3'>Start Applying</h1>
                    <p className='card-text display-5 fs-5 text-center mb-3'>Visit the Industry Leading job sites below to find your next role</p>
                </div>
                <div className='d-flex flex-row gap-3 gap-md-4 gap-lg-5 justify-content-center align-items-center mt-4 mb-4'>
                    <a href="/https://linkedin.com"><img src={linkedin} alt="" style={{ width: "80px"}} /></a>
                    <a href="/https://google.com"><img src={google} alt="" style={{ width: "80px"}} /></a>
                    <a href="/https://glassdoor.com"><img src={glassdoor} alt="" style={{ width: "65px"}} /></a>
                    <a href="/https://indeed.com"><img src={indeed} alt="" style={{ width: "80px"}} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home;