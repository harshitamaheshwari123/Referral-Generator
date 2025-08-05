// Mock in-memory store

const referrals = {
  // e.g. "REF123AB": { code: "REF123AB", referrerId: "USER_001", uses: 0 }
};

const userReferrals = {
  // e.g. "USER_005": { newUserId: "USER_005", referrerCode: "REF123AB" }
};

module.exports = {
  referrals,
  userReferrals,
};
