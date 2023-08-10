import { Fragment } from "react";
import { useParams } from "react-router";

const Planet = ({data}) => {
    const param = useParams();
    if (!param.id) {
        return (
            <div className="planet">
            <h1>{data[0].name}</h1>
            <p className="mb-4">{data[0].description}</p>
            <div className="planet-details flex flex-column">
                <div className="planet-details__distance p-2 mr-4">
                    <h6>AVG. DISTANCE</h6>
                    <p>{data[0].distance}</p>
                </div>
                <div className="planet-details__time p-2 ml-4">
                    <h6>Est. travel time</h6>
                    <p>{data[0].travel}</p>
                </div>
            </div>
        </div>
        )
    } else {
    return (
        <Fragment>
            {data.filter(data => data.id === param.id).map(planet => {
            return (
                <div className="planet">
                    <h1>{planet.name}</h1>
                    <p className="mb-4">{planet.description}</p>
                    <div className="planet-details flex flex-column">
                        <div className="planet-details__distance p-2 mr-4">
                            <h6>AVG. DISTANCE</h6>
                            <p>{planet.distance}</p>
                        </div>
                        <div className="planet-details__time p-2 ml-4">
                            <h6>Est. travel time</h6>
                            <p>{planet.travel}</p>
                        </div>
                    </div>
                </div>)
            })}
        </Fragment>
        )
    }
};

export default Planet;