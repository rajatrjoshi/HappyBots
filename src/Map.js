// import Icons from '@material-ui/icons';
import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import * as mechanicdata from './data/data.json';
import './Map.css'


function Maps() {

    const [selectedCenter, setSelectedCenter] = useState(null);

    return (
        <GoogleMap defaultZoom={12} defaultCenter={{lat:19.798211, lng:72.7575978}} >
            
            {/* <Marker position={{lat:19.798211, lng:72.7575978}} height="50px"  width="50px"/> */}

            {
                mechanicdata.features.map((center) => (
                    <Marker key={center.properties.PARK_ID} position={{lat: center.geometry.coordinates[0], lng: center.geometry.coordinates[1]}}
                    onClick={() => {
                        setSelectedCenter(center);
                    }}
                    />
                    
                ))}
            {
                selectedCenter &&(
                    <InfoWindow position={{
                        lat: selectedCenter.geometry.coordinates[0], 
                        lng: selectedCenter.geometry.coordinates[1]}}
                        onCloseClick={() => {
                            setSelectedCenter(null);
                        }}>
                        <div>
                            <h4 onClick>{selectedCenter.properties.NAME}</h4>
                            <p>{selectedCenter.properties.DESCRIPTIO}</p>
                            alert("Your service will be book on clicking the below button");
                            <a href="/home">
                            <div className="book__servicetext" onClick= {console.log("event registered")}>Book A Service</div>
                            </a>
                        </div>
                    </InfoWindow>
                )
            }
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Maps));

export default function Map() {
    return(
        <div style={{width: '80vw', height: '70vh', marginLeft:'10%', marginTop: '5px', borderRadius: '10%'}}>
            <WrappedMap  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    );
}
