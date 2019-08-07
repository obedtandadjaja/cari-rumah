import googleMapsClient from '../client.js'

function getTimezone(long, lat) {
  return googleMapsClient.timezone({
    location: [long, lat],
    timestamp: Date.now(),
    language: `en`
  }).asPromise()
}

export default getTimezone
