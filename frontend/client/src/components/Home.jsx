import landingPicture from '../assets/landing-picture.png';
import linkedin from '../assets/linkedin.png';
import google from '../assets/google.png';
import indeed from '../assets/indeed.png';
import glassdoor from '../assets/glassdoor.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container mt-4 text-center'>
        <div className='d-flex flex-row align-items-center justify-content-center'>
            <div>
                <img src={landingPicture} alt="Landing Picture" className='w-100' />
            </div>
        </div>
        <div className='mt-4'>
            <div>
                <h3>Start Applying Now</h3>
                <div>
                    <Link to="https://www.linkedin.com/">
                        <img src={linkedin} alt="LinkedIn" className='mx-2' style={{ width: '50px', height: '50px' }} />
                    </Link>
                    <Link to="https://www.google.com/about/careers/applications/">
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home;