const { encode, hash, compileCalldata} = require("starknet");

const account = "0x05e5c0d15ce2545aeb32ae4823608ea7bde8cd86fa8b94ee83a207b965245e8";
const to = "0x04cd166762b711f8ae1680164db695406b9f4453c4c9a0691f71d46d077bcdc";
const selector = "vote";
const nonce = "1";


const callDatahash = compileCalldata({"poll_id":1, "vote":"1"});
console.log(callDatahash);

const messageHash = encode.addHexPrefix(
    hash.hashMessage(account, to, selector, callDatahash, nonce),
);

console.log(messageHash);