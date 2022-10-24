/*========== Criteria ==========
	Control
	Validation
	Transparency
	Environment
	Privacy
	Fees
*/

/* ========== Features ==========
	2fa
	Bech32
	Full Node
	Hardware Wallet
	Legacy Addresses
	Lighting
	Multisig
	SegWit
*/

export const walletData = [
  {
    wallet: "Atomic Wallet",
    operatingSystem: ["windows", "linux", "macos", "android", "ios"],
    userType: ["new"],
    criteria: ["selfCustodial"],
    features: ["2fa"],
  },
  {
    wallet: "BitPay",
    operatingSystem: ["android", "ios"],
    userType: ["new"],
    criteria: ["selfCustodial"],
    features: ["2fa"],
  },
  {
    wallet: "Coinbase Wallet app",
    operatingSystem: ["android", "ios"],
    userType: ["experienced"],
    criteria: ["selfCustodial", "2fa", "browserWallet", "api"],
    features: ["2fa", "browserWallet", "api"],
  },
  {
    wallet: "Doge Wallet",
    operatingSystem: ["windows", "linux", "macos"],
    userType: ["experienced"],
    criteria: ["selfCustodial"],
    features: ["importWallet", "browserWallet", "openSource"],
  },
  {
    wallet: "DogeChain",
    operatingSystem: ["windows", "linux", "macos"],
    userType: ["experienced"],
    criteria: ["selfCustodial"],
    features: ["importWallet", "browserWallet", "openSource"],
  },
  {
    wallet: "Dogecoin Core",
    operatingSystem: ["windows", "linux", "macos"],
    userType: ["experienced", "new"],
    criteria: ["selfCustodial"],
    features: [
      "2fa",
      "api",
      "fullNode",
      "importWallet",
      "multiSig",
      "openSource",
    ],
  },
];
