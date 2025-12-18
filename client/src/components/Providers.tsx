"use client";

import { createNetworkConfig, IotaClientProvider, WalletProvider } from "@iota/dapp-kit";
import { getFullnodeUrl } from "@iota/iota-sdk/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import "@iota/dapp-kit/dist/index.css"; // 引入錢包樣式

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl("testnet") },
});

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <IotaClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect={true}>
          {children}
        </WalletProvider>
      </IotaClientProvider>
    </QueryClientProvider>
  );
}