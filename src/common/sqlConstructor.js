export function constructSQL(baseSQL, { after, before, sortBy, sortDirection, batchSize }) {
  let sql = baseSQL
  let whereClauseExists = baseSQL.indexOf('where') >= 0 || baseSQL.indexOf('WHERE') >= 0

  if (after) {
    sql += whereClauseExists ? ' and ' : ' where '
    sql += '${options.after.column:alias} > ${options.after.column:raw}'
  }

  if (before) {
    sql += whereClauseExists ? ' and ' : ' where '
    sql += '${options.after.column:alias} < ${options.after.column:raw}'
  }

  if (sortBy && sortDirection) {
    sql += ' order by ${options.sortBy:alias} ${options.sortDirection:alias}'
  }

  // checking truthy values here since we do not want to limit by 0 anyway
  if (batchSize) {
    sql += ' limit ${options.batchSize:raw}'
  }

  return sql
}
