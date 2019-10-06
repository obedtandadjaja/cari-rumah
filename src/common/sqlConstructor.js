export function constructSQL(baseSQL, { after, before, sortBy, sortDirection, batchSize, where }) {
  let sql = baseSQL
  let whereClauseExists = baseSQL.indexOf('where') >= 0 || baseSQL.indexOf('WHERE') >= 0

  if (after) {
    sql += whereClauseExists ? ' and ' : ' where '
    sql += '${options.after.column:alias} > ${options.after.value}'

    whereClauseExists = true
  }

  if (before) {
    sql += whereClauseExists ? ' and ' : ' where '
    sql += '${options.after.column:alias} < ${options.after.value}'

    whereClauseExists = true
  }

  if (where) {
    Object.keys(where).forEach((key) => {
      sql += whereClauseExists ? ' and ' : ' where '

      const indexMin = key.indexOf('_min')
      const indexMax = key.indexOf('_max')

      if (indexMin >= 0) {
        sql += key.substring(0, indexMin) + ' >= ${options.where.' + key + '}'
      } else if (indexMax >= 0) {
        sql += key.substring(0, indexMax) + ' <= ${options.where.' + key + '}'
      } else {
        sql += key + ' = ${options.where.' + key + '}'
      }

      whereClauseExists = true
    })
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
