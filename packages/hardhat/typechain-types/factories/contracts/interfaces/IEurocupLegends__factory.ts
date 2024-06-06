/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IEurocupLegends,
  IEurocupLegendsInterface,
} from "../../../contracts/interfaces/IEurocupLegends";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isMintOpen",
        type: "bool",
      },
    ],
    name: "MintStatus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "PrizeClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[3]",
        name: "winners",
        type: "address[3]",
      },
    ],
    name: "WinnersSet",
    type: "event",
  },
] as const;

export class IEurocupLegends__factory {
  static readonly abi = _abi;
  static createInterface(): IEurocupLegendsInterface {
    return new Interface(_abi) as IEurocupLegendsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IEurocupLegends {
    return new Contract(address, _abi, runner) as unknown as IEurocupLegends;
  }
}
