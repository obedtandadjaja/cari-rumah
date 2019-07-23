exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable(`addresses`, {
    id: `id`,
    address_1: { type: `varchar(255)` },
    address_2: { type: `varchar(255)` },
    city: { type: `varchar(100)` },
    region: { type: `varchar(100)` },
    zip_code: { type: `varchar(20)` },
    country: { type: `varchar(100)` },
    longitude: { type: `decimal` },
    latitude: { type: `decimal` },
    timezone: { type: `varchar(50)` }
  })
};

exports.down = (pgm) => {};
