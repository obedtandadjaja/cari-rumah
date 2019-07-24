exports.up = (db, callback) => {
  db.createTable(`users`, {
    id: { type: `int`, unsigned: true, notNull: true, primaryKey: true, autoIncrement: true },
    name: { type: `string` },
    phone: { type: `string` },
    email: { type: `string` },
    notification_methods: { type: `string[]`, default: `{}` }
  }, callback)
};

exports.down = (db, callback) => {};
