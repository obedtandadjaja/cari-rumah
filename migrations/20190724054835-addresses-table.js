exports.up = (db, callback) => {
  function addGeometryIndex(err) {
    if (err) {
      callback(err)
      return
    }

    db.runSql('create index addresses_geometry_idx on addresses using gist(geometry)', callback)
  }

  db.createTable('addresses', {
    id: { type: 'int', unsigned: true, notNull: true, primaryKey: true, autoIncrement: true },
    address_1: { type: 'string' },
    address_2: { type: 'string' },
    city: { type: 'string' },
    province: { type: 'string' },
    zip_code: { type: 'string' },
    country: { type: 'string' },
    longitude: { type: 'decimal' },
    latitude: { type: 'decimal' },
    geometry: { type: 'geometry(geometry, 3857)' },
    timezone: { type: 'string' }
  }, addGeometryIndex)
}

exports.down = (db, callback) => {}
