/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadgeToken, BadgeTokenInterface } from "../BadgeToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b50604051620030823803806200308283398181016040528101906200003c9190620002c7565b81818160009080519060200190620000569291906200007a565b5080600190805190602001906200006f9291906200007a565b5050505050620003b1565b82805462000088906200037b565b90600052602060002090601f016020900481019282620000ac5760008555620000f8565b82601f10620000c757805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f7578251825591602001919060010190620000da565b5b5090506200010791906200010b565b5090565b5b80821115620001265760008160009055506001016200010c565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001938262000148565b810181811067ffffffffffffffff82111715620001b557620001b462000159565b5b80604052505050565b6000620001ca6200012a565b9050620001d8828262000188565b919050565b600067ffffffffffffffff821115620001fb57620001fa62000159565b5b620002068262000148565b9050602081019050919050565b60005b838110156200023357808201518184015260208101905062000216565b8381111562000243576000848401525b50505050565b6000620002606200025a84620001dd565b620001be565b9050828152602081018484840111156200027f576200027e62000143565b5b6200028c84828562000213565b509392505050565b600082601f830112620002ac57620002ab6200013e565b5b8151620002be84826020860162000249565b91505092915050565b60008060408385031215620002e157620002e062000134565b5b600083015167ffffffffffffffff81111562000302576200030162000139565b5b620003108582860162000294565b925050602083015167ffffffffffffffff81111562000334576200033362000139565b5b620003428582860162000294565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200039457607f821691505b60208210811415620003ab57620003aa6200034c565b5b50919050565b612cc180620003c16000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb4651461025b578063b88d4fde14610277578063c87b56dd14610293578063e985e9c5146102c3576100ea565b806370a08231146101f1578063755edd171461022157806395d89b411461023d576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906118f5565b6102f3565b604051610116919061193d565b60405180910390f35b6101276103d5565b60405161013491906119f1565b60405180910390f35b61015760048036038101906101529190611a49565b610467565b6040516101649190611ab7565b60405180910390f35b61018760048036038101906101829190611afe565b6104ec565b005b6101a3600480360381019061019e9190611b3e565b610604565b005b6101bf60048036038101906101ba9190611b3e565b610664565b005b6101db60048036038101906101d69190611a49565b610684565b6040516101e89190611ab7565b60405180910390f35b61020b60048036038101906102069190611b91565b610736565b6040516102189190611bcd565b60405180910390f35b61023b60048036038101906102369190611b91565b6107ee565b005b610245610810565b60405161025291906119f1565b60405180910390f35b61027560048036038101906102709190611c14565b6108a2565b005b610291600480360381019061028c9190611d89565b6108b8565b005b6102ad60048036038101906102a89190611a49565b61091a565b6040516102ba91906119f1565b60405180910390f35b6102dd60048036038101906102d89190611e0c565b610aa5565b6040516102ea919061193d565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103be57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103ce57506103cd82610b39565b5b9050919050565b6060600080546103e490611e7b565b80601f016020809104026020016040519081016040528092919081815260200182805461041090611e7b565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b5050505050905090565b600061047282610ba3565b6104b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a890611f1f565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104f782610684565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055f90611fb1565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610587610c0f565b73ffffffffffffffffffffffffffffffffffffffff1614806105b657506105b5816105b0610c0f565b610aa5565b5b6105f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ec90612043565b60405180910390fd5b6105ff8383610c17565b505050565b61061561060f610c0f565b82610cd0565b610654576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064b906120d5565b60405180910390fd5b61065f838383610dae565b505050565b61067f838383604051806020016040528060008152506108b8565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490612167565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079e906121f9565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006107f8611015565b9050610804828261102b565b61080c611205565b5050565b60606001805461081f90611e7b565b80601f016020809104026020016040519081016040528092919081815260200182805461084b90611e7b565b80156108985780601f1061086d57610100808354040283529160200191610898565b820191906000526020600020905b81548152906001019060200180831161087b57829003601f168201915b5050505050905090565b6108b46108ad610c0f565b838361121f565b5050565b6108c96108c3610c0f565b83610cd0565b610908576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ff906120d5565b60405180910390fd5b6109148484848461138c565b50505050565b6060610924611862565b6040518061012001604052806101008152602001612b8c61010091398160006003811061095457610953612219565b5b6020020181905250610965836113e8565b8160016003811061097957610978612219565b5b60200201819052506040518060400160405280600d81526020017f3c2f746578743e3c2f7376673e00000000000000000000000000000000000000815250816002600381106109cb576109ca612219565b5b60200201819052506000610a7a6109e1856113e8565b610a55846000600381106109f8576109f7612219565b5b602002015185600160038110610a1157610a10612219565b5b602002015186600260038110610a2a57610a29612219565b5b6020020151604051602001610a4193929190612284565b604051602081830303815290604052611549565b604051602001610a66929190612431565b604051602081830303815290604052611549565b905080604051602001610a8d91906124cd565b60405160208183030381529060405292505050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c8a83610684565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610cdb82610ba3565b610d1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1190612561565b60405180910390fd5b6000610d2583610684565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d9457508373ffffffffffffffffffffffffffffffffffffffff16610d7c84610467565b73ffffffffffffffffffffffffffffffffffffffff16145b80610da55750610da48185610aa5565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dce82610684565b73ffffffffffffffffffffffffffffffffffffffff1614610e24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1b906125f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8b90612685565b60405180910390fd5b610e9f8383836116ad565b610eaa600082610c17565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610efa91906126d4565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f519190612708565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110108383836116b2565b505050565b600060016006546110269190612708565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611092906127aa565b60405180910390fd5b6110a481610ba3565b156110e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110db90612816565b60405180910390fd5b6110f0600083836116ad565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111409190612708565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611201600083836116b2565b5050565b6006600081548092919061121890612836565b9190505550565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561128e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611285906128cb565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161137f919061193d565b60405180910390a3505050565b611397848484610dae565b6113a3848484846116b7565b6113e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d99061295d565b60405180910390fd5b50505050565b60606000821415611430576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611544565b600082905060005b6000821461146257808061144b90612836565b915050600a8261145b91906129ac565b9150611438565b60008167ffffffffffffffff81111561147e5761147d611c5e565b5b6040519080825280601f01601f1916602001820160405280156114b05781602001600182028036833780820191505090505b5090505b6000851461153d576001826114c991906126d4565b9150600a856114d891906129dd565b60306114e49190612708565b60f81b8183815181106114fa576114f9612219565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561153691906129ac565b94506114b4565b8093505050505b919050565b606060008251141561156c576040518060200160405280600081525090506116a8565b6000604051806060016040528060408152602001612b4c604091399050600060036002855161159b9190612708565b6115a591906129ac565b60046115b19190612a0e565b67ffffffffffffffff8111156115ca576115c9611c5e565b5b6040519080825280601f01601f1916602001820160405280156115fc5781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015611668576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f811685015184536001840193505061160d565b505060038651066001811461168457600281146116975761169f565b603d6001830353603d600283035361169f565b603d60018303535b50505080925050505b919050565b505050565b505050565b60006116d88473ffffffffffffffffffffffffffffffffffffffff1661183f565b15611832578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611701610c0f565b8786866040518563ffffffff1660e01b81526004016117239493929190612abd565b6020604051808303816000875af192505050801561175f57506040513d601f19601f8201168201806040525081019061175c9190612b1e565b60015b6117e2573d806000811461178f576040519150601f19603f3d011682016040523d82523d6000602084013e611794565b606091505b506000815114156117da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d19061295d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611837565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60405180606001604052806003905b60608152602001906001900390816118715790505090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118d28161189d565b81146118dd57600080fd5b50565b6000813590506118ef816118c9565b92915050565b60006020828403121561190b5761190a611893565b5b6000611919848285016118e0565b91505092915050565b60008115159050919050565b61193781611922565b82525050565b6000602082019050611952600083018461192e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611992578082015181840152602081019050611977565b838111156119a1576000848401525b50505050565b6000601f19601f8301169050919050565b60006119c382611958565b6119cd8185611963565b93506119dd818560208601611974565b6119e6816119a7565b840191505092915050565b60006020820190508181036000830152611a0b81846119b8565b905092915050565b6000819050919050565b611a2681611a13565b8114611a3157600080fd5b50565b600081359050611a4381611a1d565b92915050565b600060208284031215611a5f57611a5e611893565b5b6000611a6d84828501611a34565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611aa182611a76565b9050919050565b611ab181611a96565b82525050565b6000602082019050611acc6000830184611aa8565b92915050565b611adb81611a96565b8114611ae657600080fd5b50565b600081359050611af881611ad2565b92915050565b60008060408385031215611b1557611b14611893565b5b6000611b2385828601611ae9565b9250506020611b3485828601611a34565b9150509250929050565b600080600060608486031215611b5757611b56611893565b5b6000611b6586828701611ae9565b9350506020611b7686828701611ae9565b9250506040611b8786828701611a34565b9150509250925092565b600060208284031215611ba757611ba6611893565b5b6000611bb584828501611ae9565b91505092915050565b611bc781611a13565b82525050565b6000602082019050611be26000830184611bbe565b92915050565b611bf181611922565b8114611bfc57600080fd5b50565b600081359050611c0e81611be8565b92915050565b60008060408385031215611c2b57611c2a611893565b5b6000611c3985828601611ae9565b9250506020611c4a85828601611bff565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c96826119a7565b810181811067ffffffffffffffff82111715611cb557611cb4611c5e565b5b80604052505050565b6000611cc8611889565b9050611cd48282611c8d565b919050565b600067ffffffffffffffff821115611cf457611cf3611c5e565b5b611cfd826119a7565b9050602081019050919050565b82818337600083830152505050565b6000611d2c611d2784611cd9565b611cbe565b905082815260208101848484011115611d4857611d47611c59565b5b611d53848285611d0a565b509392505050565b600082601f830112611d7057611d6f611c54565b5b8135611d80848260208601611d19565b91505092915050565b60008060008060808587031215611da357611da2611893565b5b6000611db187828801611ae9565b9450506020611dc287828801611ae9565b9350506040611dd387828801611a34565b925050606085013567ffffffffffffffff811115611df457611df3611898565b5b611e0087828801611d5b565b91505092959194509250565b60008060408385031215611e2357611e22611893565b5b6000611e3185828601611ae9565b9250506020611e4285828601611ae9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e9357607f821691505b60208210811415611ea757611ea6611e4c565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611f09602c83611963565b9150611f1482611ead565b604082019050919050565b60006020820190508181036000830152611f3881611efc565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f9b602183611963565b9150611fa682611f3f565b604082019050919050565b60006020820190508181036000830152611fca81611f8e565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b600061202d603883611963565b915061203882611fd1565b604082019050919050565b6000602082019050818103600083015261205c81612020565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006120bf603183611963565b91506120ca82612063565b604082019050919050565b600060208201905081810360008301526120ee816120b2565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000612151602983611963565b915061215c826120f5565b604082019050919050565b6000602082019050818103600083015261218081612144565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006121e3602a83611963565b91506121ee82612187565b604082019050919050565b60006020820190508181036000830152612212816121d6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b600061225e82611958565b6122688185612248565b9350612278818560208601611974565b80840191505092915050565b60006122908286612253565b915061229c8285612253565b91506122a88284612253565b9150819050949350505050565b7f7b226e616d65223a224261646765202300000000000000000000000000000000600082015250565b60006122eb601083612248565b91506122f6826122b5565b601082019050919050565b7f222c226465736372697074696f6e223a224261646765204e465420776974682060008201527f6f6e2d636861696e2053564720696d6167652e222c0000000000000000000000602082015250565b600061235d603583612248565b915061236882612301565b603582019050919050565b7f22696d616765223a2022646174613a696d6167652f7376672b786d6c3b62617360008201527f6536342c00000000000000000000000000000000000000000000000000000000602082015250565b60006123cf602483612248565b91506123da82612373565b602482019050919050565b7f227d000000000000000000000000000000000000000000000000000000000000600082015250565b600061241b600283612248565b9150612426826123e5565b600282019050919050565b600061243c826122de565b91506124488285612253565b915061245382612350565b915061245e826123c2565b915061246a8284612253565b91506124758261240e565b91508190509392505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b60006124b7601d83612248565b91506124c282612481565b601d82019050919050565b60006124d8826124aa565b91506124e48284612253565b915081905092915050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b600061254b602c83611963565b9150612556826124ef565b604082019050919050565b6000602082019050818103600083015261257a8161253e565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006125dd602583611963565b91506125e882612581565b604082019050919050565b6000602082019050818103600083015261260c816125d0565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061266f602483611963565b915061267a82612613565b604082019050919050565b6000602082019050818103600083015261269e81612662565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006126df82611a13565b91506126ea83611a13565b9250828210156126fd576126fc6126a5565b5b828203905092915050565b600061271382611a13565b915061271e83611a13565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612753576127526126a5565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612794602083611963565b915061279f8261275e565b602082019050919050565b600060208201905081810360008301526127c381612787565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612800601c83611963565b915061280b826127ca565b602082019050919050565b6000602082019050818103600083015261282f816127f3565b9050919050565b600061284182611a13565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612874576128736126a5565b5b600182019050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006128b5601983611963565b91506128c08261287f565b602082019050919050565b600060208201905081810360008301526128e4816128a8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612947603283611963565b9150612952826128eb565b604082019050919050565b600060208201905081810360008301526129768161293a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006129b782611a13565b91506129c283611a13565b9250826129d2576129d161297d565b5b828204905092915050565b60006129e882611a13565b91506129f383611a13565b925082612a0357612a0261297d565b5b828206905092915050565b6000612a1982611a13565b9150612a2483611a13565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612a5d57612a5c6126a5565b5b828202905092915050565b600081519050919050565b600082825260208201905092915050565b6000612a8f82612a68565b612a998185612a73565b9350612aa9818560208601611974565b612ab2816119a7565b840191505092915050565b6000608082019050612ad26000830187611aa8565b612adf6020830186611aa8565b612aec6040830185611bbe565b8181036060830152612afe8184612a84565b905095945050505050565b600081519050612b18816118c9565b92915050565b600060208284031215612b3457612b33611893565b5b6000612b4284828501612b09565b9150509291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f3c73766720786d6c6e733d27687474703a2f2f7777772e77332e6f72672f323030302f73766727207072657365727665417370656374526174696f3d27784d696e594d696e206d656574272076696577426f783d273020302033353020333530273e3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e742d66616d696c793a2073657269663b20666f6e742d73697a653a2033303070783b207d3c2f7374796c653e3c726563742077696474683d273130302527206865696768743d2731303025272066696c6c3d2762726f776e27202f3e3c7465787420783d273130302720793d273236302720636c6173733d2762617365273ea26469706673582212202afb1f20a74205afde70d7f37575bb963cf00f1204ab5f56816a480e0da0867464736f6c634300080c0033";

export class BadgeToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadgeToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<BadgeToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): BadgeToken {
    return super.attach(address) as BadgeToken;
  }
  connect(signer: Signer): BadgeToken__factory {
    return super.connect(signer) as BadgeToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgeTokenInterface {
    return new utils.Interface(_abi) as BadgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgeToken {
    return new Contract(address, _abi, signerOrProvider) as BadgeToken;
  }
}
