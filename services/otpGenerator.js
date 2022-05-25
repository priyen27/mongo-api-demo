const generateOtp = () => {
  var otp = Math.random();
  otp = otp * 1000000;
  otp = parseInt(otp);
  return otp;
};

const sendOtp = {
  generateOtp
};

module.exports = sendOtp;
