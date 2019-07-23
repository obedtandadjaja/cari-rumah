exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable(`listings`, {
    id: `id`,
    user_id: {
      type: `integer`,
      notNull: true,
      references: `"users"`
    },
    num_bedrooms: { type: `decimal` },
    num_bathrooms: { type: `decimal` },
    num_parking_spots: { type: `decimal` },
    lot_size_sqft: { type: `decimal` },
    num_stories: { type: `decimal` },
    year_built: { type: `decimal` },
    address_id: {
      type: `integer`,
      notNull: true,
      references: `"addresses"`
    },
    price_cents: { type: `bigint` },
    price_currency: { type: `varchar(5)` },
    description: { type: `text` },
    display_picture_url: { type: `text` },
    residential_type: { type: `varchar(30)` },
    type: { type: `varchar(30)` }
  })
  pgm.createIndex(`listings`, `user_id`)
  pgm.createIndex(`listings`, `address_id`)
};

exports.down = (pgm) => {};
