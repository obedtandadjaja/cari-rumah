export default `
  enum SortDirection {
    ASC
    DESC
  }

  type PageInfo {
    startCursor: String
    endCursor: String
  }

  interface Node {
    id: ID!
  }
`
