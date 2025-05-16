import Image from "next/image";
import { Geist } from "next/font/google";
import SolanaWalletConnect from "../components/SolanaWalletConnect";

const geist = Geist({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geist.className} min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                SolanaPatents
              </span>
            </div>
            <div className="flex items-center gap-4">
              <SolanaWalletConnect />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white">
                Déposez vos brevets
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                sur la blockchain Solana
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sécurisez vos innovations de manière immuable et transparente grâce à la blockchain Solana.
              Une nouvelle ère pour la propriété intellectuelle.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="absolute -top-4 left-6 bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Sécurité Maximale</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Vos brevets sont immuablement enregistrés sur la blockchain Solana, garantissant leur authenticité et leur traçabilité.
              </p>
            </div>

            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="absolute -top-4 left-6 bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Transactions Rapides</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Profitez de la vitesse et de l'efficacité de Solana pour des dépôts de brevets instantanés et économiques.
              </p>
            </div>

            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="absolute -top-4 left-6 bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Transparence Totale</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Chaque dépôt est vérifiable publiquement, créant un système de propriété intellectuelle transparent et fiable.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200">
              Commencer à déposer
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
