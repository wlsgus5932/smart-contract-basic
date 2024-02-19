/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Greeter } from "../Greeter";

export class Greeter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(greeting_: string, overrides?: Overrides): Promise<Greeter> {
    return super.deploy(greeting_, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    greeting_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(greeting_, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "greeting_",
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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "oldGreeting",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newGreeting",
        type: "string",
      },
    ],
    name: "SetGreeting",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    inputs: [],
    name: "getGreet",
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
    inputs: [],
    name: "getGreetingHistoryAll",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGreetingHistoryCount",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "getGreetingHistoryOne",
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
        internalType: "string",
        name: "greeting_",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "greeting_",
        type: "string",
      },
    ],
    name: "setGreetingPayable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200152238038062001522833981016040819052620000349162000319565b620000646040518060600160405280602281526020016200150060229139826200008960201b620005271760201c565b620000703382620000da565b50600080546001600160a01b031916331790556200076a565b620000d68282604051602401620000a2929190620003ff565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b179091526200024f16565b5050565b6200019d604051806060016040528060238152602001620014dd6023913960018054620001079062000431565b80601f0160208091040260200160405190810160405280929190818152602001828054620001359062000431565b8015620001865780601f106200015a5761010080835404028352916020019162000186565b820191906000526020600020905b8154815290600101906020018083116200016857829003601f168201915b5050505050836200026860201b620005701760201c565b60025460ff161515600003620001bb576002805460ff191660011790555b600380546001808201835560008390527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90910190620001fc9082620004bf565b507f128a6e2ad081a0ef02c4afec3cc4b2cd643d4157a1a0bfdf3b0d678e6c5e9bd8836001846040516200023393929190620005af565b60405180910390a160016200024983826200065c565b50505050565b6200026581620002bc60201b620005b71760201c565b50565b620002b7838383604051602401620002839392919062000721565b60408051601f198184030181529190526020810180516001600160e01b03908116632ced7cef60e01b179091526200024f16565b505050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000310578181015183820152602001620002f6565b50506000910152565b6000602082840312156200032c57600080fd5b81516001600160401b03808211156200034457600080fd5b818401915084601f8301126200035957600080fd5b8151818111156200036e576200036e620002dd565b604051601f8201601f19908116603f01168101908382118183101715620003995762000399620002dd565b81604052828152876020848701011115620003b357600080fd5b620003c6836020830160208801620002f3565b979650505050505050565b60008151808452620003eb816020860160208601620002f3565b601f01601f19169290920160200192915050565b604081526000620004146040830185620003d1565b8281036020840152620004288185620003d1565b95945050505050565b600181811c908216806200044657607f821691505b6020821081036200046757634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002b757600081815260208120601f850160051c81016020861015620004965750805b601f850160051c820191505b81811015620004b757828155600101620004a2565b505050505050565b818103620004cb575050565b620004d7825462000431565b6001600160401b03811115620004f157620004f1620002dd565b620005098162000502845462000431565b846200046d565b6000601f821160018114620005405760008315620005275750848201545b600019600385901b1c1916600184901b178455620005a8565b600085815260209020601f19841690600086815260209020845b838110156200057c57828601548255600195860195909101906020016200055a565b50858310156200059b5781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b60018060a01b03841681526000602060608184015260008554620005d38162000431565b8060608701526080600180841660008114620005f85760018114620006135762000643565b60ff1985168984015283151560051b89018301955062000643565b8a6000528660002060005b858110156200063b5781548b82018601529083019088016200061e565b8a0184019650505b50505050508381036040850152620003c68186620003d1565b81516001600160401b03811115620006785762000678620002dd565b620006898162000502845462000431565b602080601f831160018114620006c15760008415620006a85750858301515b600019600386901b1c1916600185901b178555620004b7565b600085815260208120601f198616915b82811015620006f257888601518255948401946001909101908401620006d1565b5085821015620007115787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b606081526000620007366060830186620003d1565b82810360208401526200074a8186620003d1565b90508281036040840152620007608185620003d1565b9695505050505050565b610d63806200077a6000396000f3fe60806040526004361061007b5760003560e01c8063a41368621161004e578063a413686214610115578063d705a4b514610135578063dfdeddb51461014a578063feb995ab1461016c57600080fd5b806327e235e31461008057806351cff8d9146100c057806372e574d8146100d5578063880fe55514610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004610788565b60046020526000908152604090205481565b6040519081526020015b60405180910390f35b6100d36100ce366004610788565b610181565b005b3480156100e157600080fd5b506100f56100f03660046107b8565b61027a565b6040516100b79190610817565b6100d3610110366004610840565b610329565b34801561012157600080fd5b506100d3610130366004610840565b6103b2565b34801561014157600080fd5b506100f56103bc565b34801561015657600080fd5b5061015f61044e565b6040516100b791906108f1565b34801561017857600080fd5b506003546100ad565b6000546001600160a01b031633146101cd5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064015b60405180910390fd5b60408051808201909152601481527318dbdb9d1c9858dd0818985b185b98d94e88095960621b602082015230906102059082316105d8565b6040516000906001600160a01b03808516919084163180156108fc029184818181858888f193505050509050806102755760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b60448201526064016101c4565b505050565b60606003828154811061028f5761028f610953565b9060005260206000200180546102a490610969565b80601f01602080910402602001604051908101604052809291908181526020018280546102d090610969565b801561031d5780601f106102f25761010080835404028352916020019161031d565b820191906000526020600020905b81548152906001019060200180831161030057829003601f168201915b50505050509050919050565b3467016345785d8a0000146103805760405162461bcd60e51b815260206004820152601a60248201527f6d73672e76616c7565206973206e6f7420302e3120657468657200000000000060448201526064016101c4565b336000908152600460205260408120805434929061039f9084906109a3565b909155506103af9050338261061d565b50565b6103af338261061d565b6060600180546103cb90610969565b80601f01602080910402602001604051908101604052809291908181526020018280546103f790610969565b80156104445780601f1061041957610100808354040283529160200191610444565b820191906000526020600020905b81548152906001019060200180831161042757829003601f168201915b5050505050905090565b60606003805480602002602001604051908101604052809291908181526020016000905b8282101561051e57838290600052602060002001805461049190610969565b80601f01602080910402602001604051908101604052809291908181526020018280546104bd90610969565b801561050a5780601f106104df5761010080835404028352916020019161050a565b820191906000526020600020905b8154815290600101906020018083116104ed57829003601f168201915b505050505081526020019060010190610472565b50505050905090565b61056c828260405160240161053d9291906109ca565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052610775565b5050565b610275838383604051602401610588939291906109f8565b60408051601f198184030181529190526020810180516001600160e01b0316632ced7cef60e01b179052610775565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b61056c82826040516024016105ee929190610a3b565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610775565b6106ca604051806060016040528060238152602001610d0b602391396001805461064690610969565b80601f016020809104026020016040519081016040528092919081815260200182805461067290610969565b80156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b505050505083610570565b60025460ff1615156000036106e7576002805460ff191660011790555b600380546001808201835560008390527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b909101906107269082610aab565b507f128a6e2ad081a0ef02c4afec3cc4b2cd643d4157a1a0bfdf3b0d678e6c5e9bd88360018460405161075b93929190610b8c565b60405180910390a1600161076f8382610c3a565b50505050565b6103af816105b7565b610786610cf4565b565b60006020828403121561079a57600080fd5b81356001600160a01b03811681146107b157600080fd5b9392505050565b6000602082840312156107ca57600080fd5b5035919050565b6000815180845260005b818110156107f7576020818501810151868301820152016107db565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006107b160208301846107d1565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561085257600080fd5b813567ffffffffffffffff8082111561086a57600080fd5b818401915084601f83011261087e57600080fd5b8135818111156108905761089061082a565b604051601f8201601f19908116603f011681019083821181831017156108b8576108b861082a565b816040528281528760208487010111156108d157600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561094657603f198886030184526109348583516107d1565b94509285019290850190600101610918565b5092979650505050505050565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061097d57607f821691505b60208210810361099d57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156109c457634e487b7160e01b600052601160045260246000fd5b92915050565b6040815260006109dd60408301856107d1565b82810360208401526109ef81856107d1565b95945050505050565b606081526000610a0b60608301866107d1565b8281036020840152610a1d81866107d1565b90508281036040840152610a3181856107d1565b9695505050505050565b604081526000610a4e60408301856107d1565b90508260208301529392505050565b601f82111561027557600081815260208120601f850160051c81016020861015610a845750805b601f850160051c820191505b81811015610aa357828155600101610a90565b505050505050565b818103610ab6575050565b610ac08254610969565b67ffffffffffffffff811115610ad857610ad861082a565b610aec81610ae68454610969565b84610a5d565b6000601f821160018114610b205760008315610b085750848201545b600019600385901b1c1916600184901b178455610b85565b600085815260209020601f19841690600086815260209020845b83811015610b5a5782860154825560019586019590910190602001610b3a565b5085831015610b785781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b60018060a01b03841681526000602060608184015260008554610bae81610969565b8060608701526080600180841660008114610bd05760018114610bea57610c18565b60ff1985168984015283151560051b890183019550610c18565b8a6000528660002060005b85811015610c105781548b8201860152908301908801610bf5565b8a0184019650505b50505050508381036040850152610c2f81866107d1565b979650505050505050565b815167ffffffffffffffff811115610c5457610c5461082a565b610c6281610ae68454610969565b602080601f831160018114610c975760008415610c7f5750858301515b600019600386901b1c1916600185901b178555610aa3565b600085815260208120601f198616915b82811015610cc657888601518255948401946001909101908401610ca7565b5085821015610ce45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052605160045260246000fdfe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a26469706673582212201b1bdfb9d1ba0cfcaf24ade6ad537ee80c61a50d5301f0c2eac5bc6cc72fa19d64736f6c634300081100334368616e67696e67206772656574696e672066726f6d202725732720746f20272573274465706c6f79696e67206120477265657465722077697468206772656574696e673a";
