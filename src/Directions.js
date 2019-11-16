// import React from 'react';
// import {Dimensions, StyleSheet} from 'react-native';
// import MapView from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import initialRegion from './initialRegion';

// const coordinates = [
//     {
//         latitude: 47.444,
//         longitude: -122.176,    
//     },
//     {
//         latitude: 48.444,
//         longitude: -121.176,    
//     }
// ]
    
// // const origin = {latitude: 37.3318456, longitude: -122.0296002};
// // const destination = {latitude: 37.771707, longitude: -122.4053769};

// const GOOGLE_MAPS_APIKEY = 'AIzaSyCMaQQQ0mYGGmpMBhAvEaMj0cLr3ETzJlw';

// class directions extends React.Component{
//     render(){
//         return(
//             <MapView initialRegion = {initialRegion} style = {StyleSheet.absoluteFill}>
//                 <MapView.Marker coordinate = {coordinates[0]} />
//                 <MapView.Marker coordinate = {coordinates[1]} />
            
//             <MapViewDirections
//                 origin={coordinates[0]}
//                 destination={coordinates[1]}
//                 apikey={GOOGLE_MAPS_APIKEY}
//                 strokeWidth={3}
//                 strokeColor='red'
//             />
//             </MapView>
//         )
//     }
// }
// export default directions;
