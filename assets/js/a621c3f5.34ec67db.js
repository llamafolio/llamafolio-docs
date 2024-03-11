"use strict";(self.webpackChunkllamafolio_docs=self.webpackChunkllamafolio_docs||[]).push([[87],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={title:"Contracts",sidebar_position:1},o="Contracts",i={unversionedId:"tutorials/aave/contracts",id:"tutorials/aave/contracts",title:"Contracts",description:"The goal of getContracts is to return all the contracts defined by a protocol. For instance:",source:"@site/docs/tutorials/aave/contracts.mdx",sourceDirName:"tutorials/aave",slug:"/tutorials/aave/contracts",permalink:"/docs/tutorials/aave/contracts",draft:!1,editUrl:"https://github.com/llamafolio/llamafolio-docs/tree/master/docs/tutorials/aave/contracts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Contracts",sidebar_position:1},sidebar:"tutorial",previous:{title:"Tutorial: Aave v2",permalink:"/docs/tutorials/aave/"},next:{title:"Balances",permalink:"/docs/tutorials/aave/balances"}},l={},c=[{value:"Lending Pool",id:"lending-pool",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contracts"},"Contracts"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"goal")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"getContracts")," is to return all the contracts defined by a protocol. For instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"staking contracts"),(0,r.kt)("li",{parentName:"ul"},"governance contracts"),(0,r.kt)("li",{parentName:"ul"},"lending / borrowing pools"),(0,r.kt)("li",{parentName:"ul"},"DEX pairs"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For performance reasons (ex: fetching 1 million pools), ",(0,r.kt)("inlineCode",{parentName:"p"},"getContracts")," is called on a regular basis by a background task, but not when updating someone's balances.")),(0,r.kt)("h2",{id:"lending-pool"},"Lending Pool"),(0,r.kt)("p",null,"The lending pool contract is used to get lending/borrowing assets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aTokens"),(0,r.kt)("li",{parentName:"ul"},"stable debt tokens"),(0,r.kt)("li",{parentName:"ul"},"variable debt tokens")),(0,r.kt)("p",null,"On Ethereum mainnet, the lending pool contract is deployed at ",(0,r.kt)("inlineCode",{parentName:"p"},"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9"),"."),(0,r.kt)("p",null,"To get reserves info, let's iterate on all reserve contracts (using ",(0,r.kt)("inlineCode",{parentName:"p"},"getReservesList"),") and call ",(0,r.kt)("inlineCode",{parentName:"p"},"getReserveData"),"."),(0,r.kt)("p",null,"Get ABI from ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9#code"},"Etherscan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/adapters/aave-v2/ethereum.ts"',title:'"/src/adapters/aave-v2/ethereum.ts"'},'const abi = {\n  getReservesList: {\n    inputs: [],\n    name: "getReservesList",\n    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],\n    stateMutability: "view",\n    type: "function",\n  },\n  getReserveData: {\n    inputs: [{ internalType: "address", name: "asset", type: "address" }],\n    name: "getReserveData",\n    outputs: [\n      {\n        components: [\n          {\n            components: [\n              { internalType: "uint256", name: "data", type: "uint256" },\n            ],\n            internalType: "struct DataTypes.ReserveConfigurationMap",\n            name: "configuration",\n            type: "tuple",\n          },\n          {\n            internalType: "uint128",\n            name: "liquidityIndex",\n            type: "uint128",\n          },\n          {\n            internalType: "uint128",\n            name: "variableBorrowIndex",\n            type: "uint128",\n          },\n          {\n            internalType: "uint128",\n            name: "currentLiquidityRate",\n            type: "uint128",\n          },\n          {\n            internalType: "uint128",\n            name: "currentVariableBorrowRate",\n            type: "uint128",\n          },\n          {\n            internalType: "uint128",\n            name: "currentStableBorrowRate",\n            type: "uint128",\n          },\n          {\n            internalType: "uint40",\n            name: "lastUpdateTimestamp",\n            type: "uint40",\n          },\n          {\n            internalType: "address",\n            name: "aTokenAddress",\n            type: "address",\n          },\n          {\n            internalType: "address",\n            name: "stableDebtTokenAddress",\n            type: "address",\n          },\n          {\n            internalType: "address",\n            name: "variableDebtTokenAddress",\n            type: "address",\n          },\n          {\n            internalType: "address",\n            name: "interestRateStrategyAddress",\n            type: "address",\n          },\n          { internalType: "uint8", name: "id", type: "uint8" },\n        ],\n        internalType: "struct DataTypes.ReserveData",\n        name: "",\n        type: "tuple",\n      },\n    ],\n    stateMutability: "view",\n    type: "function",\n  },\n} as const;\n')),(0,r.kt)("p",null,"Create a function to fetch contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'address: address of the contract the user "interacted" with, either by making a transaction to it or by receiving it. In this example, the user receives aTokens when lending / borrowing on the platform.'),(0,r.kt)("li",{parentName:"ul"},"underlyings: actual underlying token. aDAI -> DAI"),(0,r.kt)("li",{parentName:"ul"},"category: 'lending' for aTokens, 'borrow' for debt tokens")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function getLendingPoolContracts(ctx: BaseContext, lendingPool: Contract) {\n  const contracts: Contract[] = []\n\n  const reservesList = await call({\n    ctx,\n    target: lendingPool.address,\n    abi: abi.getReservesList,\n  })\n\n  const reservesDataRes = await multicall({\n    ctx,\n    calls: reservesList.map(\n      (reserveTokenAddress) => ({ target: lendingPool.address, params: [reserveTokenAddress] } as const),\n    ),\n    abi: abi.getReserveData,\n  })\n\n  for (let i = 0; i < reservesDataRes.length; i++) {\n    const reserveDataRes = reservesDataRes[i]\n    if (!reserveDataRes.success) {\n      continue\n    }\n\n    const underlyingToken = reserveDataRes.input.params[0]\n    const aToken = reserveDataRes.output.aTokenAddress\n    const stableDebtToken = reserveDataRes.output.stableDebtTokenAddress\n    const variableDebtToken = reserveDataRes.output.variableDebtTokenAddress\n\n    contracts.push(\n      {\n        chain: ctx.chain,\n        address: aToken,\n        underlyings: [underlyingToken],\n        category: 'lend',\n      },\n      {\n        chain: ctx.chain,\n        address: stableDebtToken,\n        underlyings: [underlyingToken],\n        category: 'borrow',\n        stable: true,\n      },\n      {\n        chain: ctx.chain,\n        address: variableDebtToken,\n        underlyings: [underlyingToken],\n        category: 'borrow',\n        stable: false,\n      },\n    )\n  }\n\n  return contracts\n}\n")),(0,r.kt)("p",null,"Return contracts in ",(0,r.kt)("inlineCode",{parentName:"p"},"getContracts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/adapters/aave-v2/ethereum.ts"',title:'"/src/adapters/aave-v2/ethereum.ts"'},'const lendingPool: Contract = {\n  name: "Lending Pool",\n  address: "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",\n  chain: "ethereum",\n};\n\nexport const getContracts = async (ctx: BaseContext) => {\n  const pools = await getLendingPoolContracts(ctx, lendingPool);\n\n  return {\n    contracts: {\n      pools,\n    },\n  };\n};\n')))}d.isMDXComponent=!0}}]);