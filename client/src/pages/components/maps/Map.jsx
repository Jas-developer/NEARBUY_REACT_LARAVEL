import React from 'react';
import GoogleMapReact from 'google-map-react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Marker = () => <AiOutlineShoppingCart size={32} color="red" />;

export default function Map(){
    const defaultProps = {
        center:{
            lat:14.599512,
            lng:120.984222
        },
        zoom: 15
    };

    return (
        <div className='w-full h-full overflow-hidden'>
            <GoogleMapReact
                bootstrapURLKeys={{key:import.meta.env.VITE_REACT_APP_MAP_API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker 
                    lat={14.599512}
                    lng={120.984222}
                    color='red'
                    title='default'
                />
                
            </GoogleMapReact>
        </div>
    )
}