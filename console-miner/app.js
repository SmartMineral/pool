'use strict';
require("babel-polyfill");

import Web3 from 'web3';
import smartmineral_adapter from '../build/contracts/Pool.json'
//import EthereumBlocks from 'ethereum-blocks';
//

import SmartMineralMiner from './miner';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var test = contract(smartmineral_adapter);
test.setProvider(web3);
await test.deployed();

var miner = new SmartMineralMiner(web3,
    web3.eth.accounts[0],
    console.log,
    smartmineral_adapter);

miner.toggleDebug();