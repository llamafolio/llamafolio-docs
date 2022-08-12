---
title: Adapter interface
sidebar_position: 3
---

## Metadata

```ts
interface Adapter {
  id: string;
  name: string;
  description: string;
  // CoinGecko ID
  coingecko?: string;
  // DefiLlama ID
  defillama?: string;
  links: Links;
}

type Links = {
  website?: string;
  doc?: string;
  github?: string;
  twitter?: string;
  telegram?: string;
  discord?: string;
  medium?: string;
};
```

# Contracts

List the contracts defined in your protocol: they will be used later to retrieve the account positions.

```ts
interface Adapter {
  // ...
  getContracts: () => ContractsConfig | Promise<ContractsConfig>;
}

type BaseContract = {
  chain: Chain;
  address: string;
};

type Contract = BaseContract & {
  name?: string;
  displayName?: string;
};

type ContractsConfig = {
  contracts: Contract[];
  revalidate?: number;
};
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

type Token = {
  chain: Chain;
  address: string;
  symbol: string;
  decimals: number;
};

type Category =
  | "wallet"
  | "lend"
  | "lend-rewards"
  | "borrow"
  | "borrow-stable"
  | "borrow-variable"
  | "farm"
  | "lp"
  | "lp-stable"
  | "stake"
  | "lock"
  | "lock-rewards"
  | "vest";

type BaseBalance = Token & {
  amount: BigNumber;
};

type Balance = BaseBalance & {
  category: Category;
};

export type BalancesConfig = {
  balances: Balance[];
  revalidate?: number;
};
```
