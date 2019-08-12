import googleMapsClient from '../client.js'

function getAutocompleteRegionSuggestions(input) {
  return googleMapsClient.placesAutoComplete({
    input: input,
    language: 'id',
    types: '(regions)',
    sessiontoken: ''
  }).asPromise()
}

export default getAutocompleteRegionSuggestions
