const generatedCodes = {}; // code: referrerId
const redeemedCodes = {}; // code: array of newUserIds

function generateReferralCode(userId) {
  const code = Math.random().toString(36).substr(2, 8).toUpperCase(); // 8-char random code
  generatedCodes[code] = userId;
  return code;
}

function redeemReferralCode(code, newUserId) {
  if (!generatedCodes[code]) {
    return { success: false, message: "Invalid referral code" };
  }

  // Prevent same user from redeeming any code again
  const alreadyRedeemed = Object.values(redeemedCodes).flat();
  if (alreadyRedeemed.includes(newUserId)) {
    return {
      success: false,
      message: "User has already redeemed a referral code",
    };
  }

  if (!redeemedCodes[code]) {
    redeemedCodes[code] = [];
  }
  redeemedCodes[code].push(newUserId);

  return { success: true };
}

function getReferralMetrics(referrerId) {
  const codes = Object.entries(generatedCodes)
    .filter(([_, refId]) => refId === referrerId)
    .map(([code]) => code);

  const totalReferrals = codes.reduce((sum, code) => {
    return sum + (redeemedCodes[code]?.length || 0);
  }, 0);

  const revenue = totalReferrals * 100; // $100 per referral
  const commission = revenue * 0.1; // 10% commission

  return {
    success: true,
    totalReferrals,
    revenue,
    commission,
  };
}

function getRedeemedCodes() {
  return redeemedCodes;
}

module.exports = {
  generateReferralCode,
  redeemReferralCode,
  getReferralMetrics,
  getRedeemedCodes,
};
