```
const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

async function main() {
  const xmtp = await Client.create(ethers.Wallet.createRandom(), {
    env: "dev",
  });
  const conv = await xmtp.conversations.newConversation(
    "address",
  );
  const message = await conv.send("gm");
  console.log(message);
}
main();
```
