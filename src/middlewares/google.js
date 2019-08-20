import getAutocompletePredictions from './../google/maps/places'

function serve(request, response) {
  if(request.params.name === 'autocomplete') {
    getAutocompletePredictions(request.query.input)
      .then(res => response.json(res).status(200).end())
      .catch(err => response.json({ message: 'Something went wrong' }).status(500).end())
  } else {
    response
      .json({ message: 'Invalid parameter' })
      .status(400)
      .end()
  }
}

export default serve
