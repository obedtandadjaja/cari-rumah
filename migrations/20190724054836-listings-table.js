exports.up = (db, callback) => {
  function addAddressIdIndex(err) {
    if(err) { callback(err); return; }
    db.addIndex(`listings`, `listings_address_id_idx`, `address_id`, callback)
  }

  function addUserIdIndex(err) {
    if(err) { callback(err); return; }
    db.addIndex(`listings`, `listings_user_id_idx`, `user_id`, addAddressIdIndex)
  }

  db.createTable(`listings`, {
    id: { type: `int`, unsigned: true, notNull: true, primaryKey: true, autoIncrement: true },
    user_id: {
      type: `int`,
      unsigned: true,
      notNull: false,
      foreignKey: {
        name: `listings_user_id_fk`,
        table: `users`,
        rules: {
          onDelete: `CASCADE`
        },
        mapping: `id`
      }
    },
    num_bedrooms: { type: `decimal` },
    num_bathrooms: { type: `decimal` },
    num_parking_spots: { type: `decimal` },
    lot_size_sqft: { type: `decimal` },
    num_stories: { type: `decimal` },
    year_built: { type: `decimal` },
    address_id: {
      type: `int`,
      unsigned: true,
      notNull: false,
      foreignKey: {
        name: `listings_address_id_fk`,
        table: `addresses`,
        rules: {
          onDelete: `CASCADE`
        },
        mapping: `id`
      }
    },
    price_cents: { type: `bigint` },
    price_currency: { type: `string` },
    description: { type: `text` },
    display_picture_url: { type: `text` },
    residential_type: { type: `string` },
    type: { type: `string` }
  }, addUserIdIndex)
};

exports.down = (db, callback) => {};
