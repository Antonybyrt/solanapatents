import { DynamicWidget, DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

// Doc de Dynamic : https://docs.dynamic.xyz/introduction/welcome
// Demo de toutes les features de connexion : https://demo.dynamic.xyz/
// Bouton pour connecter un wallet solana
// Utiliser des hooks Dynamic dans la doc pour récupérer des status de connexion etc...
// Signature de message lors de la connexion pour confirmer que la personne est propriétaire du wallet
// Voir différence entre visitor et authenticated user : http://docs.dynamic.xyz/wallets/advanced-wallets/connected-vs-authenticated#connected-vs-authenticated

// Utiliser @solana/web3.js pour appeler les fonctions smart contract

/*
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

function SolanaTransaction() {
    const { primaryWallet } = useDynamicContext();
    
    const sendTransaction = async () => {
        if (!primaryWallet) return;
        
        /// Get connection and signer
        
        const connection = await primaryWallet.getConnection();
        const signer = await primaryWallet.getSigner();
        
        /// Create transaction

        const fromKey = new PublicKey(primaryWallet.address);
        const toKey = new PublicKey(destinationAddress);
        
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: fromKey,
                toPubkey: toKey,
                lamports: amountInLamports,
            })
        );
        
        /// Get latest blockhash

        const blockhash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash.blockhash;
        transaction.feePayer = fromKey;
        
        /// Sign and send

        try {
            const { signature } = await signer.signAndSendTransaction(transaction);
            console.log(`Transaction successful: ${signature}`);
        } catch (error) {
            console.error(error);
        }
    }
}
*/
export const SolanaWalletConnect = () => {
  return (
    <DynamicContextProvider
      theme='auto'
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