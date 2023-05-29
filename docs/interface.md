---
title: Adapter interface
sidebar_position: 3
---

## Metadata

:::info

The protocol should be listed on DefiLlama before LlamaFolio.

https://docs.llama.fi/list-your-project/submit-a-project

:::

These types are exported in `@lib/adapter`.

```ts
interface Adapter extends Partial<Record<Chain, AdapterHandler>> {
  /**
   * DefiLlama slug
   */
  id: string;
}
```

# Context

Context is passed through the app and contain info about the current adapter / chain as well as the block height.

```ts
interface BaseContext {
  chain: Chain;
  adapterId: string;
  blockHeight?: number;
}
```

When retrieving balances, the context also contains the current user address.

```ts
export interface BalancesContext extends BaseContext {
  address: `0x${string}`;
}
```

# Contracts

List the contracts defined in your protocol: they will be used later to retrieve the account positions.

```ts
interface AdapterHandler {
  getContracts: GetContractsHandler;
}
```

```ts
interface ContractsMap {
  [key: string]: Contract | Contract[] | RawContract | RawContract[];
}

interface ContractsConfig<C extends ContractsMap, P extends ContractsMap> {
  contracts: C;
  props?: P;
  revalidate?: number;
  revalidateProps?: { [key: string]: any };
}

/**
 * RawContract is automatically mapped to Contract
 */
type ExcludeRawContract<T> = {
  [P in keyof T]: Exclude<T[P], RawContract | RawContract[]>;
};

/**
 * Pass previous `revalidateProps` passed to `getContracts` handler to know where the previous revalidate process ended.
 */
type GetContractsHandler<
  C extends ContractsMap = ContractsMap,
  P extends ContractsMap = ContractsMap
> = (
  ctx: BaseContext,
  revalidateProps: { [key: string]: any }
) => ContractsConfig<C, P> | Promise<ContractsConfig<C, P>>;
```

Contract definition:

```ts
type Category =
  | "wallet"
  | "lend"
  | "borrow"
  | "stake"
  | "vest"
  | "lock"
  | "lp"
  | "farm"
  | "reward";

type ContractStandard = "erc20" | "erc721";

interface BaseContract {
  // discriminators
  standard?: ContractStandard;
  category?: Category;

  name?: string;
  displayName?: string;
  chain: Chain;
  address: `0x${string}`;
  symbol?: string;
  decimals?: number;
  stable?: boolean;

  // DefiLlama yields API identifier. Matches pool or pool_old
  yieldKey?: string;
}
```

# Balances

```ts
interface Adapter {
  // ...
  getBalances: (
    ctx: BaseContext,
    contracts: BaseContract[]
  ) => BalancesConfig | Promise<BalancesConfig>;
}

export interface BaseBalance extends BaseContract {
  amount: bigint;
}

export interface Balance extends BaseBalance {
  // optional rewards
  rewards?: BaseBalance[];
  // optional underlying tokens.
  // ex: aToken -> token (AAVE)
  // ex: Uniswap Pair -> [token0, token1]
  underlyings?: BaseBalance[];
}

export type BalancesConfig = {
  balances: Balance[];
  revalidate?: number;
};
```
