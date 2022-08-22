import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: 25.032969,
  lng: 121.565414,
}

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC898aFK8Hbdr9LCkqWZrKvtKaX4siIgsM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  )
}
const NoFound = () => {
  return <MyComponent></MyComponent>
}

export default NoFound
