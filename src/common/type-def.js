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
`
