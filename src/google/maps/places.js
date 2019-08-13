import googleMapsClient from '../client.js'

function getAutocompleteRegionSuggestions(input) {
  return googleMapsClient.placesAutoComplete({
    input: input,
    language: 'id',
    location: {
      lat: 5.9666796,
      lng: 95.0957736
    },
    sessiontoken: ''
  }).asPromise()
}

export default getAutocompleteRegionSuggestions
