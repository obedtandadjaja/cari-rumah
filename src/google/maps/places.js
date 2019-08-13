import googleMapsClient from '../client'

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
    .then(res => res.json.predictions)
}

export default getAutocompleteRegionSuggestions
