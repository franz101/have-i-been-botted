import React from "react";
import { chain, configureChains, createClient } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { Explorer } from "../components/Snipe";

const defaultChains = [chain.polygonMumbai, chain.rinkeby, chain.optimism];

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  jsonRpcProvider({
    rpc: (chain) => {
      switch (chain.network) {
        case "optimism-mainnet":
          return {
            http: "https://optimism-mainnet.gateway.pokt.network/v1/lb/62b6db72123e6f003983ad87",
          };
        case "gnosischain-mainnet":
          return {
            http: "https://gnosischain-mainnet.gateway.pokt.network/v1/lb/62b6db72123e6f003983ad87",
          };
        case "boba":
          return {
            http: "https://poly-mumbai.gateway.pokt.network/v1/lb/62b6db72123e6f003983ad87",
          };
        case "maticmum":
          return {
            http: "https://poly-mumbai.gateway.pokt.network/v1/lb/62b6db72123e6f003983ad87",
          };

        default:
          return {
            http: "https://eth-rinkeby.gateway.pokt.network/v1/lb/62b6db72123e6f003983ad87",
          };
      }
    },
  }),
]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),

    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const ExplorerWrapper = () => {
  return (
    <WagmiConfig client={client}>
      <Explorer />
    </WagmiConfig>
  );
};
export default ExplorerWrapper;
