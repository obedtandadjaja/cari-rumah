exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable(`users`, {
    id: `id`,
    name: { type: `varchar(255)` },
    phone: { type: `varchar(20)` },
    email: { type: `varchar(255)` },
    notification_methods: { type: `varchar(20)[]`, default: `{}` }
  })
};

exports.down = (pgm) => {};
