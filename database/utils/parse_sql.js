const fs = require("fs");

const parseSql = (path) => {
  const sql = fs.readFileSync(path).toString();

  return sql;
};

module.exports = parseSql;
