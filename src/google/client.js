import Promise from 'promise'

import googleMaps from '@google/maps'

const client = googleMaps.createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
})

export default client
