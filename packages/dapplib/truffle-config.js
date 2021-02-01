require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom argue blue shadow shock note oven exchange grid clinic swift genre'; 
let testAccounts = [
"0x26e434afa470ebbfad20aadd53cdf3ea7bda763cced7e7c30fc726a359a829a7",
"0xc838326577af177a500644ccb453bd7c0ba04cb1c4ef8f74cb6832ad7944d321",
"0x7032c5c3c80c0d9e38eceeb636d924843a18fd38eda122bb704522b4dbdd0075",
"0x190674edacf732c06497d87ed54b9a2087253047904e2871c46cce637b33d096",
"0xe61b2b28ae9bd1fa9a82dd65178842941e607515dd8d56a586ccddae8a57c5e9",
"0xdbd7cd643b8874dcf9732ac0eb3921083610bd616903c448efc0add4fa519f3b",
"0x026dc40e6db1bd8123218eae0464b70049a6c890f4965070fe5de44e0c468bbe",
"0xb916714c7195b06701c6cc61d10314fd2d47bc4681a8e2d6d2456feef8899f47",
"0x678a36950ee427c1d9c987b578b6f931426d721ad4ff061bed102a2b76372f50",
"0x07f03e69c2a905e7d31dfb71ebb4581383b4913e44da29d4db428bc09a530d8a"
]; 
let devUri = 'http://test.confluxrpc.org';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

