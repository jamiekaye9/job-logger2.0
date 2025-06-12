import landingPicture from '../assets/landing-picture.png';
import apply from '../assets/apply.jpg'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='d-flex justify-content-center'>
                <img src={landingPicture} alt="Track your applications with Job Logger" className='col-12 col-md-8 mt-3' />
            </div>
        </div>
        <div className='row mt-5 mb-5'>
            <div className='card col-12 col-lg-4 p-0 rounded-3'>
                <img src={apply} alt="Apply" className='rounded-3 opacity-25'/>
                <div className='card-body card-img-overlay bg-dark opacity-25'></div>
            </div>

        </div>

    </div>
  )
}
export default Home;