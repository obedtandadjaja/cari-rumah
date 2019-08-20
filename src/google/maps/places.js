import googleMapsClient from '../client'

function getAutocompletePredictions(input) {
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

export default getAutocompletePredictions
