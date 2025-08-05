const express = require("express");
const router = express.Router();
const referralController = require("../controllers/referralController"); // Adjust path if needed

router.post("/generate-referral-code", referralController.generateReferralCode);
router.post("/redeem-referral-code", referralController.redeemReferralCode);
router.get("/referral-metrics", referralController.getReferralMetrics);
router.get("/redeemed-codes", referralController.getRedeemedCodes);

module.exports = router;
