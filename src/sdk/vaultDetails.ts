import { CHAINS, LP_VAULT_MAP, PROTOCOLS, VAULTS, VAULT_API_URLS } from './config';
import { getLpTokenPriceUSD } from './price';

export type Position = {
    user: string,
    pool: string,
    block: number,
    position: number,
    lpValue: number,
    lpValueUsd?:number
}

export async function getVaultPositionsAtBlock(
  protocol: PROTOCOLS,
  vault: VAULTS,
  block: number
) {
  const url = VAULT_API_URLS[CHAINS.MODE][protocol][vault];
  const body = { blockNumber: block };
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  const lpAsset = LP_VAULT_MAP[vault]
  const lpUsdValue = await getLpTokenPriceUSD(lpAsset,block)
  const data = await res.json();
  const positions : Position[] = data?.data;

  return positions.map((p)=>({
    ...p,
    lpValueUsd : p.lpValue *lpUsdValue
  }))
  
}
