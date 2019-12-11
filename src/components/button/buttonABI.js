const BUTTON_ABI = {
  abi: [
    {
      name: 'age',
      constant: true,
      inputs: [],
      outputs: [
        {
          name: '_age',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x262a9dff',
    },

    {
      name: 'claim_treasure',
      constant: false,
      inputs: [],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xaef4da6b',
    },

    {
      name: 'COST',
      constant: true,
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xbf8fbbd2',
    },

    {
      name: 'expired',
      constant: true,
      inputs: [],
      outputs: [
        {
          name: '_expired',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x4c2067c7',
    },

    {
      name: 'lastBlock',
      constant: true,
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x806b984f',
    },

    {
      name: 'lastParticipant',
      constant: true,
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xbfe7e4e3',
    },

    {
      name: 'press_button',
      constant: false,
      inputs: [],
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
      signature: '0x0736783d',
    },

    {
      name: 'reset',
      constant: false,
      inputs: [],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xd826f88f',
    },

    {
      name: 'WAIT_TIME',
      constant: true,
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x388aef5c',
    },

    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
  ],
};

export default BUTTON_ABI;
