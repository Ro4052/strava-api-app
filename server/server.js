const express = require("express");

module.exports = port => {
  const app = express();

  return app.listen(port);
}
