import data from '../Data/data.json';
import { Link, useParams } from 'react-router-dom';
import Planet from './Planet';
import { Fragment } from 'react';

const Destination = () => {
    const param = useParams();

    if(!param.id) {
        param.id = "01";
    }

    return (
        <Fragment>
            <main className='space destination'>

                <h1><span>01</span> Pick your destination</h1>

                <div className='md:flex items-center content-center'>
                   {data.destinations.filter(data => data.id === param.id).map(planet => {
                        return (
                            <div className='destination-image'>
                                <img src={require(`../assets/destination/image-${(planet.name).toLowerCase()}.png`)} alt='Planets'/>
                            </div> )
                    })}

                    <div className='destination-list'>
                        <ul>
                            <li><Link to="/destination/01">Moon</Link></li>
                            <li><Link to="/destination/02">Mars</Link></li>
                            <li><Link to="/destination/03">Europe</Link></li>
                            <li><Link to="/destination/04">Titan</Link></li>
                        </ul>
                        <div>
                            <Planet data = {data.destinations} />
                        </div>
                    </div>
                </div>
            </main>

        </Fragment>
    )
}

export default Destination;