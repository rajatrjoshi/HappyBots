import React from 'react'
import './FindCenter.css'
import Location from './Location.js';
import Map from './Map.js'
import {Link} from 'react-router-dom'
import * as Icons from '@material-ui/icons'


function FindCenter() {

    // const [selectedCenter, setSelectedCenter] = useState(null);

    return (
        <div className="findcenter">
            <Location />
            <Map />
            <div className="servicecenter__details">
                <div className="servicecenter__line1">
                <div className="center__list">
                        <div className="center__title">
                            <div className="servicecenter__image">
                                <Icons.AccessAlarms/>
                            </div>
                            <div className="servicecenter__name">
                                Reliable Car Care
                            </div>
                        </div>
                        
                        <div className="servicecenter__ecommlink">
                            Buy A Product: <Link to="/our-store"> Switch to Store</Link>
                        </div>
                        <div className="servicecenter__contact">
                            <div className="servicecenter__phone">
                                Phone No: +91-9826544884
                            </div>
                            <div className="servicecenter__mail">
                                Email At: xyy@example.com
                            </div>
                        </div>
                    </div>

                    <div className="center__list">
                        <div className="center__title">
                            <div className="servicecenter__image">
                                <Icons.AccessAlarms/>
                            </div>
                            <div className="servicecenter__name">
                            Prime Car Inn
                            </div>
                        </div>
                        
                        <div className="servicecenter__ecommlink">
                            Buy A Product: <Link to="/our-store"> Switch to Store</Link>
                        </div>
                        <div className="servicecenter__contact">
                        <div className="servicecenter__phone">
                                Phone No: +91-9826544884
                            </div>
                            <div className="servicecenter__mail">
                                Email At: xyy@example.com
                            </div>
                        </div>
                    </div>
                    

                    <div className="center__list">
                        <div className="center__title">
                            <div className="servicecenter__image">
                                <Icons.AccessAlarms/>
                            </div>
                            <div className="servicecenter__name">
                            D. S. Auto Garage
                            </div>
                        </div>
                        
                        <div className="servicecenter__ecommlink">
                            Buy A Product: <Link to="/our-store"> Switch to Store</Link>
                        </div>
                        <div className="servicecenter__contact">
                        <div className="servicecenter__phone">
                                Phone No: +91-9826544884
                            </div>
                            <div className="servicecenter__mail">
                                Email At: xyy@example.com
                            </div>
                        
                        </div>
                    </div>

                    <div className="center__list">
                        <div className="center__title">
                            <div className="servicecenter__image">
                                <Icons.AccessAlarms/>
                            </div>
                            <div className="servicecenter__name">
                            Guru Krupa Motor
                            </div>
                        </div>
                        
                        <div className="servicecenter__ecommlink">
                            Buy A Product: <Link to="/our-store"> Swtich to Store</Link>
                        </div>
                        <div className="servicecenter__contact">
                        <div className="servicecenter__phone">
                                Phone No: +91-9826544884
                            </div>
                            <div className="servicecenter__mail">
                                Email At: xyy@example.com
                            </div>
                        </div>
                    </div>

                </div>    
            </div>

                
        </div>
    )
}

export default FindCenter 
