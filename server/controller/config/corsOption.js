const whiteList = ["http://localhost:3000", "http://localhost:7000"];
const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf.origin !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
  optionsSuccessStatus: 200,
};
module.exports = corsOption;
