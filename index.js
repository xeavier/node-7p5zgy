// Run `node index.js` in the terminal

var Wallet = require('ethereumjs-wallet');
const EthWallet = Wallet.default.generate();
console.log("address: " + EthWallet.getAddressString());
console.log("privateKey: " + EthWallet.getPrivateKeyString());

console.log(`Hello Node.js v${process.versions.node}!`);
