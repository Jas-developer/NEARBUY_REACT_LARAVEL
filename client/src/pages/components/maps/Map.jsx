import React from 'react';
import GoogleMapReact from 'google-map-react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Marker = ({ name, onClick }) => (
  <div>
    <AiOutlineShoppingCart size={32} color="red" onClick={onClick} />
    <div>{name}</div>
  </div>
);

export default function Map() {
  const defaultProps = {
    center: {
      lat: 14.599512,
      lng: 120.984222,
    },
    zoom: 15,
  };

  const markers = [
    {
      lat: 14.599512,
      lng: 120.984222,
      name: 'Marker 1',
      onClick: () => {
        console.log('Clicked Marker 1');
      },
    },
    {
      lat: 14.598889,
      lng: 120.985011,
      name: 'Marker 2',
      onClick: () => {
        console.log('Clicked Marker 2');
      },
    },
    {
        lat: 14.699512,
        lng: 120.984222,
        name: 'Marker 3',
        onClick: () => {
          console.log('Clicked Marker 3');
        },
      },
      {
        lat: 14.598889,
        lng: 120.285011,
        name: 'Marker 4',
        onClick: () => {
          console.log('Clicked Marker 4');
        },
      },
  ];

  return (
    <div className='w-full h-full overflow-hidden'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_APP_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers.map((marker, index) => (
          console.log(marker),
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            name={marker.name}
            onClick={marker.onClick}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
