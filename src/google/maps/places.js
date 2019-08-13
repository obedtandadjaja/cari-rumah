import googleMapsClient from '../client.js'

function getAutocompleteRegionSuggestions(input) {
  return googleMapsClient.placesAutoComplete({
    input: input,
    language: 'id',
    sessiontoken: ''
  }).asPromise()
}

export default getAutocompleteRegionSuggestions
