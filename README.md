# XMTP Node Quickstart

## Installation

```bash
node demo.js
```

## Script

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

## Concepts

Head to our docs to understand our hooks concepts with our JS SDK

- [Get started](https://xmtp.org/docs/build/get-started?sdk=js)
- [Authentication](https://xmtp.org/docs/build/authentication?sdk=js)
- [Conversations](https://xmtp.org/docs/build/conversations?sdk=js)
- [Messages](https://xmtp.org/docs/build/messages/?sdk=js)
- [Streams](https://xmtp.org/docs/build/streams/?sdk=js)
