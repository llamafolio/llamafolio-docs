"use strict";(self.webpackChunkllamafolio_docs=self.webpackChunkllamafolio_docs||[]).push([[933],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>y});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,l=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),d=c(t),y=r,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||s;return t?a.createElement(m,o(o({ref:e},u),{},{components:t})):a.createElement(m,o({ref:e},u))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64649:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={title:"Wrap up",sidebar_position:3},o=void 0,i={unversionedId:"tutorials/aave/wrap-up",id:"tutorials/aave/wrap-up",title:"Wrap up",description:"Full code",source:"@site/docs/tutorials/aave/wrap-up.mdx",sourceDirName:"tutorials/aave",slug:"/tutorials/aave/wrap-up",permalink:"/docs/tutorials/aave/wrap-up",draft:!1,editUrl:"https://github.com/llamafolio/llamafolio-docs/tree/master/docs/tutorials/aave/wrap-up.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Wrap up",sidebar_position:3},sidebar:"tutorial",previous:{title:"Balances",permalink:"/docs/tutorials/aave/balances"}},l={},c=[],u={toc:c};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Full code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/adapters/aave-v2/ethereum.ts"',title:'"/src/adapters/aave-v2/ethereum.ts"'},"import {\n  Balance,\n  BalancesContext,\n  BaseContext,\n  Contract,\n  GetBalancesHandler,\n} from \"@lib/adapter\";\nimport { resolveBalances } from \"@lib/balance\";\nimport { call } from \"@lib/call\";\nimport { getERC20BalanceOf } from \"@lib/erc20\";\nimport { multicall } from \"@lib/multicall\";\n\nconst abi = {\n  getReservesList: {\n    inputs: [],\n    name: 'getReservesList',\n    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],\n    stateMutability: 'view',\n    type: 'function',\n  },\n  getReserveData: {\n    inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],\n    name: 'getReserveData',\n    outputs: [\n      {\n        components: [\n          {\n            components: [{ internalType: 'uint256', name: 'data', type: 'uint256' }],\n            internalType: 'struct DataTypes.ReserveConfigurationMap',\n            name: 'configuration',\n            type: 'tuple',\n          },\n          {\n            internalType: 'uint128',\n            name: 'liquidityIndex',\n            type: 'uint128',\n          },\n          {\n            internalType: 'uint128',\n            name: 'variableBorrowIndex',\n            type: 'uint128',\n          },\n          {\n            internalType: 'uint128',\n            name: 'currentLiquidityRate',\n            type: 'uint128',\n          },\n          {\n            internalType: 'uint128',\n            name: 'currentVariableBorrowRate',\n            type: 'uint128',\n          },\n          {\n            internalType: 'uint128',\n            name: 'currentStableBorrowRate',\n            type: 'uint128',\n          },\n          {\n            internalType: 'uint40',\n            name: 'lastUpdateTimestamp',\n            type: 'uint40',\n          },\n          {\n            internalType: 'address',\n            name: 'aTokenAddress',\n            type: 'address',\n          },\n          {\n            internalType: 'address',\n            name: 'stableDebtTokenAddress',\n            type: 'address',\n          },\n          {\n            internalType: 'address',\n            name: 'variableDebtTokenAddress',\n            type: 'address',\n          },\n          {\n            internalType: 'address',\n            name: 'interestRateStrategyAddress',\n            type: 'address',\n          },\n          { internalType: 'uint8', name: 'id', type: 'uint8' },\n        ],\n        internalType: 'struct DataTypes.ReserveData',\n        name: '',\n        type: 'tuple',\n      },\n    ],\n    stateMutability: 'view',\n    type: 'function',\n  },\n  getUserAccountData: {\n    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],\n    name: 'getUserAccountData',\n    outputs: [\n      {\n        internalType: 'uint256',\n        name: 'totalCollateralBase',\n        type: 'uint256',\n      },\n      { internalType: 'uint256', name: 'totalDebtBase', type: 'uint256' },\n      {\n        internalType: 'uint256',\n        name: 'availableBorrowsBase',\n        type: 'uint256',\n      },\n      {\n        internalType: 'uint256',\n        name: 'currentLiquidationThreshold',\n        type: 'uint256',\n      },\n      { internalType: 'uint256', name: 'ltv', type: 'uint256' },\n      { internalType: 'uint256', name: 'healthFactor', type: 'uint256' },\n    ],\n    stateMutability: 'view',\n    type: 'function',\n  },\n} as const\n\nasync function getLendingPoolContracts(ctx: BaseContext, lendingPool: Contract) {\n  const contracts: Contract[] = []\n\n  const reservesList = await call({\n    ctx,\n    target: lendingPool.address,\n    abi: abi.getReservesList,\n  })\n\n  const reservesDataRes = await multicall({\n    ctx,\n    calls: reservesList.map(\n      (reserveTokenAddress) => ({ target: lendingPool.address, params: [reserveTokenAddress] } as const),\n    ),\n    abi: abi.getReserveData,\n  })\n\n  for (let i = 0; i < reservesDataRes.length; i++) {\n    const reserveDataRes = reservesDataRes[i]\n    if (!reserveDataRes.success) {\n      continue\n    }\n\n    const underlyingToken = reserveDataRes.input.params[0]\n    const aToken = reserveDataRes.output.aTokenAddress\n    const stableDebtToken = reserveDataRes.output.stableDebtTokenAddress\n    const variableDebtToken = reserveDataRes.output.variableDebtTokenAddress\n\n    contracts.push(\n      {\n        chain: ctx.chain,\n        address: aToken,\n        underlyings: [underlyingToken],\n        category: 'lend',\n      },\n      {\n        chain: ctx.chain,\n        address: stableDebtToken,\n        underlyings: [underlyingToken],\n        category: 'borrow',\n        stable: true,\n      },\n      {\n        chain: ctx.chain,\n        address: variableDebtToken,\n        underlyings: [underlyingToken],\n        category: 'borrow',\n        stable: false,\n      },\n    )\n  }\n\n  return contracts\n}\n\nasync function getLendingPoolBalances(ctx: BalancesContext, contracts: Contract[]) {\n  const balances: Balance[] = await getERC20BalanceOf(ctx, contracts as Token[])\n\n  // use the same amount for underlyings\n  for (const balance of balances) {\n    if (balance.amount > 0n && balance.underlyings) {\n      balance.underlyings[0] = { ...balance.underlyings[0], amount: balance.amount }\n    }\n  }\n\n  return balances\n}\n\nconst lendingPool: Contract = {\n  name: \"Lending Pool\",\n  address: \"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9\",\n  chain: \"ethereum\",\n};\n\nexport const getContracts = async (ctx: BaseContext) => {\n  const pools = await getLendingPoolContracts(ctx, lendingPool);\n\n  return {\n    contracts: {\n      pools,\n    },\n  };\n};\n\nexport const getBalances: GetBalancesHandler<typeof getContracts> = async (\n  ctx,\n  contracts\n) => {\n  const balances = await resolveBalances<typeof getContracts>(ctx, contracts, {\n    pools: getLendingPoolBalances,\n  });\n\n  return {\n    balances,\n  };\n};\n")),(0,r.kt)("h1",{id:"results"},"Results"),(0,r.kt)("p",null,"To test the adapter locally, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run adapter aave-v2 ethereum 0x777777c9898d384f785ee44acfe945efdff5f3e0\n")),(0,r.kt)("p",null,"(or any address of your choice). You should see lending and borrowing balances displayed in a table."))}p.isMDXComponent=!0}}]);