export const enum CHAINS{
    MODE = 34443,
}
export const enum PROTOCOLS{
    AIRPUFF = 0,
}

export const enum AMM_TYPES{
    UNISWAPV3 = 0,
}

export const SUBGRAPH_URLS = {
    [CHAINS.MODE]: {
        [PROTOCOLS.AIRPUFF]: {
            [AMM_TYPES.UNISWAPV3]: "https://api.goldsky.com/api/public/project_clmqdcfcs3f6d2ptj3yp05ndz/subgraphs/Algebra/0.0.1/gn"
        }
    }
}
export const RPC_URLS = {
    [CHAINS.MODE]: "https://rpc.goldsky.com"
}