import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};
class OurMap extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={2}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />            
        );
    }
  }
//   export default OurMap;
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCMVI8zusdFeB1M_1oTl2Jc41cDLtqbf6g'
  })(Map);