exports.up = (db, callback) => {
  db.createTable(`addresses`, {
    id: { type: `int`, unsigned: true, notNull: true, primaryKey: true, autoIncrement: true },
    address_1: { type: `string` },
    address_2: { type: `string` },
    city: { type: `string` },
    region: { type: `string` },
    zip_code: { type: `string` },
    country: { type: `string` },
    longitude: { type: `decimal` },
    latitude: { type: `decimal` },
    timezone: { type: `string` }
  }, callback)
};

exports.down = (db, callback) => {};
