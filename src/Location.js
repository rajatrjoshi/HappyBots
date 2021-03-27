import React from 'react';
// import {GOOGLE_API_KEY} from './config.js';
import './Location.css'



class Location extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getlocation = this.getlocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    }

    getlocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationErrors);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }

    getCoordinates(position){
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
    this.reverseGeocodeCoordinates();
    }

    reverseGeocodeCoordinates(){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyA2OpTN4BdlVeJgiu5jC3WLFDoVQpVf_60`)
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(error => alert(error))
    }
    
    handleLocationErrors(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
            default:
              alert("An unknown error occurred.") 
          }
    }

    render() {
        return(
            <div className="location">
              <div className="coord__button">
                <div className="button__text">Click to share your location 👉 </div>
                <button className="location__button" onClick={this.getlocation}>Get the location</button>
              </div>
              <div className="user__coordinates">
                <div>Latitude: {this.state.latitude}</div>
                <div>Longitude: {this.state.longitude}</div>
                {/* <div>Address: {this.state.userAddress}</div> */}
              </div>
              <div className="map__heading">
                <div>Service Centers And Mechnaics Near You</div>
              </div>
            </div>
        )
    }

}

export default Location;
