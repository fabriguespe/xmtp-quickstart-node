import { Client } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
import { GrpcApiClient } from "@xmtp/grpc-api-client";

const grpcOptions = {
  env: "production", // or "dev" or "local" depending on your environment
  apiUrl: undefined,
  skipContactPublishing: false,
  apiClientFactory: GrpcApiClient.fromOptions,
  // ... any other options you might need
};

const main = async () => {
  try {
    const client = await Client.create(Wallet.createRandom());
    console.log("Non grpc:", client.address);
    const clientA = await Client.create(Wallet.createRandom(), grpcOptions);
    console.log("Grpc1:", clientA.address);
    const clientB = await Client.create(Wallet.createRandom(), grpcOptions);
    console.log("Grpc2:", clientB.address);
  } catch (e) {
    console.log(e);
  }
};

main();
