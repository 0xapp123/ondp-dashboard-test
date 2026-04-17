export interface Asset {
  id: string;
  symbol: string;
  name: string;
  description: string;
  type: "TREASURY" | "EQUITY" | "ETF";
  price: number;
  yield: number;
  totalSupply: number;
  chains: string[];
}

export interface Holding {
  assetId: string;
  chain: string;
  balance: number;
}

export const ASSETS: Asset[] = [
  {
    id: "usdy",
    symbol: "USDY",
    name: "Ondo US Dollar Yield",
    description:
      "A tokenized note secured by short-term US Treasuries and bank demand deposits. Offers stable yield with daily accrual.",
    type: "TREASURY",
    price: 1.0521,
    yield: 5.21,
    totalSupply: 345_000_000,
    chains: ["Ethereum", "Arbitrum", "Solana", "Sui", "Aptos"],
  },
  {
    id: "ousg",
    symbol: "OUSG",
    name: "Ondo Short-Term US Gov Bond Fund",
    description:
      "Tokenized exposure to short-term US Treasury securities managed by institutional-grade fund managers.",
    type: "TREASURY",
    price: 104.85,
    yield: 4.89,
    totalSupply: 195_000_000,
    chains: ["Ethereum", "Arbitrum"],
  },
  {
    id: "ospy",
    symbol: "oSPY",
    name: "Ondo Tokenized S&P 500 ETF",
    description:
      "Tokenized exposure to the S&P 500 Index via SPY ETF, enabling 24/7 trading and instant settlement.",
    type: "ETF",
    price: 582.43,
    yield: 1.32,
    totalSupply: 12_000_000,
    chains: ["Ethereum", "Arbitrum", "Solana"],
  },
  {
    id: "oaapl",
    symbol: "oAAPL",
    name: "Ondo Tokenized Apple Inc.",
    description:
      "Tokenized stock representing fractional ownership of Apple Inc. (AAPL), settled on-chain.",
    type: "EQUITY",
    price: 213.18,
    yield: 0.55,
    totalSupply: 5_000_000,
    chains: ["Ethereum", "Solana"],
  },
];

export const INITIAL_HOLDINGS: Holding[] = [
  { assetId: "usdy", chain: "Ethereum", balance: 50_000 },
  { assetId: "usdy", chain: "Solana", balance: 25_000 },
  { assetId: "ousg", chain: "Ethereum", balance: 150 },
  { assetId: "ospy", chain: "Arbitrum", balance: 45 },
];

export function getAsset(id: string): Asset | undefined {
  return ASSETS.find((a) => a.id === id);
}
