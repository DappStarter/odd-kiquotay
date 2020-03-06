require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area strategy novel rival saddle method junior light army genius'; 
let testAccounts = [
"0x7d634d3ec9476d3867d9f9413e56b033fe5f296b2c7018dd7fc7fb0b67fb3e76",
"0xf2bedd5adbf6ff939b0ae027a2d7bcaa1789a84d2c440ef0dd90ca1fa79999ef",
"0xc4c1195f0aba9838e6ffa611e6952455eb8130975bf63cfd352fee2bd37cf647",
"0x999e40cae491af9ade1f703f35a5b377a68e0b852b2a266727ae89aff3edba93",
"0x46775e6fc8fef5d099a6fa98526115d012e67db02a04c59d6cef03015b4bc499",
"0x5953c7cdfcc2223db46bf6f1105395ba772056cc106fecf69f8994d24a750cd4",
"0xc771b4568a5377e661300bd34a3c530f34a9c593d38f5485cf5e37462c26b969",
"0x70963f4d90af949d3b0870c15fa85670bf5a0fcf70da7672579071b66e074a0f",
"0x53742bac179536fe03d46aa1f90cfee1b3da92a029d6a983e99a65ae92e55805",
"0x97c5853c81293d9cb52d4ee961a98bb3fe80b8dd883627ca294a7bceba958923"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
