import {
  getAutocompletePredictions,
  getPlaceGeometryById
} from './../google/maps/places'

function serve(request, response) {
  if (request.method === 'GET') {
    if (request.params.name === 'autocomplete') {
      getAutocompletePredictions(request.query.input)
        .then(res => response.json(res).status(200).end())
        .catch(err => {
          return response.json({ message: 'Something went wrong' })
            .status(500)
            .end()
        })
      return
    } else if (request.params.name === 'placeGeometry') {
      getPlaceGeometryById(request.query.placeId)
        .then(res => response.json(res).status(200).end())
        .catch(err => {
          return response.json({ message: 'Something went wrong' })
            .status(500)
            .end()
        })
      return
    }
  }

  // default case
  response
    .json({ message: 'Invalid parameter' })
    .status(400)
    .end()
}

export default serve
