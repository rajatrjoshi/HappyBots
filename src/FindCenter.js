import React, {useState} from 'react'
import './FindCenter.css'
import Location from './Location.js';
import Map from './Map.js'
import * as mechanicdata from './data/data.json';

function FindCenter() {

    const [selectedCenter, setSelectedCenter] = useState(null);

    return (
        <div className="findcenter">
            <Location />
            <Map />
            <div className="servicecenter__details">
                <div className="servicecenter__image">

                </div>
                <div className="servicecenter__name">
                    
                </div>
                <div className="servicecenter__ecommlink">

                </div>
                <div className="servicecenter__contact">
                    <div className="servicecenter__phone">

                    </div>
                    <div className="servicecenter__mail">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindCenter 
