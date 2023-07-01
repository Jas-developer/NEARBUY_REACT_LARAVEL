import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({color})=><div style={{backgroundColor:color,width:'10px'}}></div>

export default function Map({}){
    const defaultProps = {
        center:{
            lat:20.6665706,
            lng:-103.3917025
        },
        zoom: 15
    };

    return (
        <div style={{width:'100%',height:'50vh'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCIwcnmj5PcfmncGWA-OUCdLiZVQ1tDhZ4'}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker 
                    lat={23.881141}
                    lng={-104.4925558}
                    color='#F4BE52'
                />
            </GoogleMapReact>
        </div>
    )
}