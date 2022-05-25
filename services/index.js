const sendEmail = require("../services/nodeMailer");
const sendOtp = require("../services/otpGenerator");

module.exports = {
  sendEmail,
  sendOtp
};
