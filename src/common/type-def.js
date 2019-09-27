export default `
  enum SortDirection {
    ASC
    DESC
  }

  type Pagination {
    endCursor: String
    hasNextPage: Boolean
    hasPrevPage: Boolean
    startCursor: String
  }
`
