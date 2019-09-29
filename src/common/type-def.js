export default `
  enum SortDirection {
    ASC
    DESC
  }

  type PageInfo {
    endCursor: String
  }

  interface Node {
    id: ID!
  }

  input PaginationInput {
    after: String
    batchSize: Int!
  }

  input Coordinate {
    lat: Float!
    long: Float!
  }
`

// NOTE that we are skipping backwards pagination right now since there are no current use cases that require it
