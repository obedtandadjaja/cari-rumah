import googleMapsClient from '../client'

export function getAutocompletePredictions(input) {
  return googleMapsClient.placesAutoComplete({
    input: input,
    language: 'id',
    location: { // bound to sabang to merauke
      lat: 5.9666796,
      lng: 95.0957736
    },
    sessiontoken: '' // defaulted to session token from client
  }).asPromise()
    .then(res => res.json.predictions)
}

export function getPlaceGeometryById(id) {
  return googleMapsClient.place({
    placeid: id,
    fields: ['geometry'], // since the only use case is to get the lat and log, let's not bother get anything else
    sessiontoken: ''
  }).asPromise()
    .then(res => res.json.result.geometry)
}
