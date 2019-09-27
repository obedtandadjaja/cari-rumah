export default `
  enum SortDirection {
    ASC
    DESC
  }

  type Pagination {
    startCursor: String
    endCursor: String
  }
`
