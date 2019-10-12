import googleMapsClient from '../client'

function buildFullAddress(address_1, address_2, administrative_area_level_2, administrative_area_level_1, zip_code, country) {
  return `${address_1} ${address_2}, ${administrative_area_level_2}, ${administrative_area_level_1} ${zip_code}, ${country}`
}

function getGeocode(address_1, address_2, administrative_area_level_2, administrative_area_level_1, zip_code, country) {
  return googleMapsClient.geocode({
    address: buildFullAddress(address_1, address_2, administrative_area_level_2, administrative_area_level_1, zip_code, country)
  }).asPromise()
    .then(res => res.json.results[0].geometry.location)
}

export default getGeocode
