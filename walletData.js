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
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["windows", "linux", "macos", "android", "ios"],
    userType: ["new"],
    criteria: ["selfCustodial"],
    features: ["2fa"],
  },
  {
    wallet: "BitPay",
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["windows", "linux", "macos", "android", "ios"],
    userType: ["new", "experienced"],
    criteria: ["control"],
    features: ["2fa"],
  },
  {
    wallet: "Coinbase Wallet app",
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["android", "ios"],
    userType: ["experienced"],
    criteria: ["selfCustodial"],
    features: ["2fa", "browserWallet", "api"],
  },
  {
    wallet: "Doge Wallet",
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["windows", "linux", "macos"],
    userType: ["experienced"],
    criteria: ["selfCustodial"],
    features: ["importWallet", "browserWallet", "openSource"],
  },
  {
    wallet: "DogeChain",
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["windows", "linux", "macos"],
    userType: ["experienced"],
    criteria: ["selfCustodial"],
    features: ["importWallet", "browserWallet", "openSource"],
  },
  {
    wallet: "Dogecoin Core",
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["windows", "linux", "macos"],
    userType: ["experienced", "new"],
    criteria: ["control", "validation", "transparency", "privacy", "fees"],
    features: [
      "2fa",
      "api",
      "fullNode",
      "importWallet",
      "multiSig",
      "openSource",
    ],
  },
  {
    wallet: "Ledger",
    logo: "/Assets/wallet_menu_windows.svg",
    operatingSystem: ["hardware"],
    userType: ["experienced"],
    criteria: ["control", "validation", "environment", "privacy", "fees"],
    features: ["importWallet", "browserWallet", "openSource"],
  },
];
