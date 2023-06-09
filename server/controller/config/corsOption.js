// For localhost
// const whiteList = ["http://localhost:3000", "http://localhost:7000"];

// for production use for AWS...
const whiteList = ["http://34.227.27.46", "http://34.227.27.46:7000"];
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
