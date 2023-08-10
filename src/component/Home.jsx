import { Link } from 'react-router-dom';
import Oval from '../assets/home/Oval Copy.svg'

const Home = () => {
    return (
        <main className="space home-page md:flex m-auto">
            <div className='home-page__text'>
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h1>Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                    kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                 </p>
            </div>
            <Link to='/destination/'>
                <div className='home-page__button'>
                    <button className='btn'> Explore </button>
                </div>
            </Link>
        </main>
    )
}

export default Home;