'use strict';

import Web3 from 'web3';
import SmartMineral_adapter from '../build/contracts/SharkPool.json'
import contract from 'truffle-contract'

import SmartMineralMiner from './miner';
import SmartMineralBlock from './miner';

//import BitcoineumMiner from './miner';

var provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

var miner = new SmartMineralMiner(provider,
    web3.eth.accounts[2],
    console.log,
    SmartMineral_adapter);

miner.bootstrap();