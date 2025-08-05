const referralService = require("../services/referralService");

exports.generateReferralCode = (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "userId is required" });
  }

  const code = referralService.generateReferralCode(userId);
  res.json({ success: true, code });
};

exports.redeemReferralCode = (req, res) => {
  const { code, newUserId } = req.body;
  if (!code || !newUserId) {
    return res
      .status(400)
      .json({ success: false, message: "code and newUserId are required" });
  }

  const result = referralService.redeemReferralCode(code, newUserId);
  if (!result.success) return res.status(result.status || 400).json(result);

  res.json({ success: true, message: "Referral applied!" });
};

exports.getReferralMetrics = (req, res) => {
  const { referrerId } = req.query;
  if (!referrerId) {
    return res
      .status(400)
      .json({ success: false, message: "referrerId is required" });
  }

  const metrics = referralService.getReferralMetrics(referrerId);
  res.json(metrics);
};

exports.getRedeemedCodes = (req, res) => {
  const redeemed = referralService.getRedeemedCodes();
  res.json({ success: true, redeemed });
};
