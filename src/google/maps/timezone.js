import googleMapsClient from '../client.js'

function getTimezone(lat, long) {
  return googleMapsClient.timezone({
    location: [lat, long],
    timestamp: Date.now() / 1000,
    language: `en`
  }).asPromise()
    .then(res => res.json.timeZoneId)
}

export default getTimezone
