export function encodeCursor({ column, value }) {
  return btoa(JSON.stringify([column, value]))
}

export function decodeCursor(cursor) {
  let json = JSON.parse(atob(cursor))
  return {
    column: json[0],
    value: json[1]
  }
}
