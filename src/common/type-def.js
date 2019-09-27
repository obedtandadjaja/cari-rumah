export default `
  enum SortDirection {
    ASC
    DESC
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
    hasPrevPage: Boolean!
    startCursor: String
  }

  interface Node {
    id: ID!
  }
`
