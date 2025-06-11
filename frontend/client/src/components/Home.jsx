import landingPicture from '../assets/landing-picture.png';

const Home = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="d-flex justify-content-center text-center position-relative my-5">
                <img src={landingPicture} alt="Successful Interview" className='img-fluid' style={{ maxWidth: '90%', height: 'auto' }} />
                <div className='position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                    <h1 className='display-4 mb-5 fw-semibold'>Track Your Job Applications with</h1>
                    <div className='bg-dark rounded px-4 py-2 mt-2'>
                        <span className='logo-primary-home'>JOB</span><span className='logo-secondary-home'>LOGGER.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;