export default [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x06fdde03',
  },
  {
    constant: false,
    inputs: [{ name: 'spender', type: 'address' }, { name: 'value', type: 'uint256' }],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x095ea7b3',
  },
  {
    constant: false,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'nominateNewOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x1627540c',
  },
  {
    constant: true,
    inputs: [],
    name: 'initiationTime',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x17c70de4',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x18160ddd',
  },
  {
    constant: false,
    inputs: [{ name: '_feePool', type: 'address' }],
    name: 'setFeePool',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x19db2228',
  },
  {
    constant: false,
    inputs: [{ name: '_beneficiary', type: 'address' }],
    name: 'setSelfDestructBeneficiary',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x20714f88',
  },
  {
    constant: false,
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x23b872dd',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x313ce567',
  },
  {
    constant: false,
    inputs: [],
    name: 'terminateSelfDestruct',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x3278c960',
  },
  {
    constant: false,
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'transferFromSenderPaysFee',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x3c960be9',
  },
  {
    constant: true,
    inputs: [],
    name: 'nominatedOwner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x53a47bb7',
  },
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x70a08231',
  },
  {
    constant: true,
    inputs: [],
    name: 'synthetix',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x759b5225',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x79ba5097',
  },
  {
    constant: false,
    inputs: [{ name: 'account', type: 'address' }, { name: 'amount', type: 'uint256' }],
    name: 'issue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x867904b4',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8da5cb5b',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x95d89b41',
  },
  {
    constant: false,
    inputs: [{ name: '_proxy', type: 'address' }],
    name: 'setProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x97107d6d',
  },
  {
    constant: false,
    inputs: [],
    name: 'selfDestruct',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x9cb8a26a',
  },
  {
    constant: false,
    inputs: [{ name: 'account', type: 'address' }, { name: 'amount', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x9dc29fac',
  },
  {
    constant: false,
    inputs: [{ name: '_tokenState', type: 'address' }],
    name: 'setTokenState',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x9f769807',
  },
  {
    constant: true,
    inputs: [],
    name: 'SELFDESTRUCT_DELAY',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xa461fc82',
  },
  {
    constant: false,
    inputs: [{ name: 'to', type: 'address' }, { name: 'value', type: 'uint256' }],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xa9059cbb',
  },
  {
    constant: false,
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xab67aa58',
  },
  {
    constant: true,
    inputs: [],
    name: 'feePool',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xae2e933b',
  },
  {
    constant: false,
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'transferSenderPaysFee',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb4bede85',
  },
  {
    constant: true,
    inputs: [],
    name: 'selfDestructInitiated',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xb8225dec',
  },
  {
    constant: false,
    inputs: [{ name: 'sender', type: 'address' }],
    name: 'setMessageSender',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbc67f832',
  },
  {
    constant: false,
    inputs: [],
    name: 'initiateSelfDestruct',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbd32aa44',
  },
  {
    constant: false,
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbe45fd62',
  },
  {
    constant: true,
    inputs: [],
    name: 'selfDestructBeneficiary',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc58aaae6',
  },
  {
    constant: false,
    inputs: [{ name: 'to', type: 'address' }, { name: 'value', type: 'uint256' }],
    name: 'transferSenderPaysFee',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xd66c9cc2',
  },
  {
    constant: true,
    inputs: [],
    name: 'currencyKey',
    outputs: [{ name: '', type: 'bytes4' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xdbd06c85',
  },
  {
    constant: true,
    inputs: [{ name: 'owner', type: 'address' }, { name: 'spender', type: 'address' }],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xdd62ed3e',
  },
  {
    constant: false,
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFromSenderPaysFee',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xe6fbf441',
  },
  {
    constant: true,
    inputs: [],
    name: 'tokenState',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xe90dd9e2',
  },
  {
    constant: false,
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'triggerTokenFallbackIfNeeded',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xeb6ecc03',
  },
  {
    constant: true,
    inputs: [],
    name: 'proxy',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xec556889',
  },
  {
    constant: false,
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'setTotalSupply',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xf7ea7a3d',
  },
  {
    constant: false,
    inputs: [{ name: '_synthetix', type: 'address' }],
    name: 'setSynthetix',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xfec9f9da',
  },
  {
    inputs: [
      { name: '_proxy', type: 'address' },
      { name: '_tokenState', type: 'address' },
      { name: '_synthetix', type: 'address' },
      { name: '_feePool', type: 'address' },
      { name: '_tokenName', type: 'string' },
      { name: '_tokenSymbol', type: 'string' },
      { name: '_owner', type: 'address' },
      { name: '_currencyKey', type: 'bytes4' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newSynthetix', type: 'address' }],
    name: 'SynthetixUpdated',
    type: 'event',
    signature: '0x46e9c68bd7831071bdd478f1ae4c4a52463961a9d620383a0a121dbfc0e0f06d',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newFeePool', type: 'address' }],
    name: 'FeePoolUpdated',
    type: 'event',
    signature: '0x6d1d088acfe4f30d6014f6f693c61c16258f9784a6ed8439b2c59213eecb6295',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'account', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Issued',
    type: 'event',
    signature: '0xa59f12e354e8cd10bb74c559844c2dd69a5458e31fe56c7594c62ca57480509a',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'account', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Burned',
    type: 'event',
    signature: '0x696de425f79f4a40bc6d2122ca50507f0efbeabbff86a84871b7196ab8ea8df7',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
    signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
    signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newTokenState', type: 'address' }],
    name: 'TokenStateUpdated',
    type: 'event',
    signature: '0xa538c4dcfe9fb148efee2952bafe34982d2d07d5fbb38ae5b44abf659a46bfd8',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'proxyAddress', type: 'address' }],
    name: 'ProxyUpdated',
    type: 'event',
    signature: '0xfc80377ca9c49cc11ae6982f390a42db976d5530af7c43889264b13fbbd7c57e',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'SelfDestructTerminated',
    type: 'event',
    signature: '0x6adcc7125002935e0aa31697538ebbd65cfddf20431eb6ecdcfc3e238bfd082c',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'beneficiary', type: 'address' }],
    name: 'SelfDestructed',
    type: 'event',
    signature: '0x8a09e1677ced846cb537dc2b172043bd05a1a81ad7e0033a7ef8ba762df990b7',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'selfDestructDelay', type: 'uint256' }],
    name: 'SelfDestructInitiated',
    type: 'event',
    signature: '0xcbd94ca75b8dc45c9d80c77e851670e78843c0d75180cb81db3e2158228fa9a6',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newBeneficiary', type: 'address' }],
    name: 'SelfDestructBeneficiaryUpdated',
    type: 'event',
    signature: '0xd5da63a0b864b315bc04128dedbc93888c8529ee6cf47ce664dc204339228c53',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newOwner', type: 'address' }],
    name: 'OwnerNominated',
    type: 'event',
    signature: '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'oldOwner', type: 'address' },
      { indexed: false, name: 'newOwner', type: 'address' },
    ],
    name: 'OwnerChanged',
    type: 'event',
    signature: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
  },
];