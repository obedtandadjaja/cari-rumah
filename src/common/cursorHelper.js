export function encodeCursor({ column, value }) {
  return Buffer.from(JSON.stringify([column, value])).toString('base64')
}

export function decodeCursor(cursor) {
  if (!cursor) return cursor

  let json = JSON.parse(Buffer.from(cursor, 'base64').toString())
  return {
    column: json[0],
    value: json[1]
  }
}
