import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {WagmiProvider} from 'wagmi'

import {createAppKit} from '@reown/appkit/react'

import {arbitrum} from '@reown/appkit/networks'
import {WagmiAdapter} from '@reown/appkit-adapter-wagmi'
import type {AppKitNetwork} from "@reown/appkit-common";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const network = arbitrum
export const rpc = network.rpcUrls.default.http[0]

// 1. Get projectId from https://cloud.reown.com
const projectId = '...'

// 2. Create a metadata object - optional
const metadata = {
    name: 'test',
    description: 'AppKit Example',
    url: 'https://test.io', // origin must match your domain & subdomain
    icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Set the networks
const networks = [network] as [AppKitNetwork]

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: false
});

// 5. Create modal
createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    },
    themeVariables: {
        '--w3m-accent': "#0047D0FF",
        '--w3m-color-mix-strength': 10,
    }
})

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
      </WagmiProvider>
  </StrictMode>,
)
