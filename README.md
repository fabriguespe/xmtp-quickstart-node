```
const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

async function main() {
  const xmtp = await Client.create(ethers.Wallet.createRandom(), {
    env: "dev",
  });
  const conv = await xmtp.conversations.newConversation(
    "0x3F11b27F323b62B159D2642964fa27C46C841897",
  );
  const message = await conv.send("gm");
  console.log(message);
}
main();
```
