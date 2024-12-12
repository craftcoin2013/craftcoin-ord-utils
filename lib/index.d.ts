import type { CreateSendOrd, CreateSendLky, CreateMultiSendOrd } from "./types.js";
import { Psbt } from "craftcoinjs-lib";
export declare function createSendCRC({ utxos, toAddress, toAmount, signTransaction, network, changeAddress, receiverToPayFee, feeRate, pubkey, calculateFee, enableRBF, }: CreateSendLky): Promise<Psbt>;
export declare function createSendOrd({ utxos, toAddress, network, changeAddress, pubkey, feeRate, outputValue, signTransaction, calculateFee, enableRBF, }: CreateSendOrd): Promise<Psbt>;
export declare function createMultisendOrd({ utxos, toAddress, signPsbtHex, network, changeAddress, publicKey, feeRate, }: CreateMultiSendOrd): Promise<string>;
