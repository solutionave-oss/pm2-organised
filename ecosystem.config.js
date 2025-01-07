const { lo_pal, suc } = require("./.build");

console.log(lo_pal);

module.exports = {
  apps: [lo_pal, suc],
};
