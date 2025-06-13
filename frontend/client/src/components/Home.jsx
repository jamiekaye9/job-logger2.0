import landingPicture from '../assets/landing-picture.png';
import apply from '../assets/apply.jpg'
import register from '../assets/sign-up.jpg';
import interview from '../assets/interview.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='d-flex justify-content-center'>
                <img src={landingPicture} alt="Track your applications with Job Logger" className='col-12 col-md-8 mt-3 mb-5' />
            </div>
        </div>
        <div className='row d-flex flex-lg-row flex-column justify-content-center align-items-center mb-5 gap-4'>
            <div className="col-lg-3 col-8 card bg-dark text-white rounded-4">
                <img src={register} alt="Register" className='mt-3 opacity-50 rounded-4' />
                <div className='card-body'>
                    <div className='card-title d-flex flex-row justify-content-between'>
                        <Link to='/register' className='card-title text-info btn btn-info text-dark'>Register</Link>
                    </div>
                    <p className='card-text'>Create an account to start tracking your job applications.</p>
                </div>
            </div>
            <div className="col-lg-3 col-8 card bg-dark text-light rounded-4 ">
                <img src={apply} alt="Apply" className='mt-3 opacity-50 rounded-4' />
                <div className='card-body'>
                    <h2 className='card-title text-info'>Apply</h2>
                    <p className='card-text'>Submit Job Applications and add them to your Profile</p>
                </div>
            </div>
            <div className="col-lg-3 col-8 card bg-dark text-light rounded-4">
                <img src={interview} alt="Interview" className='mt-3 opacity-50 rounded-4' />
                <div className='card-body'>
                    <h2 className='card-title text-info'>Track</h2>
                    <p className='card-text'>Progress through your Applications, documenting Stages and making note of feedback</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home;