import { DynamicWidget, DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

export const SolanaWalletConnect = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "4377d948-28db-4cbe-9088-4410bf512adc",
        walletConnectors: [SolanaWalletConnectors],
        appName: "Solana App",
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
};

export default SolanaWalletConnect; 